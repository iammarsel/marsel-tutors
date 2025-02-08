import React from 'react';
import internshipBanner from '../assets/img11.png'; // Ensure you have a banner image for Game Development
import Navbar from './Navbar2';
import { Link } from 'react-router-dom';

const GameDev: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-full w-full mt-14 dark:bg-dark_primary text-dark_secondary dark:text-white">
        <div className="block md:hidden">
          <div className="relative w-full">
            {/* Mobile hero image with gradient overlay */}
            <div className="relative">
              <img
                src={internshipBanner}
                alt="Internship Banner"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100" />
            </div>
            {/* Title overlay in the center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-gray-100 text-2xl sm:text-6xl font-bold drop-shadow-md text-center px-4">
              Secure Your First Internship
              </h1>
            </div>
          </div>
        </div>

        {/* =========================================
            DESKTOP HERO (md and up)
        ========================================= */}
        <div className="hidden md:flex w-full">
          {/* Left side: text content */}
          <div className="md:w-1/2 flex flex-col justify-center p-8">
            <h1 className="text-5xl font-extrabold text-brand_secondary dark:text-white mb-4">
              SECURE YOUR FIRST INTERNSHIP
            </h1>
            <h3 className="text-lg text-gray-600 dark:text-gray-200">
              Resume Building, Technical Interview Prep, and Behavioral Skills
            </h3>
          </div>
          <div className="md:w-1/2">
            <img
              src={internshipBanner}
              alt="Internship Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>  

        <div className="max-w-lg mx-auto p-6 shadow-lg rounded-lg text-center shadow-slate-300">
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
        <p className='text-center text-lg py-4'>© 2025 MarselTutors. All Rights Reserved. </p>
      </div>
      
    </>
  );
};

export default GameDev;
