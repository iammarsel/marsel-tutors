import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import banner_img from '../assets/banner1.png';
import python_img from '../assets/python.png';
import game_img from '../assets/roblox.png';
import tutor_img from '../assets/tutor.png';
import web_img from '../assets/js.png';
import chess_img from '../assets/chess.png';
import marcos from '../assets/marcos.png';
import isaac from '../assets/isaac.png';
import aleks from '../assets/aleks.png';
const Home: React.FC = () => {
  return (
    <div className='mt-10 text-dark_secondary bg-white dark:text-white dark:bg-dark_primary'>
      <Navbar />

      {/* New welcome area div */}
      <div className="block lg:flex h-screen justify-center items-center text-center mx-4 ">
        {/* Left side content */}
        <div className="w-full px-4 py-12 ">
          <h1 className="text-4xl sm:text-6xl font-bold">Welcome to <span className='block text-transparent bg-clip-text bg-gradient-to-r from-baby_blue via-peach to-baby_blue'>marseltutors</span></h1>
          <p className="text-md my-6">Hi my name is Marsel, I am a Software Developer and a professional tutor. Teaching has always been a passion of mine, and I would like to share the knowledge I've gathered over the years with new students! I have been tutoring professionally online for 4 years for a range of topics including Computer Science, Web Development, Chess, and more. Check out more details below, I hope you can find what you are looking for!</p>
          <Link className="bg-baby_blue rounded-2xl hover:bg-blue-500 text-white font-bold py-2 px-4" to="https://calendly.com/marsel-tutors/meeting" target="_blank" rel="noopener noreferrer" >
            Start Now
          </Link>
        </div>

        {/* Right side image */}
        <div className="w-full py-5 px-4">
          <img src={banner_img} alt="Learning Platform" />
        </div>
      </div>
      <div id="topics" className="block h-screen justify-center items-center text-center mx-auto max-w-8xl">
      <h1 className="text-center text-3xl sm:text-4xl font-semibold my-12 pt-24">Choose Your Path</h1>


      <div  className="flex flex-wrap justify-center text-center mt-4">
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 lg:w-1/5 bg-purple-500 text-white p-4 rounded-lg m-2">
          <p className="text-2xl mb-2 font-semibold">Secure Your First Internship</p>
          <p className="text-sm px-2 my-2 flex-grow">Learn how to built yourself up step-by-step professionally as a Computer Science student and secure your first internship for this summer!</p>
          <Link className="inline-block bg-white text-purple-500 hover:bg-purple-800 hover:text-white text-lg font-semibold py-2 px-4 mt-2 rounded-full transition duration-300 ease-in-out" to="/internship">Learn More</Link>
        </div>
        
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 lg:w-1/5 bg-green-400 text-white p-4 rounded-lg m-2">
          <p className="text-2xl mb-2 font-semibold">Mastering Python</p>
          <p className="text-sm px-2 my-2 flex-grow">Master Computer Science fundamentals using trending technologies in the industry. Start with Python projects and apply what you learn to any aspect of development!</p>
          <Link className="inline-block bg-white text-green-500 hover:bg-green-800 hover:text-white text-lg font-semibold py-2 px-4 mt-2 rounded-full transition duration-300 ease-in-out" to="/python">Learn More</Link>
        </div>
        
        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 lg:w-1/5 bg-orange-400 text-white p-4 rounded-lg m-2">
          <p className="text-2xl mb-2 font-semibold">Chess</p>
          <p className="text-sm px-2 my-2 flex-grow">Learn how to play chess and compete in professional games. Choose a path from beginner to advanced, learning the fundamentals, theory, puzzles, and much more!</p>
          <Link className="inline-block bg-white text-orange-500 hover:bg-orange-800 hover:text-white text-lg font-semibold py-2 mt-2 px-4 rounded-full transition duration-300 ease-in-out" to="/chess">Learn More</Link>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-1/3 lg:w-1/5 bg-blue-500 text-white p-4 rounded-lg m-2">
          <p className="text-2xl mb-2 font-semibold">Web Development</p>
          <p className="text-sm px-2 my-2 flex-grow">Learn how to develop and deploy your own website with HTML, CSS, and JavaScript, as well as a popular framework  known as ReactJS, with projects such as a personal portfolio! </p>
          <Link className="inline-block bg-white text-blue-500 hover:bg-blue-800 hover:text-white text-lg font-semibold py-2 px-4 mt-2 rounded-full transition duration-300 ease-in-out" to="/web-dev">Learn More</Link>
        </div>

        
      </div>

      </div>

      <div id="experience" className="block h-screen justify-center items-center text-center mx-4 py-24">

      <h1 className="text-center text-3xl sm:text-4xl font-semibold my-6 pt-48">Why MarselTutors</h1>
      <p className="text-center text-lg my-4">Our tutors have several qualifications and experiences. Here are the current stats:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 text-center mx-auto max-w-6xl">
        <div className="skill-box flex flex-row items-center p-4 shadow-md rounded-lg shadow-slate-300 bg-gray-100 dark:bg-dark_secondary">
          <img src={python_img} alt="Python" className="w-16 h-16" />
          <p className="ml-2 text-lg">5 years of Python Development</p>
        </div>
        <div className="skill-box flex flex-row items-center p-4 shadow-lg rounded-lg shadow-slate-300 bg-gray-100 dark:bg-dark_secondary">
          <img src={game_img} alt="Roblox" className="w-16 h-16" />
          <p className="ml-2 text-lg">2 years of Game Development</p>
        </div>
        <div className="skill-box flex flex-row items-center p-4 shadow-lg rounded-lg shadow-slate-300 bg-gray-100 dark:bg-dark_secondary">
          <img src={tutor_img} alt="Tutor" className="w-16 h-16" />
          <p className="ml-2 text-lg">4 years of Professional Tutoring</p>
        </div>
        <div className="skill-box flex flex-row items-center p-4 shadow-lg rounded-lg shadow-slate-300 bg-gray-100 dark:bg-dark_secondary">
          <img src={web_img} alt="WebDev" className="w-16 h-16" />
          <p className="ml-2 text-lg">3 years of Web Development</p>
        </div>
        <div className="skill-box flex flex-row items-center p-4 shadow-lg rounded-lg shadow-slate-300 bg-gray-100 dark:bg-dark_secondary">
          <img src={chess_img} alt="Chess" className="w-16 h-16" />
          <p className="ml-2 text-lg">2100+ Chess Rating</p>
        </div>
      </div>

      </div>

      <div id="reviews" className="block h-screen justify-center items-center text-center mx-4 py-24">

      <h1 id="reviews" className="text-center text-3xl sm:text-4xl font-semibold my-6 mt-44">Client Satisfaction</h1>
      <div className="bg-gray-100 dark:bg-dark_primary p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Box 1 */}
          <div className="flex flex-col items-center bg-gray-300 dark:bg-dark_secondary shadow rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <img src={isaac} alt="Marcos" className="w-16 h-16 object-cover rounded-full" />
              <h3 className="text-lg font-bold">Isaac</h3>
            </div>
            <p className="text-sm text-center mt-4">I was Marsel's mentee for 6 months and he helped me secure my first Software Development Internship!</p>
            <div className="flex justify-center mt-4">
              {/* Repeat this for 5 stars */}
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.396-0.802 1.556-0.802 1.952 0l1.286 2.611 2.88 0.419c.672 0.097 0.94 0.926 0.454 1.394l-2.083 2.03 0.49 2.85c.113 0.66-.578 1.166-1.158 0.854l-2.563-1.347-2.563 1.347c-.58 0.312-1.271-0.194-1.158-0.854l0.49-2.85-2.083-2.03c-.486-0.468-0.218-1.297 0.454-1.394l2.88-0.419 1.286-2.611z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-300 dark:bg-dark_secondary shadow rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <img src={aleks} alt="" className="w-16 h-16 object-cover rounded-full" />
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

          <div className="flex flex-col items-center bg-gray-300 dark:bg-dark_secondary shadow rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <img src={marcos} alt="Marcos" className="w-16 h-16 object-cover rounded-full" />
              <h3 className="text-lg font-bold">Marcos</h3>
            </div>
            <p className="text-sm text-center mt-4">I love playing Roblox games and now know how to make my own!</p>
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
      </div>
      <div className='text-center mb-12'>
      <h1 className="text-center text-2xl m-8 mt-24">LIMITED TIME ONLY: GET YOUR FIRST LESSON FOR FREE IN ANY TOPIC YOU WANT TO LEARN</h1>
      <Link className="bg-baby_blue rounded-xl hover:bg-blue-500 text-white font-bold py-2 px-4" to="https://calendly.com/marsel-tutors/meeting">
        Start Now
      </Link>
      </div>
      <p className='text-center text-lg py-4'>© 2024 MarselTutors. All Rights Reserved. </p>
    </div>
  );
};

export default Home;
