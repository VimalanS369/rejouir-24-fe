'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { React, handleSubmit, useState } from 'react';
import axios from 'axios';
import styles from '../../styles';

import { textVariant, fadeIn, staggerContainer } from '../../utils/motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {
        email,
        password,
      });
      console.log('email:', response.data);
      const authToken = response.data.token; // Extract token from response
      console.log('Received Token:', authToken); // Log the token
      localStorage.setItem('authToken', authToken); // Store the token in localStorage
      const uid = response.data.user_id;
      const uname = response.data.user_name;
      localStorage.setItem('user_id', uid);
      localStorage.setItem('user_name', uname);

      if (response.data.success) {
        // Login successful, navigate to home page with the user's details
        router.push('/');
        const authToken = response.data.token;
        console.log('after login Token:', authToken);
      } else {
        // Incorrect credentials, display pop-up message
        setShowPopup(true);
        setLoginStatus('Username or password is incorrect');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="flex justify-center items-center bg-primary-black h-screen "
    >

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between relative w-3/4 ">
        <div className="opacity-[20%] md:opacity-[100%] md:absolute md:top-0 md:left-0 w-full h-full flex items-left justify-end">
          <motion.img variants={fadeIn('left', 'tween', 0.5, 0.5)} src="./nika.png" className="absolute w-[100%] xl:w-1/4 md:w-1/2 z-10 opacity-60 items-bottom justify-end" />
          <motion.img variants={fadeIn('right', 'tween', 0.5, 0.5)} src="./seabottomm.png" className="absolute w-[150%]  xl:w-[75%] z-0" />
          <motion.img variants={fadeIn('down', 'tween', 0, 0.5)} src="./darkredcircle.svg" className="absolute w-[100%] md:w-1/2  xl:w-1/4 z-7 items-bottom justify-end" />

        </div>

        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn('up', 'tween', 0, 0.5)}
          className="relative w-full md:w-1/2 p-[30px] py-[70px] m-0 bg-black bg-opacity-30 rounded-xl space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center">
            LOGIN
          </h1>
          <label 
            className="py-2 px-1 bg-transparent text-white w-full">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            required
          />
          <label 
            className="py-5 px-1 pt-3 bg-transparent text-white w-full top-5">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            required
          />
          <button
            type="submit"
            className="py-2 px-4 bg-fire-engine-red hover:bg-red-800 text-white rounded-lg w-full"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="w-full text-center mt-8">
            <a href="#forgot-password" className="text-sm text-white">Forgot password?</a>
            <a href="#sign-up" className="text-sm text-white ml-4">Sign up</a>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Login;
