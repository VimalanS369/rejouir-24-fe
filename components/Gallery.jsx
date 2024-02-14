import React from 'react';

// Define image URLs as constants
const IMAGE_1_URL = 'https://img.freepik.com/free-vector/pattern-template-with-happy-chinese-new-year-concept-design-watercolor-illustration_83728-6007.jpg?w=826&t=st=1707902295~exp=1707902895~hmac=cf383efdc5e90a8896cc7faa021e00ac7936e8967b79e53fceb4064ffcc74130';
const IMAGE_2_URL = 'https://img.freepik.com/premium-photo/japanese-women-with-kimono-walking-tokyo_186382-11229.jpg?w=1380';
const IMAGE_3_URL = 'https://img.freepik.com/free-vector/hand-drawn-oriental-cloud-pattern_23-2151136970.jpg?w=826&t=st=1707906902~exp=1707907502~hmac=0a57a9a8f28d7c58852b6deee4742b454ae2977a03979e6affefb21735c7e44e';
const IMAGE_4_URL = 'https://img.freepik.com/premium-photo/cute-seamless-hand-drawn-watercolor-japanese-famous-things-pattern-background-japan-icon-elements_463092-1176.jpg?w=826';
const IMAGE_5_URL = 'https://img.freepik.com/premium-photo/people-decorated-thean-hou-temple-during-chinese-lantern-festival_1048944-7285016.jpg?w=1380';
const IMAGE_6_URL = 'https://img.freepik.com/free-vector/hand-drawn-japanese-wave-pattern-illustration_23-2149477865.jpg?w=826&t=st=1707906967~exp=1707907567~hmac=820ef14abff765fc0491a1a4d61c35119551deff537433a01ddd18729d853849';

const Gallery = () => (
  <div>
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 ">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery1"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-[105%] transition-transform shadow-md hover:shadow-xl "
              src={IMAGE_1_URL}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery2"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-[105%] transition-transform shadow-md hover:shadow-xl "
              src={IMAGE_2_URL}
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery3"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-[105%] transition-transform shadow-md hover:shadow-xl "
              src={IMAGE_3_URL}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery4"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-[105%] transition-transform shadow-md hover:shadow-xl "
              src={IMAGE_4_URL}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery5"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-[105%] transition-transform shadow-md hover:shadow-xl "
              src={IMAGE_5_URL}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery6"
              className="block h-full w-full rounded-lg object-cover object-center hover:scale-[105%] transition-transform shadow-md hover:shadow-xl "
              src={IMAGE_6_URL}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
