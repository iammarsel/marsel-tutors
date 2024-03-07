import React from 'react';
import internshipBanner from '../assets/internship_banner.png'; // Ensure you have a banner image for Game Development
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const GameDev: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-full w-full mt-14 dark:bg-black text-black dark:text-white">

        <div style={{ maxHeight: '60vh' }} className="w-full overflow-hidden">
          <img src={internshipBanner} alt="Game Development Banner" className="w-full h-auto" />
        </div>

        <div className="text-center my-8">
          <h1 className="text-3xl font-bold text-peach">SECURE YOUR FIRST INTERNSHIP IN SOFTWARE DEVELOPMENT</h1>
        </div>

        <div className="max-w-lg mx-auto p-6 shadow-lg rounded-lg text-center">
    <h2 className="text-2xl font-bold mb-4">Build yourself up step-by-step professionally as a Computer Science student:</h2>
    <ul className="list-none text-left inline-block m-0 mb-4">
        <li className="py-2 border-b border-gray-200">✅Create an outstanding resume with a proven template</li>
        <li className="py-2 border-b border-gray-200">✅Learn the coding skills to succeed in Technical Interviews with Data Structures</li>
        <li className="py-2 border-b border-gray-200">✅Master behavioral skills to answer any situational question using the S.T.A.R. method</li>
        <li className="py-2">✅Master the art of networking</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">PRICING</h2>
    <p className="mb-1">LIMITED TIME OFFER FOR COLLEGE STUDENTS</p>
    <p className="font-semibold mb-1">First Session Free</p>
</div>

        <div className="text-center my-8">
        <Link to="https://calendly.com/marsel-tutors/meeting" target="_blank" rel="noopener noreferrer" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Enroll in Internship Mentorship
        </Link>
        </div>
        <p className='text-center text-lg py-4'>© 2024 MarselTutors. All Rights Reserved. </p>
      </div>
      
    </>
  );
};

export default GameDev;
