import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import banner_img from '../assets/banner.png';
import python_img from '../assets/python.png';
import game_img from '../assets/roblox.png';
import tutor_img from '../assets/tutor.png';
import web_img from '../assets/js.png';
import chess_img from '../assets/chess.png';
import avatar_img from '../assets/profile.png';
import unity_img from '../assets/unity.png';
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

      {/* New welcome area div */}
      <div className="flex justify-center items-center text-center h-full mx-4">
        {/* Left side content */}
        <div className="w-1/2 px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to <span className='text-baby_blue'>Marsel</span><span className='text-peach'>Tutors</span></h1>
          <p className="text-xl mb-4">Hi my name is Marsel, and I am a professional tutor! I have been tutoring professionally online for 3 years for a range of topics including Computer Science, Game Development, Chess, and more! Check out more details below, I hope you can find what you are looking for!</p>
          <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" to="/register">
            Start Now
          </Link>
        </div>

        {/* Right side image */}
        <div className="w-1/2 py-12 px-4">
          <img src={banner_img} alt="Learning Platform" />
        </div>
      </div>

      <h1 className="text-center text-2xl">Choose Your Path</h1>


      <div className="flex flex-wrap justify-center text-center mt-4">
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 lg:w-1/5 bg-orange-400 text-white p-4 rounded-lg m-2">
          <p className="text-2xl">CHESS</p>
          <p className="text-sm px-2 my-2 flex-grow">Learn how to play chess and compete in professional games. Choose a path from beginner to advanced, learning the fundamentals, theory, puzzles, and much more!</p>
          <Link className="inline-block bg-white text-orange-500 hover:bg-orange-800 hover:text-white text-lg font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out" to="/chess">Learn More</Link>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 lg:w-1/5 bg-green-400 text-white p-4 rounded-lg m-2">
          <p className="text-2xl mb-2">MASTERING PYTHON</p>
          <p className="text-sm px-2 my-2 flex-grow">Master Computer Science fundamentals using trending technologies in the industry. Start with Python projects and apply what you learn to any aspect of development!</p>
          <Link className="inline-block bg-white text-green-500 hover:bg-green-800 hover:text-white text-lg font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out" to="/python">Learn More</Link>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 lg:w-1/5 bg-blue-500 text-white p-4 rounded-lg m-2">
          <p className="text-2xl mb-2">WEB DEVELOPMENT</p>
          <p className="text-sm px-2 my-2 flex-grow">Learn how to develop and deploy your own website with HTML, CSS, and JavaScript, as well as a popular framework  known as ReactJS. Making interactive and useful websites will always be in demand!</p>
          <Link className="inline-block bg-white text-blue-500 hover:bg-blue-800 hover:text-white text-lg font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out" to="/web-dev">Learn More</Link>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 lg:w-1/5 bg-purple-500 text-white p-4 rounded-lg m-2">
          <p className="text-2xl">GAME DEVELOPMENT</p>
          <p className="text-sm px-2 my-2 flex-grow">Make your own video game on Roblox Studio using Lua, or a 2D game on the Unity game engine. Game development is a fun way to make creative projects and test them with friends by playing together!</p>
          <Link className="inline-block bg-white text-purple-500 hover:bg-purple-800 hover:text-white text-lg font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out" to="/game-dev">Learn More</Link>
        </div>
      </div>

      <h1 className="text-center text-2xl mt-8">Why MarselTutors</h1>
      <p className="text-center text-lg mt-4">Our tutors have several qualifications and experiences. Here are the current stats:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4 text-center">
        <div className="skill-box flex flex-row items-center p-4 shadow-lg rounded-lg">
          <img src={python_img} alt="Python" className="w-16 h-16" />
          <p className="ml-2 text-lg font-semibold">5 years of Python development</p>
        </div>
        <div className="skill-box flex flex-row items-center p-4 shadow-lg rounded-lg">
          <img src={game_img} alt="Roblox" className="w-16 h-16" />
          <img src={unity_img} alt="Unity" className="w-16 h-16" />
          <p className="ml-2 text-lg font-semibold">2 years of Game Development</p>
        </div>
        <div className="skill-box flex flex-row items-center p-4 shadow-lg rounded-lg">
          <img src={tutor_img} alt="Tutor" className="w-16 h-16" />
          <p className="ml-2 text-lg font-semibold">4 years of professional Tutoring</p>
        </div>
        <div className="skill-box flex flex-row items-center p-4 shadow-lg rounded-lg">
          <img src={web_img} alt="WebDev" className="w-16 h-16" />
          <p className="ml-2 text-lg font-semibold">3 years of Web Development</p>
        </div>
        <div className="skill-box flex flex-row items-center p-4 shadow-lg rounded-lg">
          <img src={chess_img} alt="Chess" className="w-16 h-16" />
          <p className="ml-2 text-lg font-semibold">2000+ chess rating</p>
        </div>
      </div>

      <h1 className="text-center text-2xl mt-8">Client Satisfaction</h1>
      <div className="bg-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Box 1 */}
          <div className="flex flex-col items-center bg-gray-300 shadow rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <img src={avatar_img} alt="Marcos" className="w-16 h-16 object-cover rounded-full" />
              <h3 className="text-lg font-bold">Marcos</h3>
            </div>
            <p className="text-sm text-center mt-4">I love learning by making projects and games!</p>
            <div className="flex justify-center mt-4">
              {/* Repeat this for 5 stars */}
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.396-0.802 1.556-0.802 1.952 0l1.286 2.611 2.88 0.419c.672 0.097 0.94 0.926 0.454 1.394l-2.083 2.03 0.49 2.85c.113 0.66-.578 1.166-1.158 0.854l-2.563-1.347-2.563 1.347c-.58 0.312-1.271-0.194-1.158-0.854l0.49-2.85-2.083-2.03c-.486-0.468-0.218-1.297 0.454-1.394l2.88-0.419 1.286-2.611z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-300 shadow rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <img src={avatar_img} alt="" className="w-16 h-16 object-cover rounded-full" />
              <h3 className="text-lg font-bold">Aleks</h3>
            </div>
            <p className="text-sm text-center mt-4">I was able to level up my chess game from Marsel’s lessons!</p>
            <div className="flex justify-center mt-4">
              {/* Repeat this for 5 stars */}
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.396-0.802 1.556-0.802 1.952 0l1.286 2.611 2.88 0.419c.672 0.097 0.94 0.926 0.454 1.394l-2.083 2.03 0.49 2.85c.113 0.66-.578 1.166-1.158 0.854l-2.563-1.347-2.563 1.347c-.58 0.312-1.271-0.194-1.158-0.854l0.49-2.85-2.083-2.03c-.486-0.468-0.218-1.297 0.454-1.394l2.88-0.419 1.286-2.611z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-300 shadow rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <img src={avatar_img} alt="Marcos" className="w-16 h-16 object-cover rounded-full" />
              <h3 className="text-lg font-bold">Josh</h3>
            </div>
            <p className="text-sm text-center mt-4">I love playing Roblox games and now know how to make them!</p>
            <div className="flex justify-center mt-4">
              {/* Repeat this for 5 stars */}
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.396-0.802 1.556-0.802 1.952 0l1.286 2.611 2.88 0.419c.672 0.097 0.94 0.926 0.454 1.394l-2.083 2.03 0.49 2.85c.113 0.66-.578 1.166-1.158 0.854l-2.563-1.347-2.563 1.347c-.58 0.312-1.271-0.194-1.158-0.854l0.49-2.85-2.083-2.03c-.486-0.468-0.218-1.297 0.454-1.394l2.88-0.419 1.286-2.611z" />
                </svg>
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className='text-center mb-12'>
      <h1 className="text-center text-2xl m-8">LIMITED TIME ONLY: GET YOUR FIRST LESSON FOR FREE IN ANY TOPIC YOU WANT TO LEARN</h1>
      <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded " to="/register">
            Start Now
          </Link>
      </div>
    </div>
  );
};

export default Home;
