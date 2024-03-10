'use client';
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "../../utils/motion";

function StudentComponent() {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [dept, setDept] = useState("");
  const [year, setYear] = useState(0);
//   const [email, setEmail] = useState("");
  const [phNo, setPhNo] = useState("");
  const [idCard, setIdCard] = useState(null);

  const handleImageChange = (event) => {
    setIdCard(event.target.files[0]);
  };

  async function save(event) {
    event.preventDefault();
    try {
      const authToken = localStorage.getItem("authToken");
      console.log("Token:", authToken);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("college", college);
      formData.append("dept", dept);
      formData.append("year", year);
    //   formData.append("email", email);
      formData.append("ph_no", phNo);
      formData.append("id_card", idCard);

      await axios.post("http://127.0.0.1:8000/student/", formData, {
        headers: {
          Authorization: `Token ${authToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Token after:", authToken);

      alert("Student Registration Successful");
      setName("");
      setCollege("");
      setDept("");
      setYear(0);
    //   setEmail("");
      setPhNo("");
      setIdCard(null);
    } catch (err) {
      alert("Student Registration Failed");
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="flex justify-center items-center bg-primary-black overflow-hidden h-screen"
    >
      <motion.form
        onSubmit={save}
        variants={fadeIn('up', 'tween', 0.5, 0.5)}
        className="relative w-[90%] md:w-2/3 p-4 m-0 bg-black bg-opacity-30 rounded-lg lg:w-[600px] lg:shadow-extra-lg"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center md:pb-4">
          Student Details
        </h1>
        <div className="form-group text-white">
          <label>Name</label>
          <input
            type="text"
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group text-white">
          <label>College</label>
          <input
            type="text"
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            value={college}
            onChange={(event) => setCollege(event.target.value)}
          />
        </div>
        <div className="form-group text-white">
          <label>Department</label>
          <input
            type="text"
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            value={dept}
            onChange={(event) => setDept(event.target.value)}
          />
        </div>
        <div className="form-group text-white">
          <label>Year</label>
          <input
            type="number"
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            value={year}
            onChange={(event) => setYear(parseInt(event.target.value))}
          />
        </div>
        {/* <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div> */}
        <div className="form-group text-white">
            <label>Phone Number</label>
            <input
              type="text"
              className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
              value={`+91 ${phNo}`}
              onChange={(event) => setPhNo(event.target.value.replace('+91 ', ''))}
            />
          </div>
        <div className="form-group text-white">
          <label>ID Card (Optional)</label>
          <input
            type="file"
            name="id_card"
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <button
            className="py-4 my-4 px-4 bg-fire-engine-red hover:bg-red-800 text-black rounded-lg w-full"
            onClick={save}
          >
            Register
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}

export default StudentComponent;
