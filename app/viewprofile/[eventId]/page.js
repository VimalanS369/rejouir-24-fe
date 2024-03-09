'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import { useNavigate } from 'next/router';
import { useRouter } from 'next/navigation';

const EventDetail = () => {
  const [event, setEvent] = useState(null);
  const [eventId, setEventId] = useState(null);
  const uid = localStorage.getItem("user_id");

  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const eventIdFromPath = pathParts[pathParts.length - 1];
    setEventId(eventIdFromPath);

    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/reg-detail/${eventIdFromPath}/`);
        const eventData = response.data;
        console.log(response.data);
        setEvent(eventData);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, []);
  const router = useRouter();
  const handleAddTeamMember = (eventName, eventId) => {
    // Construct the URL for the /teams page with query parameters
    const url = `/teams?eventName=${encodeURIComponent(eventName)}&eventId=${encodeURIComponent(eventId)}`;

    // Use router.push to navigate to the new page with query parameters
    router.push(url);
  };

  return (
    <motion.div
      className="bg-primary-black text-white p-4 h-screen flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {event ? (
        <motion.div
          className="bg-black bg-opacity-30 p-8 rounded-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl text-black font-bold mb-4">Event Details</h1>
          {/* <p className="text-lg font-semibold">Registration ID: {event.id}</p>
          <p className="text-lg font-semibold">UID: {uid}</p> */}
          {event.team ? (
            <>
              <p className="text-lg font-semibold text-black">Team Lead:<span className='text-xl font-semibold text-red-900'> {event.team.team_lead.name}</span></p>
              <p className="text-lg font-semibold text-black">Team Members:</p>
              <ul>
                {event.team.team_member.map((member) => (
                  <span className='text-xl font-semibold text-red-900'>
                  <li key={member.id}>{member.name}</li>
                  </span>
                ))}
              </ul>
            </>
          ) : null}


          <p className="text-lg font-semibold text-black">Event Name: <span className='text-xl font-semibold text-red-900'>{event.registration.event.title}</span></p>
          <p className="text-lg font-semibold text-black">Paid: <span className='text-xl font-semibold text-red-900'>{event.registration.is_paid ? "Yes" : "No"}</span></p>
          <p className="text-lg font-semibold text-black">Registered At: <span className='text-xl font-semibold text-red-900'>{event.registration.registered_at}</span></p>
          <p className="text-lg font-semibold text-black">Event Venue: <span className='text-xl font-semibold text-red-900'>{event.registration.event.venue}</span></p>
          <p className="text-lg font-semibold text-black">Date of Event: <span className='text-xl font-semibold text-red-900'>{event.registration.event.date}</span></p>
          <p className="text-lg font-semibold text-black">Team Event: <span className='text-xl font-semibold text-red-900'>{event.registration.event.is_team ? "Yes" : "No"}</span></p>
          {event.registration.event.is_team && (
            <motion.button
              onClick={() => handleAddTeamMember(event.registration.event.title, event.registration.event.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-700 hover:bg-red-800 text-black font-semibold py-2 px-4 rounded-lg transition-transform duration-300 mt-4"
            >
              Add Team Member
            </motion.button>
          )}
        </motion.div>
      ) : (
        <p>Loading event details...</p>
      )}
    </motion.div>
  );
};

export default EventDetail;
