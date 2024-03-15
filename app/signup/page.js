'use client';

import { motion } from 'framer-motion';
import { React, handleSubmit, useState } from 'react';
import axios from 'axios';
import styles from '../../styles';

import { textVariant, fadeIn, staggerContainer } from '../../utils/motion';

const Signup = () => {
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
      className="flex justify-center items-center bg-primary-black h-screen z-5 relative"
    >

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between relative w-3/4 m-5">
        <div className="opacity-[20%] md:opacity-[100%] md:absolute md:top-0 md:right-0 w-full h-full top-[50%] flex items-center justify-center z-0  md:mr-[30%] ">
          <motion.img variants={fadeIn('left', 'tween', 0.5, 0.5)} src="./crane.svg" className="absolute w-[100%] xl:w-1/4 md:w-1/2 z-10 items-bottom justify-end" />
          <motion.img variants={fadeIn('right', 'tween', 0.5, 0.5)} src="./rectboxforcrane.svg" className="absolute w-[100%]  xl:w-1/4  md:w-1/2 z-3 items-bottom justify-end " />
          <motion.img variants={fadeIn('down', 'tween', 0, 0.5)} src="./cloudforcrane.svg" className="absolute w-[100%] md:w-1/2  xl:w-1/4 z-7 items-bottom justify-end" />

        </div>

        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn('up', 'tween', 0, 0.5)}
          className="relative w-full md:w-1/2 p-[30px] py-[70px] ml-[0px]   bg-black bg-opacity-30 rounded-xl space-y-6 md:ml-[50%] z-1"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 text-center">
            SIGNUP
          </h1>
          <div className="flex flex-col space-y-2">
            <label className="text-black">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={userDetails.email}
              onChange={handleChange}
              className="py-2 px-3 rounded-md border bg-transparent text-black"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-black">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={userDetails.password}
              onChange={handleChange}
              className="py-2 px-3 rounded-md border bg-transparent text-black"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-black">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="py-2 px-3 rounded-md border bg-transparent text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-fire-engine-red hover:bg-red-800 text-black rounded-lg w-full"
          >
            Register
          </button>
          <div className="w-full text-center mt-8">
            <p className="text-sm text-black">Already Have an account?<a href="/login" className="text-sm text-fire-engine-red font-bold ml-4">Login</a>
            </p>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Signup;
