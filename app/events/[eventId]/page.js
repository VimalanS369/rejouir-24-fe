'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Navbar } from '../../../components';

const EventDetail = () => {
  const [event, setEvent] = useState(null);
  const [eventId, setEventId] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [uid, setUid] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const eventIdFromPath = pathParts[pathParts.length - 1];
    setEventId(eventIdFromPath);

    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`https://api.rejouirptu.in/event-detail/${eventIdFromPath}/`);
        console.log("event details  :", response.data);
        const eventData = response.data;
        setEvent(eventData);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
      const user_id = localStorage.getItem("user_id");
      console.log("user id", user_id);
      setUid(user_id);

      const authToken = localStorage.getItem("authToken");
      console.log("Token:", authToken);
      setAuthToken(authToken);
    };

    fetchEventDetails();
  }, []);

  useEffect(() => {
    if (registrationSuccess) {
      setShowSuccessPopup(true);
    }
  }, [registrationSuccess]);

  const handleRegistration = async () => {
    const registrationData = {
      event: event.title,
      is_paid: true,
      student: uid,
    };

    try {
      const authToken = localStorage.getItem('authToken');

      const response = await axios.post('https://api.rejouirptu.in/register/', registrationData, {
        headers: {
          Authorization: `Token ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response) {
        setRegistrationSuccess(true);
        alert("Registration Successful. Complete your payment in your Profile Page for successful registration.")
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert("You have already registered for this event.");
      }
      else {
        console.error('Error registering for the event:', error);
        
        alert("Have an ICON profile in order to register for an event. Create a profile and continue.");
      }
    }
  };

  return (
    <>
      <div className="bg-banner text-black py-2 px-4 text-center">
        <h1 className="text-2xl">Event Details Page</h1>
      </div>
      <motion.div
        className="bg-primary-black text-white p-4 flex justify-center items-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-secondary-white bg-opacity-30 text-white p-6 rounded-lg shadow-lg w-full max-w-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {event ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <motion.figure
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={`${event.poster}`} alt={event.title} className="w-full" />
              </motion.figure>
            </div>
            <div className="col-span-1">
              <h2 className="text-xl text-black py-2">Event Name: {event.title}</h2>
              <p className="text-lg text-black py-2">Category: {event.category}</p>
              <p className="text-lg text-black py-2">Date: {event.date}</p>
              <p className="text-lg text-black py-2">Registration fee: {event.reg_fee}</p>
              <p className="text-lg text-black py-2">Venue: {event.venue}</p>
            </div>
            <div className="col-span-2">
              <div className="text-lg text-black" style={{ wordWrap: 'break-word' }} dangerouslySetInnerHTML={{ __html: event.rules }}></div>
            </div>
            <div className="col-span-2">
              <button onClick={handleRegistration} className="py-2 px-4 bg-red-700 hover:bg-red-800 text-white rounded-md w-full">Register</button>
            </div>
          </div>
          
          ) : (
            <p>Loading event details...</p>
          )}

        </motion.div>
      </motion.div>
    </>
  );
};

export default EventDetail;
