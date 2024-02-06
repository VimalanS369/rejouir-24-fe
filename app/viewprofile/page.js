'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Import motion for animation
import { textVariant, fadeIn, staggerContainer } from "../../utils/motion"; // Import animation styles

function StudentDetails() {
  const [student, setStudent] = useState(null);
  const uid = localStorage.getItem("user_id");
//   const team_lead = localStorage.getItem("team_lead", team_lead);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/student/${uid}`);
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    }
    fetchData();
  }, [uid]);

  if (!student) {
    return (
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="flex justify-center items-center bg-primary-black overflow-hidden h-screen"
      >
        <div className="text-white">Loading...</div>
      </motion.div>
    );
  }

  // Construct the URL for the ID card image using the backend's API
  const idCardImageUrl = `http://127.0.0.1:8000${student.id_card}`;
  console.log(student);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="flex justify-center items-center bg-primary-black overflow-hidden h-screen"
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 0.5)}
        className="relative md:flex md:flex-row flex-col md:w-2/3 rounded-lg lg:shadow-extra-lg m-0"
      >
        <div className="md:w-1/2 m-0 p-0">
          <img
            src="/img-1.jpg"
            alt="HeroRegisterimg"
            className="w-full h-full object-cover lg:rounded-bl-lg md:rounded-bl-lg  rounded-tl-lg sm:rounded-tr-lg m-0 p-0"
          />
        </div>
        <motion.div
          className="relative w-full md:w-1/2 p-[30px] py-[40px] m-0 bg-black bg-opacity-30 rounded-br-lg lg:rounded-tr-lg md:rounded-tr-lg space-y-4 sm:p-[20px] sm:py-[60px]"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center md:pb-[60px]">
            Student Details 
          </h1>
          <ul>
            <li className="text-white">
              Name: <span className="text-blue-500">{student.name}</span>
            </li>
            <li className="text-white">
              College: <span className="text-green-500">{student.college}</span>
            </li>
            <li className="text-white">
              Department:{" "}
              <span className="text-purple-500">{student.dept}</span>
            </li>
            <li className="text-white">
              Year: <span className="text-red-500">{student.year}</span>
            </li>
            <li className="text-white">
              Email: <span className="text-yellow-500">{student.email}</span>
            </li>
            <li className="text-white">
              Phone Number:{" "}
              <span className="text-orange-500">{student.ph_no}</span>
            </li>
            {student.id_card && (
              <div>
                <h3 className="text-white">ID Card</h3>
                <img
                  src={student.id_card}
                  alt="ID Card"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            )}
            <li className="text-white">
              Is Approved:{" "}
              {student.is_approved ? (
                <span className="text-green-500">Yes</span>
              ) : (
                <span className="text-red-500">No</span>
              )}
            </li>
            {/* <p className="text-white mt-4">
              Additional information or description here.
            </p> */}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default StudentDetails;
