import React from 'react';
import chess_banner from '../assets/chess_banner.png';
import Navbar from './Navbar';
const Chess: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="flex flex-col mt-16">
      {/* Full-width header image */}
      <div style={{maxHeight: '60vh'}}className="w-full overflow-hidden">
        <img src={ chess_banner } alt="Chess Banner" className="w-full h-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 mx-4">
        <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
          <h2 className="font-semibold text-lg">BEGINNER</h2>
          <ul className="list-disc ml-4 mt-2">
            <li>basics of piece movement and checkmate</li>
            <li>puzzles and online games</li>
            <li>rating goal: 1000+</li>
          </ul>
        </div>
        <div className="bg-yellow-400 p-4 rounded-lg shadow-md">
          <h2 className="font-semibold text-lg">INTERMEDIATE</h2>
          <ul className="list-disc ml-4 mt-2">
            <li>opening theory</li>
            <li>end game strategy</li>
            <li>middle game tactics</li>
            <li>rating goal: 1500+</li>
          </ul>
        </div>
        <div className="bg-yellow-600 p-4 rounded-lg shadow-md text-white">
          <h2 className="font-semibold text-lg">ADVANCED</h2>
          <ul className="list-disc ml-4 mt-2">
            <li>tournament games analysis</li>
            <li>grandmaster history and games</li>
            <li>advanced pattern recognition practices</li>
            <li>rating goal: 2000+</li>
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
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Schedule Your First Lesson
        </button>
      </div>
    </div>
    </>
  );
};

export default Chess;
