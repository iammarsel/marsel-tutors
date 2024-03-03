import React from 'react';
import internshipBanner from '../assets/internship_banner.png'; // Ensure you have a banner image for Game Development
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const GameDev: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-14 dark:bg-black text-black dark:text-white">
        {/* Full-width header image */}
        <div style={{ maxHeight: '60vh' }} className="w-full overflow-hidden">
          <img src={internshipBanner} alt="Game Development Banner" className="w-full h-auto" />
        </div>

        <div className="text-center my-8">
          <h1 className="text-3xl font-bold">SECURE YOUR FIRST INTERNSHIP IN SOFTWARE DEVELOPMENT</h1>
        </div>

        {/* Pricing and Call to Action */}
        <div className="text-center font-bold mb-4">
          <h2 className="text-2xl">PRICING</h2>
          <p className="mb-2">LIMITED TIME OFFER FOR COLLEGE STUDENTS</p>
          <p>First Session Free</p>
          <p>1 Session = $50</p>
          <p>10 Session Pack $400 (Save $100)</p>
        </div>
        <div className="text-center my-8">
        <Link to="https://calendly.com/marsel-tutors/meeting" target="_blank" rel="noopener noreferrer" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Enroll in Internship Mentorship
        </Link>
        </div>
      </div>
    </>
  );
};

export default GameDev;
