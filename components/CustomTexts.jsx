'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2, fadeIn } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);
export const TypingBoldText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-[#331E10] ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-[#333] ${textStyles}`}
  >
    {title}
  </motion.h2>
);
export const TitleText2 = ({ title1, title2, textStyles }) => (
  <div className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-fire-engine-red ${textStyles}`}>
    <motion.h2>
      <motion.div variants={fadeIn('left', 'tween', 0, 0.5)} style={{ display: 'inline-block' }} className="pr-4 font-title2">
        {title1}
      </motion.div>
      <motion.div variants={fadeIn('right', 'tween', 0.5, 0.7)} style={{ display: 'inline-block' }} className="font-title">
        {title2}
      </motion.div>
    </motion.h2>
  </div>
);
export const TitleText3 = ({ title1, title2, textStyles }) => (
  <div className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-[#333] ${textStyles}`}>
    <motion.h2>
      <motion.div variants={fadeIn('right', 'tween', 0, 0.5)} style={{ display: 'inline-block' }} className="pr-4 font-title">
        {title1}
      </motion.div>
      <motion.div variants={fadeIn('left', 'tween', 0.5, 0.7)} style={{ display: 'inline-block' }} className="font-title2">
        {title2}
      </motion.div>
    </motion.h2>
  </div>
);
