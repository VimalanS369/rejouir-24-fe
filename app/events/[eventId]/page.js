'use client';
// events/[eventId].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';


const eventId = () => {
  
  const eId  = eventId;
  const [event, setEvent] = useState(null);
  

  useEffect(() => {
    if (eId) {
      // Fetch event details using the eventId
      axios.get(`http://127.0.0.1:8000/event-detail/${eId}/`)
        .then((response) => {
          setEvent(response.data);
        })
        .catch((error) => {
          console.error('Error fetching event details:', error);
        });
    }
  });

  return (
    <div>
      <h1>Event Detail Page for Event ID: {eId}</h1>
      {event ? (
        <div>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          {/* Add more event details as needed */}
        </div>
      ) : (
        <p>Loading event details...</p>
      )}
    </div>
  );
};

export default eventId;



