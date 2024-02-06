/* eslint-disable react/button-has-type */
'use client';

import React from 'react';

const Card = ({ event }) => (
  <div className="card w-full sm:w-59 md:w-80 lg:w-90 xl:w-59 2xl:w-80 bg-base-100 shadow-xl mx-3 my-4 p-0">
    <figure>
      <img src={event.imageUrl} alt={event.title} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{event.title}{event.id}</h2>
      <p>{event.description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick="test">
          <a href={event.buttonUrl}>Register Now</a>
        </button>
      </div>
    </div>
  </div>
);
export default Card;
