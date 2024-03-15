'use client';

import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../utils/motion';

import { TitleText } from '../components';

const Partners = () => (
  <section className="p-4 sm:p-8 md:p-12 relative z-10">
    <div className="max-w-4xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:items-center sm:space-x-4"
      >
        <motion.div variants={fadeIn('down', 'tween', 0.5, 1)}>
          <TitleText
            title={(
              <>
                Our Sponsors <br className="md:block hidden" /> <br className="md:block hidden" />{' '}
              </>
            )}
            textStyles="text-center"
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-center py-6">
        <h4 className="text-red-900 text-2xl font-bold tracking-wide mb-4 text-center">
          ASSOCIATE PARTNERS
        </h4>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
        >
          <div className="flex flex-col items-center space-y-3">
            <a href="" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="assoc_partner.webp"
                alt="dharma_vilas"
                className="w-80 sm:w-90 md:w-80 h-auto object-contain py-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center text-red-800">ENVIE SALONE</p>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center py-2">
        <h4 className="text-red-900 text-2xl font-bold tracking-wide mb-4 text-center">
          EVENT PARTNERS
        </h4>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
        >
          <div className="flex flex-col items-center space-y-2">
            <a href="https://www.instagram.com/dharma.vilas?igsh=aW50ZWI5NTludjJj" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="t-shirt_partner.webp"
                alt="dharma_vilas"
                className="w-80 sm:w-90 md:w-80 h-auto object-contain"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center text-red-800">DHARMA VILAS</p>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center py-2">
        <h4 className="text-red-900 text-2xl font-bold tracking-wide mb-4 text-center">
          FOOD PARTNERS
        </h4>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
        >
          <div className="flex flex-col items-center space-y-2">
            <a href="" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="food_partner.webp"
                alt="interjet"
                className="w-40 sm:w-64 md:w-40 h-auto object-contain"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center text-red-800">TEMPTATIONS</p>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center py-2">
        <h4 className="text-red-900 text-2xl font-bold tracking-wide mb-4 text-center">
          MEDIA PARTNERS
        </h4>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
        >
          <div className="flex flex-col items-center space-y-2">
            <a href="https://www.youtube.com/@rainbowtvpondicherry4804" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="rainbow.webp"
                alt="rainbow"
                className="w-40 sm:w-64 md:w-40 h-auto object-contain"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center text-red-800">RAINBOW TV</p>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center mt-8 py-3">
        <h4 className="text-red-900 text-2xl font-bold tracking-wide mb-4 text-center">
          SOCIAL MEDIA PARTNERS
        </h4>
      </div>
      <div className="flex flex-col items-center sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
        >
          <div className="flex flex-col items-center space-y-2 px-8">
            <a href="https://www.instagram.com/namma_pondy?igsh=NTc4MTIwNjQ2YQ==" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="namma_pondy.webp"
                alt="namma pondy"
                className="w-20 sm:w-64 md:w-40 h-auto object-contain"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center text-red-800">NAMMA PONDY</p>
          </div>
          <div className="flex flex-col items-center space-y-2 px-8">
            <a href="https://www.instagram.com/pondy.digital?igsh=NTc4MTIwNjQ2YQ==" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="pondy_digital.webp"
                alt="pondy_digital"
                className="w-20 sm:w-64 md:w-40 h-auto object-contain"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center text-red-800">PONDY DIGITAL</p>
          </div>
          <div className="flex flex-col items-center space-y-2 px-8">
            <a href="https://www.instagram.com/foodgawker_py?igsh=NTc4MTIwNjQ2YQ==" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="foodgawker_py.webp"
                alt="foodgawker_py"
                className="w-20 sm:w-64 md:w-40 h-auto object-contain"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center text-red-800">FOOD GAWKER</p>
          </div>
          <div className="flex flex-col items-center space-y-2 px-8">
            <a href="https://www.instagram.com/pondy.treasures?igsh=NTc4MTIwNjQ2YQ==" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="pondy.treasures.webp"
                alt="pondy.treasures"
                className="w-20 sm:w-54 md:w-30 h-auto object-contain "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center text-red-800">PONDY TREASURES</p>
          </div>
          <div className="flex flex-col items-center space-y-2 px-8">
            <a href="https://www.instagram.com/trending_pondicherry?igsh=NTc4MTIwNjQ2YQ==" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="trending_pondicherry.webp"
                alt="trending_pondicherry"
                className="w-20 sm:w-54 md:w-30 h-auto object-contain "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center text-red-800">TRENDING PONDICHERRY</p>
          </div>
          <div className="flex flex-col items-center space-y-2 px-8">
            <a href="https://www.instagram.com/pondy.updates?igsh=NTc4MTIwNjQ2YQ==" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="pondy.updates.webp"
                alt="pondy.updates"
                className="w-20 sm:w-54 md:w-30 h-auto object-contain "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center text-red-800">PONDY UPDATES</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Partners;