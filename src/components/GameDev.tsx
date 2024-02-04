import React from 'react';
import gameDevBanner from '../assets/gamedev_banner.png'; // Ensure you have a banner image for Game Development
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const GameDev: React.FC = () => {
  const weeks = [
    { title: "Week 1: Introduction to Game Development", focus: "Game development basics, overview of Unity and Roblox Studio.", project: "Setting up your first game project." },
    { title: "Week 2: Basics of Unity", focus: "Unity interface, basic scripting, game objects.", project: "Creating a simple scene in Unity." },
    { title: "Week 3: Advanced Unity Features", focus: "Physics, animations, and advanced scripting in Unity.", project: "Developing a mini-game with advanced features." },
    { title: "Week 4: Introduction to Roblox Studio", focus: "Roblox Studio interface, Lua scripting basics.", project: "Designing a basic Roblox game." },
    { title: "Week 5: Advanced Roblox Development", focus: "Complex scripting, game mechanics in Roblox.", project: "Creating an interactive Roblox game." },
    { title: "Week 6: Game Design Principles", focus: "Gameplay mechanics, level design, and player engagement.", project: "Designing a game level with engaging mechanics." },
    { title: "Week 7: 3D Modeling for Games", focus: "Basic 3D modeling, importing assets into Unity and Roblox Studio.", project: "Creating custom game assets and importing them." },
    { title: "Week 8: Sound and Music in Games", focus: "Integrating sound effects and background music.", project: "Adding audio to enhance game immersion." },
    { title: "Week 9: Game Testing and Debugging", focus: "Testing methods, debugging techniques, and performance optimization.", project: "Testing and refining your game project." },
    { title: "Week 10: Capstone Project", focus: "Developing a complete game, incorporating learned skills.", project: "Finalizing and presenting your game project." }
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-16 dark:bg-black text-black dark:text-white">
        {/* Full-width header image */}
        <div style={{ maxHeight: '60vh' }} className="w-full overflow-hidden">
          <img src={gameDevBanner} alt="Game Development Banner" className="w-full h-auto" />
        </div>

        <div className="text-center my-8">
          <h1 className="text-3xl font-bold">MASTERING GAME DEVELOPMENT: 10 WEEK PROGRAM</h1>
        </div>

        {/* Weekly Modules */}
        <div className="flex flex-col my-8 mx-4">
          {weeks.map((week, index) => (
            <div key={index} className="bg-purple-200 text-black p-4 rounded-lg shadow-md mb-4">
              <h2 className="font-semibold text-lg ">{week.title}</h2>
              <p className="mt-2"><strong>Focus:</strong> {week.focus}</p>
              <p className="mt-1"><strong>Project:</strong> {week.project}</p>
            </div>
          ))}
        </div>

        {/* Pricing and Call to Action */}
        <div className="text-center font-bold mb-4">
          <h2 className="text-2xl">PRICING</h2>
          <p className="mb-2">SPECIAL INTRODUCTORY OFFER FOR BUDDING GAME DEVELOPERS</p>
          <p>1 Lesson = $70</p>
          <p>10 Lesson Pack $600 (Save $100)</p>
        </div>
        <div className="text-center my-8">
        <Link to="https://calendly.com/marsel-tutors/game-development" target="_blank" rel="noopener noreferrer" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Enroll in Game Development
        </Link>
        </div>
      </div>
    </>
  );
};

export default GameDev;
