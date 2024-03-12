'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

function TeamComponent() {
  const [teamLead, setTeamLead] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [studentSuggestions, setStudentSuggestions] = useState([]);
  const [storedTeamID, setStoredTeamID] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventId, setEventId] = useState('');
  const [regID, setRegID]=useState('');

  const [studentsData, setStudentsData] = useState([]);
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);
  const [teamRegDetail, setTeamRegDetail] = useState(null);


  useEffect(() => {
    const currentUrl = window.location.href;
    const urlSearchParams = new URLSearchParams(currentUrl.split('?')[1]);
    const newEventName = urlSearchParams.get('eventName');
    const newEventId = urlSearchParams.get('eventId');

    if (newEventName !== eventName || newEventId !== eventId) {
      setEventName(newEventName);
      setEventId(newEventId);
      console.log("Event ID",newEventId);

      const authToken = localStorage.getItem('authToken');
      const uid = localStorage.getItem('user_id');

      fetch(`https://api.rejouirptu.in/event-team-lead/${uid}/${newEventId}/`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${authToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("team data",data);
          const teamID = data.id;
          console.log("team id",teamID)
          localStorage.setItem('teamData', JSON.stringify(teamID));
          setStoredTeamID(teamID);
          fetchStudents(teamID);
        })
        .catch((error) => {
          console.error('Error fetching event names:', error);
        });

      const storedUserName = localStorage.getItem('user_name');
      setTeamLead(storedUserName);
    }
  }, [eventName, eventId]);

  useEffect(() => {
    if (storedTeamID) {
      fetchTeamRegDetail(storedTeamID);
    }
  }, [storedTeamID]);

  async function fetchTeamRegDetail(teamID) {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await fetch(`https://api.rejouirptu.in/team-reg-detail/${teamID}/`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setRegID(data.id);
        console.log("reg id",regID);
        setTeamRegDetail(data);
      } else {
        console.error('Failed to fetch team registration detail');
      }
    } catch (error) {
      console.error('Failed to fetch team registration detail:', error);
    }
  }

  async function fetchStudents(teamID) {
    try {
      const authToken = localStorage.getItem('authToken');
      const studentsResponse = await fetch(`https://api.rejouirptu.in/add-team-member/${teamID}/`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${authToken}`,
        },
      });

      const studentsData = await studentsResponse.json();
      setStudentsData(studentsData);
      const studentNames = studentsData.map((student) => student.name);
      setStudentSuggestions(studentNames);
    } catch (err) {
      console.error('Failed to fetch students:', err);
    }
  }

  async function save(event) {
    event.preventDefault();
    const authToken = localStorage.getItem('authToken');
    const uid = localStorage.getItem('user_id');

    try {
      const formattedTeamMembers = selectedTeamMembers.map((name) => ({ name }));
      const teamData = {
        team_member: formattedTeamMembers,
      };

      const response = await fetch(`https://api.rejouirptu.in/add-team-member/${storedTeamID}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${authToken}`,
        },
        body: JSON.stringify(teamData),
      });

      if (!response.ok) {
        // Check for specific status codes and handle accordingly
        if (response.status === 404) {
          alert('Student not found. Please check the entered names.');
        } else if (response.status === 500) {
          alert('Failed to create team. Internal server error.');
        } else {
          alert('Failed to create team. Unknown error.');
        }
        return;
      }

      alert('Team Created Successfully');
      window.location.href = `/viewprofile/${regID}`;
      setTeamLead('');
      setTeamMembers([]);
    } catch (err) {
      alert('Failed to create team');
    }
  }

  function handleTeamMembersChange(event) {
    const value = event.target.value;
  
    // Filter the suggestions to match the input value
    const filteredSuggestions = studentSuggestions.filter((name) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
  
    // Update the suggestions
    setStudentSuggestions(filteredSuggestions);
  
    // Update the input field
    setTeamMembers(value);
  
    // Check if the input matches a suggestion exactly
    const matchedSuggestion = studentSuggestions.find(
      (name) => name.toLowerCase() === value.toLowerCase()
    );
  
    if (matchedSuggestion && matchedSuggestion.toLowerCase() === value.toLowerCase()) {
      // Clear the input field
      setTeamMembers('');
  
      // Append the selected member to the array
      setSelectedTeamMembers((prevMembers) => [...prevMembers, matchedSuggestion]);
  
      // Filter the suggestions to exclude the selected member
      setStudentSuggestions((prevSuggestions) =>
        prevSuggestions.filter((name) => name !== matchedSuggestion)
      );
    } else if (value === '') {
      // If input value is empty, reset suggestions to the original list
      setStudentSuggestions(studentsData.map((student) => student.name));
    }
  }
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { scale: 0.5 },
    visible: { scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="bg-banner text-black py-2 px-4 text-center font-extrabold text-xl">
        <p>Add team members for {eventName}</p>
      </div>
      
      <motion.div
        className="bg-primary-black text-white p-4 h-screen flex justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-black bg-opacity-30 p-8 rounded-lg w-full max-w-xl"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl font-bold mb-4 text-center uppercase">Team Details</h1>
          <div className="container mt-4">
            <form>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Team Lead</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 text-black bg-white"
                  value={teamLead}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Team Members</label>

                <div className="flex flex-wrap mb-2">
                  {selectedTeamMembers.map((member, index) => (
                    <div key={index} className="bg-blue-500 text-white rounded-md p-2 m-1">
                      {member}
                    </div>
                  ))}
                </div>

                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 text-black bg-white"
                  value={teamMembers}
                  onChange={(event) => handleTeamMembersChange(event)}
                  list="studentSuggestions"
                  multiple
                />
                <datalist id="studentSuggestions">
                  {studentSuggestions.map((name, index) => (
                    <option key={index} value={name} />
                  ))}
                </datalist>
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Event </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 text-black bg-white"
                  value={eventName}
                  readOnly
                />
              </div>
              <div>
                <button
                  className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-300 mt-4"
                  onClick={save}
                >
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default TeamComponent;

