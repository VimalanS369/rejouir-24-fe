'use client';

import { motion } from 'framer-motion';
import { TitleText3 } from '../components/CustomTexts';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const WhenandWhere = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TitleText3
        title1={<>Word1 </>}
        title2={<>Word2</>}
      />
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center md:justify-between relative">
        <div className="absolute opacity-[20%] md:opacity-[100%] md:absolute md:top-0 md:left-[-50px] w-full h-full flex items-left justify-start">
          <motion.img variants={fadeIn('right', 'tween', 1, 0.5)} src="./branch top.svg" className="h-[100%] w-1/2 absolute z-10" />
          <motion.img variants={fadeIn('up', 'tween', 0.5, 0.5)} src="./branchbg.svg" className="absolute h-[100%] w-1/4 z-7" />
        </div>
        <motion.p
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal text-[14px] sm:text-[20px] lg:text-[32px] text-center text-secondary-white md:text-left md:w-[55%] z-0"
        >
          <span className="font-extrabold font-family-sans text-red border-r-4 text-black">Save your Dates</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting
        </motion.p>
      </div>
    </motion.div>
  </section>
);

export default WhenandWhere;
