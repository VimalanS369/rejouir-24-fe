/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */

'use client';

import { motion } from 'framer-motion';

import { navVariants } from '../utils/motion';

const Navbar = () => (
  <section>
    <div className="navbar text-secondary-white z-[10] relative">
      <div className="navbar-start">
        <div className="absolute opacity-10 inset-0 right-10 bg-gradient-to-r" />
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu dropdown-content mt-3 z-[5] p-2 bg-primary-black shadow rounded-box w-52">
            <li><a className="hover:text-black" href="/">Home</a></li>
            <li><a className="hover:text-black" href="/about">About</a></li>
            <li><a className="hover:text-black" href="/events">Event Registration</a></li>
            <li><a className="hover:text-black" href="/regprofile">Create Profile</a></li>
            <li><a className="hover:text-black" href="/viewprofile">My Profile</a></li>
            <li><a className="hover:text-black" href="/signup">Signup/Login</a></li>
            <li><a className="hover:text-black" href="/guidelines">Guidelines</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <img src="ptu-logo.png" class="h-20 w-22 max-w-full pr-4" alt="PTU Logo" />
        <a class="btn btn-ghost text-xl font-bold font-title hidden lg:block">PUDUCHERRY TECHNOLOGICAL UNIVERSITY</a>
        <a class="btn btn-ghost text-xl font-bold font-title lg:hidden">PTU</a>
      </div>


      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle !no-underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="btn btn-ghost btn-circle !no-underline">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="badge badge-xs badge-error indicator-item" />
          </div>
        </button>
      </div>
    </div>
  </section>
);

export default Navbar;
