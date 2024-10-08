/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable jsx-a11y/img-redundant-alt */

'use client';

// Hero.js
import { easeIn, motion } from 'framer-motion';
import { useEffect } from 'react';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';


const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Determine the scale value based on screen size
      const screenSize = window.innerWidth;


      const scrollPosition = window.scrollY;

      const scaleL3 = 1 - scrollPosition / 3000;
      const scaleL4 = 1 - scrollPosition / 3000; // Adjusted scale for L4
      const translateXL4 = scrollPosition / 5; // Adjusted horizontal translation for L4
      const translateYL4 = scrollPosition / 5; // Adjusted vertical translation for L4

      document.getElementById('L3').style.transform = `scale(${scaleL3}) translateX(${scrollPosition / 5}px)`;
      document.getElementById('L4').style.transform = `scale(${scaleL4}) translateX(-${translateXL4}px) translateY(-${translateYL4}px)`; // Apply scale and translations to L4
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${styles.yPaddings} ${styles.fullScreen} flex flex-col justify-center items-center z-5 relative`}>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col relative`}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: -30 }}
          transition={{ duration: 0.5, ease: easeIn }}
          className="absolute z-5 w-1/2 md:w-1/4 left-0 bottom-[-100px] md:bottom-[50px] lg:bottom-[200px] xl:left-[-300px]"
        >
          <img
            src="/tcherryblossom.svg"
            id="L4"
            alt="Cherryblossom1"
            className="w-full "
            style={{ width: '200vw' }}
          />
        </motion.div>

        <motion.div initial={{ opacity: 1, scale: 0, rotate: -90 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.3 }}
          className="relative z-5 md:w-full flex-col items-center "
        >
          <img
            src="/rejouir.svg"
            id="L0"
            alt="Hero"
            className="w-full scale-[80%] md:scale-[50%] xl:scale-[40%]"
          />
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 20 }}
        transition={{ duration: 0.3, ease: easeIn }}
        className="absolute z-5 w-1/2 md:w-1/4 right-0 top-0"
      >
        <img
          src="/cherryblossom.svg"
          id="L3"
          alt="Cherryblossom2"
          className="w-full "
          style={{ width: '200vw' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;