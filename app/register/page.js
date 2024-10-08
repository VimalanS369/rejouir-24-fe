'use client'
import { motion } from "framer-motion";
import axios from 'axios';
import React, { useState } from 'react';
import { textVariant, fadeIn, staggerContainer } from '../../utils/motion';

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userDetails.password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(userDetails);

    try {
      const response = await axios.post('https://api.rejouirptu.in/signup/', userDetails);
      console.log('Registration successful:', response.data);
      alert("Registration successful. Login to continue");
      setShowPopup(true);
    } catch (error) {
      console.error('Registration failed:', error);
      alert("Registration failed.");
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="flex justify-center items-center bg-primary-black overflow-hidden h-screen"
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 0.5)}
        className="relative md:flex md:flex-row flex-col md:w-2/3 rounded-lg lg:shadow-extra-lg m-0"
      >
       <div className="opacity-[20%] md:opacity-[100%] md:absolute md:top-0 md:right-0 w-full h-full top-[50%] flex items-center justify-center z-0  md:mr-[30%] ">
          <motion.img variants={fadeIn('left', 'tween', 0.5, 0.5)} src="./crane.svg" className="absolute w-[100%] xl:w-1/4 md:w-1/2 z-10 items-bottom justify-end" />
          <motion.img variants={fadeIn('right', 'tween', 0.5, 0.5)} src="./rectboxforcrane.svg" className="absolute w-[100%]  xl:w-1/4  md:w-1/2 z-3 items-bottom justify-end " />
          <motion.img variants={fadeIn('down', 'tween', 0, 0.5)} src="./cloudforcrane.svg" className="absolute w-[100%] md:w-1/2  xl:w-1/4 z-7 items-bottom justify-end" />

        </div>
        <motion.form
          onSubmit={handleSubmit}
          className="relative w-full md:w-1/2 p-[50px] py-[70px] m-0 bg-black bg-opacity-30 rounded-br-lg lg:rounded-tr-lg md:rounded-tr-lg space-y-4 sm:p-[40px] sm:py-[100px]"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center md:pb-[80px]">
            Sign Up
          </h1>
          <label 
            className="py-5 px-1 pt-3 bg-transparent text-white w-full top-5">Email ID</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={userDetails.email}
            onChange={handleChange}
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            required
          />
          <label 
            className="py-5 px-1 pt-3 bg-transparent text-white w-full top-5">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={userDetails.password}
            onChange={handleChange}
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            required
          />
          <label 
            className="py-5 px-1 pt-3 bg-transparent text-white w-full top-5">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            required
          />
          <button
            type="submit"
            className="py-2 px-4 bg-fire-engine-red hover:bg-red-800 text-white rounded-lg w-full"
          >
            Sign Up
          </button>
          <div className="w-full text-center mt-8">
            <p className="text-sm text-white" >Already have an Account? <a href="/login" className="text-sm font-bold text-white">Login</a></p>
          </div>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Register;
