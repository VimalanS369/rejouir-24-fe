'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react'; // Import useRef hook

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

import { TitleText2 } from '../components/CustomTexts';
import { TitleText } from '../components';

const Notifyinfo = () => {
  const marqueeRef = useRef(null); // Create a ref for the marquee element

  // Function to start the auto-scrolling effect when component mounts
  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const animation = marqueeElement.animate(
      [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }],
      {
        duration: 20000, // Adjust duration as needed
        iterations: Infinity, // Loop infinitely
        easing: 'linear', // Linear easing for a smooth scroll effect
      }
    );

    return () => {
      // Clean up animation on component unmount
      animation.cancel();
    };
  }, []);

  return (

    <section className={`${styles.paddings} relative z-10`} style={{ overflow: 'hidden' }}>
      <TitleText
        title={<>Announcements</>}
        textStyles="text-center"
      />
      <motion.h4
        ref={marqueeRef} // Attach the ref to the marquee element
        className="text-center text-xl text-fire-engine-red pb-20 pt-3marquee"
        style={{ whiteSpace: 'nowrap' }} // Ensure text does not wrap to the next line
      >
        Check <span className="font-bold text-black-900">Guidelines</span> for successful registration. Bring college ID card compulsorily. 
        Get your <span className="font-bold text-black-900">Gate Pass</span> by clicking <span className="font-bold text-black-900">Gate Pass Link</span> below
      </motion.h4>

      <motion.div className="flex flex-row justify-between items-center">
        <div className="mr-4">
          <a href='/signup' className="bg-red-700 hover:bg-red-800 text-white btn btn-sm md:btn-md lg:btn-lg btn-active">Register Now</a>
        </div>
        <div className="ml-4">
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSeHVbqo_GjJkA4EJtjt0qktf5Acr1pL2XYAAU5MIFQ9wQuogQ/viewform?usp=sf_link' className="bg-red-700 hover:bg-red-800 text-white btn btn-sm md:btn-md lg:btn-lg btn-active">Gate Pass link</a>
        </div>
      </motion.div>

    </section>
  );
};

export default Notifyinfo;
