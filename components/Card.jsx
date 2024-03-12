'use client';

import React from 'react';

const Card = ({ event }) => {
  console.log('baner', event.banner);
  return (
    <div className="card w-full sm:w-59 md:w-80 lg:w-90 xl:w-59 2xl:w-80 bg-red-800 shadow-xl mx-3 my-4 p-0">
      <figure>
        <img src={`https://api.rejouirptu.in/${event.banner}`} alt={event.title} />
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-center">{event.title}</h2>
        <p className="text-center">{event.description}</p>
        <div className="card-actions justify-center">
          <button type="button" className="btn bg-black-800">
            <a href={`/events/${event.id}`}>Register</a>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Card;

