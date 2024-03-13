/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */

'use client';

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
          <li><a className="hover:text-black" href="/" key="home">Home</a></li>
          <li><a className="hover:text-black" href="/about" key="about">About</a></li>
          <li><a className="hover:text-black" href="/events" key="events">Event Registration</a></li>
          <li><a className="hover:text-black" href="/regprofile" key="regprofile">Create Profile</a></li>
          <li><a className="hover:text-black" href="/viewprofile" key="viewprofile">My Profile</a></li>
          <li><a className="hover:text-black" href="/signup" key="signup">Signup/Login</a></li>
          <li><a className="hover:text-black" href="/guidelines" key="guidelines">Guidelines</a></li>
        </ul>
        </div>
      </div>
      <div className="navbar-center" >    
        <img src="/ptu-logo.svg" className="h-20 w-22 max-w-full pr-4" alt="PTU Logo" />
        <a className="btn btn-ghost text-xl font-bold font-title hidden lg:block z-0" href="/" >PUDUCHERRY TECHNOLOGICAL UNIVERSITY</a>
        <a className="btn btn-ghost text-xl font-bold font-title lg:hidden">PTU</a>
      </div>
      <div className="navbar-end">
        
        <button className="btn btn-ghost btn-circle !no-underline">
          <div className="indicator">
            <a href="https://www.instagram.com/rejouir_ptu?igsh=dGhkYWxzZTFpZ3N2">
              <img src="/instagram.svg" alt="instagram" className="object-contain cursor-pointer filter invert" />
            </a>
          </div>
        </button>
      </div>
    </div>
  </section>
);

export default Navbar;
