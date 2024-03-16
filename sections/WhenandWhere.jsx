'use client';

import { motion } from 'framer-motion';
import { TitleText2 } from '../components/CustomTexts';
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
        title1={<>Chief</>}
        title2={<>Guest</>}
      />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-16">
        <div className="md:w-1/2 md:order-1 flex items-center justify-center md:justify-start max-h-[500px] max-w-[400px] md:pr-12 mb-8">
          <motion.img
            src="/vc.webp"
            alt="Example Image"
            className="md:w-full h-auto md:object-cover"
            variants={fadeIn('up', 'tween', 0.5, 0.5)}
          />
        </div>
        <motion.p
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal text-[12px] sm:text-[16px] lg:text-[28px] text-center text-secondary-white md:text-left md:w-[50%] z-0 mb-8"
        >
          <span className="font-extrabold font-title text-xxl space-between-4 text-redborder-r-4 transition-colors duration-300 hover:text-fire-engine-red">Dr. S Mohan </span>
          ,<br />B.E., M.E., Ph.D., FNAE., FIE., FIPHE., FIWWA., FIASE.,<br />Vice-Chancellor, Puducherry Technological University
        </motion.p>
      </div>

      <TitleText2
        title1={<>Guest of </>}
        title2={<>Honor</>}
      />
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center md:justify-between relative">

        <motion.p
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal text-[14px] sm:text-[20px] lg:text-[32px] text-center text-secondary-white md:text-left md:w-[50%] z-0"
        ><span className="font-extrabold font-title space-between-4 text-redborder-r-4 transition-colors duration-300 hover:text-fire-engine-red">GV Prakash Kumar </span>
          , renowned musician, composer, and actor, graces us with his presence as the esteemed guest for our upcoming cultural extravaganza. His multifaceted talent and remarkable contributions to the world of music and cinema make him a cherished figure in the entertainment industry. Join us in celebrating the presence of this musical maestro at our cultural extravaganza!
        </motion.p>
        <div className="md:w-1/2 md:order-1 flex items-left justify-start max-h-[800px] max-w-[600px] md:pr-12">
          <motion.img
            src="/gvp2.webp"
            alt="Example Image"
            className="md:w-full h-auto md:object-cover"
            variants={fadeIn('up', 'tween', 0.5, 0.5)}
          />
        </div>

      </div>
    </motion.div>
  </section>
);

export default WhenandWhere;
