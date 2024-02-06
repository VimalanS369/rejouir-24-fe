'use client';
import { Footer, Navbar } from '../../components';

import { motion } from 'framer-motion';
import { TypingBoldText } from '../../components';

import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">

    <Navbar />


    
<div className={`${styles.xPaddings} py-8 relative`}>
      

      <div className="gradient-02 z-0 "/>
            
            
          <section className={`${styles.paddings} relative z-10`}>

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
        In the development of the <span className="font-extrabold text-white">ICON 2k23</span> Event Registration Website for the CSE Department at Puducherry Technological University, our tech stack was at the heart of our success. We harnessed the power of Next.js 13 as our UI framework, ensuring efficient server-side rendering and a user-friendly routing system. Tailwind CSS emerged as our go-to CSS library, offering a vast array of utility classes for responsive and consistent styling. Daisy UI, a Tailwind CSS component plugin, expedited the creation of UI elements with its customizable components. On the backend, Django, the high-level Python web framework, handled user data, event information, and authentication seamlessly, supported by Django Rest Framework for smooth frontend-backend communication. To bring life and vibrancy to our web elements, we employed Framer Motion, a robust animation library. This blend of Next.js 13, Tailwind CSS, Daisy UI, Django, and Framer Motion formed the bedrock of our project, delivering a responsive and visually appealing platform for event registration, setting the stage for exceptional digital user experiences.</motion.p>
    </motion.div>
      
    <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words text-white  bg-slate-700 w-full shadow-lg rounded-xl mt-[100px] mb-[200px]">
           
           <div className="px-6">
             <div className="flex flex-wrap justify-center">
               
             
             <div class="mt-6 py-6 border-t border-slate-200 text-center">
                 <div class="flex flex-wrap justify-center">
                     <div class="w-full px-4">
                         <p class="font-light leading-relaxed text-white opacity-80 mb-4">.</p>
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

   <td className="border px-4 py-2">UI Framework</td>
     <td className="border px-4 py-2">Next.js 13</td>
   </tr>
   <tr>

   <td className="border px-4 py-2">CSS Framework </td>
     <td className="border px-4 py-2">Tailwind CSS</td>
   </tr>
   <tr>

   <td className="border px-4 py-2">Backend Framework</td>
     <td className="border px-4 py-2">Django</td>
   </tr>
   <tr>

   <td className="border px-4 py-2">Animation Library</td>
     <td className="border px-4 py-2">Framer Motion</td>
   </tr>
   <tr>
   <td className="border px-4 py-2">Component Library</td>
     <td className="border px-4 py-2">Daisy UI</td>
     
   </tr>
   
 </tbody>
</table>
</div>
         </div>
         
         
       </div>
  </section>

    <Footer />
    
  </div>
  </div>
);

export default Page
