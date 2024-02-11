'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingBoldText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

import { TitleText2 } from '../components/CustomTexts';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TitleText2
        title1={<>About </>}
        title2={<>Rejouir</>}
      />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between relative">
        <div className="opacity-[20%] md:opacity-[100%] md:absolute md:top-0 md:left-0 w-full h-full flex items-left justify-end">
          <motion.img variants={fadeIn('left', 'tween', 1, 0.5)} src="./seatopp.png" className="absolute w-[75%] xl:w-1/2 z-10" />
          <motion.img variants={fadeIn('right', 'tween', 0, 0.5)} src="./seabottomm.png" className="absolute w-[75%]  xl:w-1/2 z-1" />
          <motion.img variants={fadeIn('up', 'tween', 0.5, 0.5)} src="./rectt.png" className="absolute w-[75%]  xl:w-1/2 z-7" />
        </div>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal text-[14px] sm:text-[20px] lg:text-[32px] text-center text-secondary-white md:text-left md:w-[55%] z-0"
        >
          <span className="font-extrabold font-family-sans text-red bg-black border-r-4 text-red-700">Rejouir</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting
        </motion.p>

      </div>

    </motion.div>
  </section>
);

export default About;
