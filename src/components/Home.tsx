import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const Home: React.FC = () => {
  return (
    <div className='mt-10'>
      <Navbar />

      {
        /*

        Hi my name is Marsel, and I am a professional tutor! I have been tutoring professionally online for 3 years for a range of topics including Computer Science, Game Development, Chess, and more! Check out more details below, I hope you can find what you are looking for!
previous teaching experience and professional knowledge

        My professional experience: 
        5 years of experience in Python development
        5 years of Chess experience in professional tournaments
        3 years of experience in Web Development 
        3 Years in Game Development in Roblox Studio and Unity

        Choose Your Path
        - Computer Science
        - Web Development
        - Game Development
        - Chess

        topics offered

        client satisfaction feedback
        */
      }
      <h1>Welcome to the Home page!</h1>
      <div className="flex flex-wrap justify-center mt-4">
    <div className="flex flex-col items-center justify-center w-full sm:w-1/3 lg:w-1/5 h-56 bg-orange-400 text-white p-4 rounded-lg m-2">
        <p className="text-2xl">CHESS</p>
        <p className="text-sm">Learn how to play chess and compete in professional games.
Choose a path from beginner to advanced, learning the fundamentals, theory, puzzles, and much more!</p>
        <Link className="inline-block bg-white text-orange-500 hover:bg-orange-800 hover:text-white text-lg font-semibold py-2 px-4 rounded-full mt-3 transition duration-300 ease-in-out" to="/chess">Learn More</Link>
    </div>

    <div className="flex flex-col items-center justify-center w-full sm:w-1/3 lg:w-1/5 h-56 bg-green-400 text-white p-4 rounded-lg m-2">
        <p className="text-2xl">MASTERING PYTHON</p>
        <p className="text-sm">Master Computer Science fundamentals using trending technologies in the industry. Start with Python projects and apply what you learn to any aspect of development!</p>
        <Link className="inline-block bg-white text-green-500 hover:bg-green-800 hover:text-white text-lg font-semibold py-2 px-4 rounded-full mt-3 transition duration-300 ease-in-out" to="/python">Learn More</Link>
    </div>

    <div className="flex flex-col items-center justify-center w-full sm:w-1/3 lg:w-1/5 h-56 bg-blue-500 text-white p-4 rounded-lg m-2">
        <p className="text-2xl">WEB DEVELOPMENT</p>
        <p className="text-sm">Learn how to develop and deploy your own website with HTML, CSS, and JavaScript, as well as a popular framework  known as ReactJS. Making interactive and useful websites will always be in demand!</p>
        <Link className="inline-block bg-white text-blue-500 hover:bg-blue-800 hover:text-white text-lg font-semibold py-2 px-4 rounded-full mt-3 transition duration-300 ease-in-out" to="/web-dev">Learn More</Link>
    </div>

    <div className="flex flex-col items-center justify-center w-full sm:w-1/3 lg:w-1/5 h-56 bg-purple-500 text-white p-4 rounded-lg m-2">
        <p className="text-2xl">GAME DEVELOPMENT</p>
        <p className="text-sm">Make your own video game on Roblox Studio using Lua, or a 2D game on the Unity game engine. Game development is a fun way to make creative projects and test them with friends by playing together!</p>
        <Link className="inline-block bg-white text-purple-500 hover:bg-purple-800 hover:text-white text-lg font-semibold py-2 px-4 rounded-full mt-3 transition duration-300 ease-in-out" to="/game-dev">Learn More</Link>
    </div>
</div>




    </div>
  );
};

export default Home;
