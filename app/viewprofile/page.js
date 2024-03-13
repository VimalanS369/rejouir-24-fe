'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  textVariant,
  fadeIn,
  staggerContainer,
} from "../../utils/motion";
import Link from "next/link";

function StudentDetails() {
  const [student, setStudent] = useState(null);
  const [events, setEvents] = useState([]);

  const uid = typeof localStorage !== 'undefined' ? localStorage.getItem("user_id") : null;


  useEffect(() => {
    if (uid) {
      async function fetchData() {
        try {
          const studentResponse = await axios.get(
            `http://api.rejouirptu.in/student/${uid}/`
          );
          setStudent(studentResponse.data);
          const uname = studentResponse.data.name;

          // Check if localStorage is defined before using it
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('user_name', uname);
          }

          const eventsResponse = await axios.get(
            `http://api.rejouirptu.in/students/${uid}/events/`
          );
          setEvents(eventsResponse.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchData();
    }
  }, [uid]);

  if (!student) {
    return (
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="flex justify-center items-center bg-primary-black overflow-hidden h-screen"
      >
        <div class="font-bold text-black text-center text-lg">
          Profile not created and registered here -&nbsp;
          <a href="/regprofile" class="text-bold text-red-800">
            Create profile
          </a>
        </div>

      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="bg-primary-black overflow-hidden"
    >
      {/* Student Details Section */}
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 0.5)}
        className="flex justify-center items-center h-screen"
      >
        <motion.div
          className="relative md:flex md:flex-row flex-col md:w-2/3 rounded-lg lg:shadow-extra-lg m-0"
        >
          <div className="md:w-1/2 m-0 p-0">
            <img
              src={student.id_card}
              alt="ID Card"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <motion.div
            className="relative w-full md:w-1/2 p-[30px] py-[40px] m-0 bg-black bg-opacity-30 rounded-br-lg lg:rounded-tr-lg md:rounded-tr-lg space-y-4 sm:p-[20px] sm:py-[60px]"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 text-center md:pb-[60px]">
              Student Details
            </h1>
            <ul>
              <li className="font-semibold text-black text-xl">
                Name:{" "}<span className="font-bold text-red-900 text-xl">{student.name}</span>
              </li>
              <li className="font-semibold text-black text-xl">
                College:{" "}
                <span className="font-bold text-red-900 text-xl">{student.college}</span>
              </li>
              <li className="font-semibold text-black text-xl">
                Department:{" "}
                <span className="font-bold text-red-900 text-xl">{student.dept}</span>
              </li>
              <li className="font-semibold text-black text-xl">
                Year:{" "}<span className="font-bold text-red-900 text-xl">{student.year}</span>
              </li>
              <li className="font-semibold text-black text-xl">
                Email:{" "}<span className="font-bold text-red-900 text-xl">{student.email}</span>
              </li>
              <li className="font-semibold text-black text-xl">
                Phone Number:{" "}
                <span className="font-bold text-red-900 text-xl">{student.ph_no}</span>
              </li>
              <li className="font-semibold text-black text-xl">
                Is Approved:{" "}
                {student.is_approved ? (
                  <span className="font-bold text-green-900 text-xl">Yes</span>
                ) : (
                  <span className="font-bold text-red-900 text-xl">No</span>
                )}
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="mt-8 bg-black bg-opacity-30 p-4 rounded-lg text-white">
        <h2 className="text-2xl font-semibold text-center mb-4 text-black">REGISTERED EVENTS</h2>
        <p className="text-xl text-black mb-4 py-4 text-center font-medium">
          Check event details & <span className="text-red-700 font-bold text-xl">Add Team members </span> by clicking on <span className="text-green-800 font-bold text-xl">Click here for full details. </span>
        </p>

        {events.map((event, index) => (
          <div
            key={event.id}
            className={`relative bg-white bg-opacity-20 p-4 rounded-lg mb-4 cursor-pointer transition-colors duration-300 ${index % 2 === 0
              ? "hover:bg-red-800 hover:bg-opacity-90"
              : "hover:bg-blue-900 hover:bg-opacity-90"
              }`}
          >
            <Link key={event.id} href={`/viewprofile/${event.id}`}>
              <h3 className="text-lg font-semibold text-white">
                {event.event.title}
              </h3>

              <p className="text-sm text-black-400 mt-2">
                Date: {event.event.date}
              </p>
              <p className="text-sm text-black-400 mt-2">
                Amount: {event.event.reg_fee}
              </p>
            </Link>
            <div className="text-sm text-gray-400 mt-2 flex justify-end">
              <ul>
                {event.is_paid ? (
                  <li className="text-white font-bold text-lg">Paid</li>
                ) : (
                  <li className="text-sm text-black font-bold mt-2 bg-red-500 py-1 px-4 rounded-md hover:bg-red-600">
                    <Link href={`https://forms.gle/VsYjACo252jWCZbC8`} >
                      Pay for event
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="text-sm text-gray-400 mt-2 flex justify-end">
              <Link key={event.id} href={`/viewprofile/${event.id}`}>
                <button className="text-sm text-black bg-orange-400 border border-gray-400 rounded-md px-2 py-1 hover:bg-orange-400 hover:text-white">
                  Click here for full details
                </button>
              </Link>
            </div>
            {/* <Link className="text-sm text-gray-400 mt-2 flex" key={event.id} href={`/viewprofile/${event.id}`}>Click here for full details</Link> */}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default StudentDetails;
