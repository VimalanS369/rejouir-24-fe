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
        title1={<>The Drums of </>}
        title2={<>Celebration</>}
      />
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center md:justify-between relative">
        <div className="absolute opacity-[20%] md:opacity-[100%] md:absolute md:top-0 md:left-[-50px] w-full h-full flex items-left justify-start">
          <motion.img variants={fadeIn('right', 'tween', 1, 0.5)} src="./branchbg.svg" className="h-[100%] w-1/2 absolute z-10" />
          <motion.img variants={fadeIn('up', 'tween', 0.5, 0.5)} src="./backround.svg" className="absolute h-[100%] w-1/4 z-7" />
        </div>
        <motion.p
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal text-[14px] sm:text-[20px] lg:text-[32px] text-center text-secondary-white md:text-left md:w-[55%] z-0"
        >
        Channeling Joyboy's spirit, <span className="font-extrabold font-title space-between-4 text-redborder-r-4 transition-colors duration-300 hover:text-fire-engine-red">REJOUIR 2024</span> ignites a three-day celebration where youthful hearts dance to the beat of innovation. Forget academic burdens - immerse in cultural vibrancy and cutting-edge tech showcases. More than an event, it's a nationwide pilgrimage for students, united by the magic of creativity, competition, and shared dreams. Here, passion finds its voice in a thousand echoes,  reminding us that<span className="font-extrabold font-family-sans text-red border-r-4 text-black"> the best cure for humanity's ills is the simple act of celebrating together.</span>
        </motion.p>
      </div>
    </motion.div>
  </section>
);

export default WhenandWhere;
