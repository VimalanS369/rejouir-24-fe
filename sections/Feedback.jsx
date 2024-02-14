'use client';

import { motion } from 'framer-motion';
import { handleSubmit } from 'react';
import { TitleText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';


const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col ${styles.yPaddings}`}
    >
       <TitleText title="Drop your Queries" textStyles="text-center" />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between relative">
        <div className="opacity-[20%] md:opacity-[100%] md:absolute md:top-0 md:left-0 w-full h-full flex sm:items-left md:items-center sm:justify-center md:justify-end">
          <motion.img variants={fadeIn('left', 'tween', 1, 0.5)} src="./japfanflower.svg" className="absolute w-[75%] lg:w-1/4 md:w-1/2 z-10 items-center justify-end" />
          <motion.img variants={fadeIn('right', 'tween', 0, 0.5)} src="./japfanredcircle.svg" className="absolute w-[75%] lg:w-1/4 md:w-1/2 z-1" />
          <motion.img variants={fadeIn('up', 'tween', 0.5, 0.5)} src="./japfan.svg" className="absolute w-[75%] lg:w-1/4 md:w-1/2 z-7 " />
        </div>

        <div variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal  text-start text-secondary-white md:text-left md:w-[55%] z-0"
        >
          <motion.form
            variants={fadeIn('down', 'tween', 1, 1)}
            onSubmit={handleSubmit}
            className="flex-col p-4 bg-secondary-white bg-opacity-30 rounded-lg justify-center rounded-tl-3 shadow-md space-y-6 w-[70%] sm:w-[80%] md:w-[60%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%]  mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="placeholder-secondary-white placeholder-opacity-40 py-2 px-3 rounded-md border bg-transparent text-secondary-white w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="placeholder-secondary-white placeholder-opacity-40 py-2 px-3 rounded-md border bg-transparent text-secondary-white w-full"
              required
            />
            <textarea
              name="feedback"
              placeholder="Your Query"
              className="placeholder-secondary-white placeholder-opacity-40 py-2 px-3 rounded-md border bg-transparent text-secondary-white w-full h-24 resize-none"
              required
            />
            <button
              type="submit"
              className="py-2 px-4 bg-fire-engine-red hover:bg-[#851c2d] text-primary-black rounded-md w-full"
            >
              Submit Feedback
            </button>
          </motion.form>
        </div>

      </div>

    </motion.div>
  </section>
);

export default Feedback;
