import React from 'react';
import chess_banner from '../assets/img9.jpg';
import Navbar2 from './Navbar2';
import { Link } from 'react-router-dom';
const Chess: React.FC = () => {
  return (
    <>
    <Navbar2 />
    
    <div className="flex flex-col mt-14 dark:bg-dark_primary text-dark_secondary dark:text-white">
      

    
        {/* =========================================
            MOBILE HERO (below md)
        ========================================= */}
        <div className="block md:hidden">
          <div className="relative w-full">
            {/* Mobile hero image with gradient overlay */}
            <div className="relative">
              <img
                src={chess_banner}
                alt="Software Development Banner"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100" />
            </div>
            {/* Title overlay in the center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-gray-100 text-4xl sm:text-6xl font-bold drop-shadow-md text-center px-4">
                CHESS
              </h1>
              <h3 className="text-gray-300 mt-4 text-sm">
                Game Analysis, Strategy, and Tactics
              </h3>
            </div>
          </div>
        </div>

        {/* =========================================
            DESKTOP HERO (md and up)
        ========================================= */}
        <div className="hidden md:flex w-full">
          {/* Left side: text content */}
          <div className="md:w-1/2 flex flex-col justify-center p-8">
            <h1 className="text-5xl font-extrabold text-brand_secondary dark:text-brand_secondary mb-4">
              CHESS
            </h1>
            <h3 className="text-lg text-gray-600 dark:text-gray-200">
              Game analysis, strategy, and tactics
            </h3>
          </div>
          
          {/* Right side: image */}
          <div className="md:w-1/2">
            <img
              src={chess_banner}
              alt="Chess Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 mx-4">
        <div className="bg-yellow-200 p-4 rounded-lg shadow-md text-dark_secondary">
          <h2 className="font-semibold text-lg">Beginner</h2>
          <ul className="list-disc ml-4 mt-2">
            <li>basics of piece movement and checkmate</li>
            <li>puzzles and online games</li>
            <li>rating goal: 1000+</li>
          </ul>
        </div>
        <div className="bg-yellow-400 p-4 rounded-lg shadow-md text-dark_secondary">
          <h2 className="font-semibold text-lg">Intermediate</h2>
          <ul className="list-disc ml-4 mt-2">
            <li>opening theory</li>
            <li>end game strategy</li>
            <li>middle game tactics</li>
            <li>rating goal: 1500+</li>
          </ul>
        </div>
        <div className="bg-yellow-600 p-4 rounded-lg shadow-md text-dark_secondary">
          <h2 className="font-semibold text-lg">Advanced</h2>
          <ul className="list-disc ml-4 mt-2">
            <li>tournament games analysis</li>
            <li>grandmaster history and games</li>
            <li>advanced pattern recognition practices</li>
            <li>rating goal: 2100+</li>
          </ul>
        </div>
      </div>
      <div className="text-center font-bold mb-4">
        <h2 className="text-2xl">PRICING</h2>
        <p className="mb-2">LIMITED TIME ONLY: GET YOUR FIRST LESSON FOR FREE IN ANY TOPIC YOU WANT TO LEARN</p>
        <p>1 Lesson = $50</p>
        <p>10 Lesson Pack $400 (Save $100)</p>
      </div>
      <div className="text-center my-8">
      <Link to="https://calendly.com/marsel-tutors/meeting" target="_blank" rel="noopener noreferrer" className="bg-brand_secondary hover:bg-blue-500 rounded-2xl text-white font-bold py-2 px-4 rounded" >
          Schedule Your First Lesson
      </Link>
      </div>
      <p className='text-center text-lg py-4'>© 2025 MarselTutors. All Rights Reserved. </p>
    </div>
    </>
  );
};

export default Chess;
