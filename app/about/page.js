

'use client';

import { motion } from 'framer-motion';
import Markdown from 'markdown-to-jsx';
import { Footer, TypingBoldText } from '../../components';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';
const developers = [
  {
    name: 'Vimalaadithan B S',
    image: 'vimal.jpg',
    year: 'IV Year',
    link1: 'https://github.com/vimal-11',
    link2: 'https://www.linkedin.com/in/vimal11/',
    link3: 'https://www.instagram.com/_vimal._11/',
  },
  {
    name: 'Laxman S',
    image: 'laxman.jpg',
    year: 'IV Year',
    link1: 'https://github.com/laxx1612/',
    link2: 'https://www.linkedin.com/in/laxman-s-326555230/',
    link3: 'https://www.instagram.com/_._laxx/',
  },
  {
    name: 'Vimalan S',
    image: 'vimalan.jpg',
    year: 'IV Year',
    link1: 'https://github.com/VimalanS369',
    link2: 'https://www.linkedin.com/in/vimalan-s-6125861b1/',
    link3: 'https://www.instagram.com/vimalan_pdy/',
  },
];

const Page = () => (
  <div className="bg-primary-black overflow-hidden">

    <div className={`${styles.xPaddings} py-8 relative`}>

      <div className="gradient-02 z-0 " />

      <section className={`${styles.paddings} relative z-0`}>

        <div className="gradient-04 z-0" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <TypingBoldText title="About Website" textStyles="text-center" />

          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
          >
            In the development of the <span className="font-extrabold text-fire-engine-red">REJOUIR 24</span> Event Registration Website at Puducherry Technological University, our tech stack was at the heart of our success. We harnessed the power of Next.js 13 as our UI framework, ensuring efficient server-side rendering and a user-friendly routing system. Tailwind CSS emerged as our go-to CSS library, offering a vast array of utility classes for responsive and consistent styling. Daisy UI, a Tailwind CSS component plugin, expedited the creation of UI elements with its customizable components. On the backend, Django, the high-level Python web framework, handled user data, event information, and authentication seamlessly, supported by Django Rest Framework for smooth frontend-backend communication. To bring life and vibrancy to our web elements, we employed Framer Motion, a robust animation library. This blend of Next.js 13, Tailwind CSS, Daisy UI, Django, and Framer Motion formed the bedrock of our project, delivering a responsive and visually appealing platform for event registration, setting the stage for exceptional digital user experiences.
          </motion.p>
        </motion.div>

        <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words text-white  bg-black w-full shadow-lg rounded-xl mt-[100px] mb-[200px]">

          <div className="px-6">
            <div className="flex flex-wrap justify-center">

              <div className="mt-6 py-6 border-t border-slate-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4">
                    <p className="font-bold leading-relaxed text-white mb-4">TECH STACK</p>
                    {/* <a href="#" class="font-normal text-slate-700 hover:text-slate-400">Follow Account</a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center py-4">
              <table className="table-auto shadow-md rounded-lg min-w-full sm:w-5/6 md:w-3/4 lg:w-3/4">
                <thead className>
                  <tr>
                    <th className="border w-1/2 px-4 py-2">Type</th>
                    <th className="border w-1/2 px-4 py-2">Technology</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td className="border px-4 py-2">Frontend Library</td>
                    <td className="border px-4 py-2">Next.js 13
                      <Markdown>![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)</Markdown>
                    </td>
                  </tr>
                  <tr>

                    <td className="border px-4 py-2">CSS Framework </td>
                    <td className="border px-4 py-2">Tailwind CSS <Markdown>![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)</Markdown></td>
                  </tr>
                  <tr>

                    <td className="border px-4 py-2">Backend Framework</td>
                    <td className="border px-4 py-2">Django
                      <Markdown>![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)</Markdown>
                    </td>
                  </tr>
                  <tr>

                    <td className="border px-4 py-2">Animation Library</td>
                    <td className="border px-4 py-2">Framer Motion
                      <Markdown>![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)</Markdown>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Component Library</td>
                    <td className="border px-4 py-2">Daisy UI
                      <Markdown>![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
                      </Markdown>
                    </td>

                  </tr>

                </tbody>

              </table>
            </div>
          </div>

        </div>
        <h2 className="text-4xl font-semibold text-center text-secondary-white my-8 mb-16 sm:text-4xl">Developers</h2>
        <div className="gradient-02 z-0 " />
        {developers.map(developer => (

          <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words text-white bg-red-900 w-full shadow-lg rounded-xl mt-[100px] mb-[20px]">
            <div className="px-6 py-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-center">
                  <div className="relative">
                    <img src={developer.image} className="aspect-square shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                      style={{ width: '150px', height: '150px' }}
                      alt={developer.name} />
                  </div>
                </div>
                <div className="w-full text-center mt-20">
                  <div className="text-center mt-2">
                    <h3 className="text-2xl text-primary-black font-bold leading-normal mb-1">{developer.name}</h3>
                    <div className="text-xs mt-0 mb-2 text-primary-black font-bold uppercase">
                      <i className=" mr-2 text-white opacity-75"></i>{developer.year}
                    </div>
                    
                  </div>
                  <div className="flex flex-col items-center justify-center lg:flex-row lg:pt-4 pt-4 md:pt-8 pb-0 font-sm">
                    <div className="p-3 text-center flex justify-center items-center mb-2">
                      <img
                        src="/github.svg"
                        className="w-[20px] md:w-[28px] h-[20px] md:h-[28px] object-contain cursor-pointer"
                      />
                      <a
                        href={developer.link1}
                        className="text-base md:text-xl font-bold block uppercase tracking-wide text-white font-sm mt-2"
                      >
                        Github
                      </a>
                    </div>
                    <div className="p-3 text-center flex justify-center items-center mb-2">
                      <img
                        src="/linkedin.svg"
                        className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] object-contain cursor-pointer"
                      />
                      <a
                        href={developer.link2}
                        className="text-base md:text-xl font-bold block uppercase tracking-wide text-white font-sm mt-2"
                      >
                        Linkedin
                      </a>
                    </div>
                    <div className="p-3 text-center flex justify-center items-center">
                      <img
                        src="/instagram.svg"
                        className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] object-contain cursor-pointer"
                      />
                      <a
                        href={developer.link3}
                        className="text-base md:text-xl font-bold block uppercase tracking-wide text-white font-sm mt-2"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  </div>
);

export default Page;



