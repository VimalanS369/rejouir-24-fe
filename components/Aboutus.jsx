'use client'
import { motion } from 'framer-motion';
import styles from '../styles';
// Using an array of objects to represent contributors info

const contributors = [
  { 
    name: 'Charan S',
    desc: 'Description 1...',
    image: '/people-01.png',
    link1: 'www.google.com',
    link2: 'www.github.com',
    link3: 'www.linkedin.com',
    courseandyear: 'CSE, III Year',
    description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },

  // add more contributors here...
];


export default function Aboutus() {
  return (
<div className={`${styles.xPaddings} py-8 relative`}>
      

<h2 className="text-6xl font-semibold text-center text-white my-8 mb-16 z-10">OFFICE BEARERS</h2>
  <div className="gradient-02 z-0 "/>
      {contributors.slice(0,3).map(contributor => (
        
        <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words text-white  bg-slate-700 w-full shadow-lg rounded-xl mt-[100px] mb-[200px]">
     
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img src={contributor.image} className="aspect-square shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
              </div>
            </div>
            
            <div className="w-full text-center mt-20">
            <div class="text-center mt-2">
              <h3 class="text-2xl text-white font-bold leading-normal mb-1">{contributor.name}</h3>
              <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-white opacity-75"></i>{contributor.courseandyear}
              </div>
          </div>
              <div class="flex justify-center lg:pt-4 pt-8 pb-0">
              <div class="p-3 text-center flex justify-content-center align-items-center">
    <img src="/github.svg" className="w-[28px] h-[28px] object-contain cursor-pointer"/>
    <a href="{contributor.link1 }" class="text-xl font-bold block uppercase tracking-wide text-white"> Github</a>
  </div>
  <div class="p-3 text-center flex justify-content-center align-items-center">
    <img src="/linkedin.svg" className="w-[24px] h-[24px] object-contain cursor-pointer"/>
    <a href="{contributor.link2 }"  class="text-xl font-bold block uppercase tracking-wide text-white"> Linkedin</a>
  </div>
  <div class="p-3 text-center flex justify-content-center align-items-center">
    <img src="/instagram.svg" className="w-[24px] h-[24px] object-contain cursor-pointer"/>
    <a href="{contributor.link3 }" class="text-xl font-bold block uppercase tracking-wide text-white"> Instagram</a>
  </div>
              </div>
            </div>
          </div>
          
          <div class="mt-6 py-6 border-t border-slate-200 text-center">
              <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4">
                      <p class="font-light leading-relaxed text-white opacity-80 mb-4">{contributor.description}</p>
                      {/* <a href="#" class="font-normal text-slate-700 hover:text-slate-400">Follow Account</a> */}
                  </div>
              </div>
          </div>
        </div>
      </div>
      ))}
      <h2 className="text-3xl font-semibold text-center my-8">The Website Gang</h2>
      {contributors.slice(3,6).map(contributor => (
        <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 mb-8">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img src={contributor.image} className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
              </div>
            </div>
            <div className="w-full text-center mt-20">
              <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                  <div class="p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{contributor.photos}</span>
                      <span class="text-sm text-slate-400">Photos</span>
                  </div>
                  <div class="p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{contributor.followers}</span>
                      <span class="text-sm text-slate-400">Followers</span>
                  </div>

                  <div class="p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{contributor.following}</span>
                      <span class="text-sm text-slate-400">Following</span>
                  </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-2">
              <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">{contributor.name}</h3>
              <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{contributor.location}
              </div>
          </div>
          <div class="mt-6 py-6 border-t border-slate-200 text-center">
              <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4">
                      <p class="font-light leading-relaxed text-slate-600 mb-4">{contributor.description}</p>
                      <a href="#" class="font-normal text-slate-700 hover:text-slate-400">Follow Account</a>
                  </div>
              </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}