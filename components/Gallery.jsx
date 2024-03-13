import React from 'react';
import { motion } from 'framer-motion';
import { TitleText } from '../components';

const Gallery = () => (
  <div>
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 ">
    <TitleText
        title={<>Gallery of REJOUIR '23</>}
        textStyles="text-center"
      />
      <div className="-m-1 flex flex-wrap md:-m-2 pt-6">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery1"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-[105%] transition-transform shadow-md hover:shadow-xl "
              src='/gallery2.webp'
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery2"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-[105%] transition-transform shadow-md hover:shadow-xl "
              src='/gallery7.webp'
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery3"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-[105%] transition-transform shadow-md hover:shadow-xl "
              src='/gallery9.webp'
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery4"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-[105%] transition-transform shadow-md hover:shadow-xl "
              src='/gallery1.webp'
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery5"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-[105%] transition-transform shadow-md hover:shadow-xl "
              src='/gallery8.webp'
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery6"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-[105%] transition-transform shadow-md hover:shadow-xl "
              src='/gallery6.webp'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
