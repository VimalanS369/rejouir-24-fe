'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import styles from '../../styles';
import { staggerContainer } from '../../utils/motion';
import { Navbar, TitleText } from '../../components';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const navigateToCultural = () => {
    router.push('/events/category/Day3');
  }

  const navigateToTechnical = () => {
    router.push('/events/category/Day1');
  }

  const navigateToNontechnical = () => {
    router.push('/events/category/Day2');
  }


  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText title={<>Register</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        <motion.div
              
              variants={fadeIn('right', 'spring',1.5, 0.75)}
              className={`relative ${'lg:flex-[0.5] flex-[2]'
              } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
              onClick={navigateToTechnical}
            >
              <img
                src="/card9.webp"
                alt="cult-card"
                className="absolute w-full h-full object-cover rounded-[24px]"
              />
              <h3 className="font-semibold sm:text-[30px] text-[18px] text-white absolute z-0 lg:top-20 lg:rotate-[-90deg] lg:origin-[0,0] left-5 sm:left-auto">
                Day 1
              </h3>
            </motion.div>
            <motion.div
              
              variants={fadeIn('right', 'spring',1.5, 0.75)}
              className={`relative ${'lg:flex-[0.5] flex-[2]'
              } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
              onClick={navigateToNontechnical}
            >
              <img
                src="/card8.webp"
                alt="cult-card"
                className="absolute w-full h-full object-cover rounded-[24px]"
              />
              <h3 className="font-semibold sm:text-[30px] text-[18px] text-white absolute z-0 lg:top-20 lg:rotate-[-90deg] lg:origin-[0,0] left-5 sm:left-auto">
                Day 2
              </h3>
            </motion.div>
            <motion.div
              
              variants={fadeIn('right', 'spring',1.5, 0.75)}
              className={`relative ${'lg:flex-[0.5] flex-[2]'
              } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
              onClick={navigateToCultural}
            >
              <img
                src="/card6.webp"
                alt="cult-card"
                className="absolute w-full h-full object-cover rounded-[24px]"
              />
              <h3 className="font-semibold sm:text-[30px] text-[18px] text-white absolute z-0 lg:top-20 lg:rotate-[-90deg] lg:origin-[0,0] left-5 sm:left-auto">
                Day 3
              </h3>
            </motion.div>
            
            
        </div>
      </motion.div>
    </section>
  );
};

export default Register;
