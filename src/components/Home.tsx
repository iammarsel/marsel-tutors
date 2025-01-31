import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import banner_img from '../assets/img7.jpg';
import python_img from '../assets/python.png';
import game_img from '../assets/roblox.png';
import tutor_img from '../assets/tutor.png';
import web_img from '../assets/js.png';
import chess_img from '../assets/chess.png';
import marcos from '../assets/marcos.png';
import isaac from '../assets/isaac.png';
import aleks from '../assets/aleks.png';
import offer_img from '../assets/offer.png';

const Home: React.FC = () => {
  return (
    <div className="text-dark_secondary bg-white dark:text-white dark:bg-dark_primary">
      {/* If navbar is fixed or sticky, ensure you add top padding to this container or sections below */}
      <Navbar />

      {/* Banner Section */}
      <section
        className="relative w-full flex flex-col justify-center items-center text-center bg-cover bg-center h-screen"        style={{ 
          backgroundImage: `url(${banner_img})`,
          // Optional: give it a min-height (not full h-screen) 
          minHeight: '80vh' 
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Banner content */}
        <div className="relative z-10 mx-auto px-4 max-w-2xl text-white py-16 sm:py-24">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-baby_blue via-peach to-baby_blue">
              marseltutors
            </span>
          </h1>
          <p className="text-md mb-8">
            Learn new skills, evolve your career, and get the help you need to succeed.
            From coding skills to career growth to chess, the resources are worth your time!
          </p>
          <Link
            className="inline-block bg-baby_blue rounded-2xl hover:bg-blue-500 text-white font-bold py-2 px-6"
            to="https://calendly.com/marsel-tutors/meeting"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Now
          </Link>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section id="topics" className="py-20 mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-12">Choose Your Path</h2>
        
        <div className="flex flex-wrap justify-center text-center">
          {/* Box 1 */}
          <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/5 bg-purple-700 text-white p-4 rounded-lg m-2">
            <p className="text-2xl mb-2 font-semibold">Secure Your First Internship</p>
            <p className="text-sm px-2 my-2 flex-grow">
              Learn how to build yourself up step-by-step professionally as a Computer Science
              student and secure your first internship for this summer!
            </p>
            <Link
              className="inline-block bg-white text-purple-500 hover:bg-purple-800 hover:text-white text-lg font-semibold py-2 px-4 mt-2 rounded-full transition duration-300 ease-in-out"
              to="/internship"
            >
              Learn More
            </Link>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/5 bg-green-600 text-white p-4 rounded-lg m-2">
            <p className="text-2xl mb-2 font-semibold">Mastering Python</p>
            <p className="text-sm px-2 my-2 flex-grow">
              Master Computer Science fundamentals using trending technologies in the industry.
              Start with Python projects and apply what you learn to any aspect of development!
            </p>
            <Link
              className="inline-block bg-white text-green-500 hover:bg-green-800 hover:text-white text-lg font-semibold py-2 px-4 mt-2 rounded-full transition duration-300 ease-in-out"
              to="/python"
            >
              Learn More
            </Link>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/5 bg-orange-600 text-white p-4 rounded-lg m-2">
            <p className="text-2xl mb-2 font-semibold">Chess</p>
            <p className="text-sm px-2 my-2 flex-grow">
              Learn how to play chess and compete in professional games. Choose a path from beginner
              to advanced, learning the fundamentals, theory, puzzles, and much more!
            </p>
            <Link
              className="inline-block bg-white text-orange-500 hover:bg-orange-800 hover:text-white text-lg font-semibold py-2 mt-2 px-4 rounded-full transition duration-300 ease-in-out"
              to="/chess"
            >
              Learn More
            </Link>
          </div>

          {/* Box 4 */}
          <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/5 bg-blue-600 text-white p-4 rounded-lg m-2">
            <p className="text-2xl mb-2 font-semibold">Software Development</p>
            <p className="text-sm px-2 my-2 flex-grow">
              Learn how to develop and deploy your own website with HTML, CSS, and JavaScript, 
              as well as a popular framework known as ReactJS, with projects such as a personal portfolio!
            </p>
            <Link
              className="inline-block bg-white text-blue-500 hover:bg-blue-800 hover:text-white text-lg font-semibold py-2 px-4 mt-2 rounded-full transition duration-300 ease-in-out"
              to="/web-dev"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-6">Client Satisfaction</h2>
        <div className="bg-gray-100 dark:bg-dark_primary p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Review Box 1 */}
            <div className="flex flex-col items-center bg-gray-300 dark:bg-dark_secondary shadow rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <img src={isaac} alt="Isaac" className="w-16 h-16 object-cover rounded-full" />
                <h3 className="text-lg font-bold">Isaac</h3>
              </div>
              <p className="text-sm text-center mt-4">
                I was Marsel's mentee for 6 months and he helped me secure my first Software Development Internship!
              </p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.396-0.802 1.556-0.802 1.952 0l1.286 2.611 
                      2.88 0.419c.672 0.097 0.94 0.926 0.454 1.394l-2.083 
                      2.03 0.49 2.85c.113 0.66-.578 1.166-1.158 
                      0.854l-2.563-1.347-2.563 1.347c-.58 
                      0.312-1.271-0.194-1.158-0.854l0.49-2.85-2.083-2.03
                      c-.486-0.468-0.218-1.297 0.454-1.394l2.88-0.419 
                      1.286-2.611z"
                    />
                  </svg>
                ))}
              </div>
            </div>

            {/* Review Box 2 */}
            <div className="flex flex-col items-center bg-gray-300 dark:bg-dark_secondary shadow rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <img src={aleks} alt="Aleks" className="w-16 h-16 object-cover rounded-full" />
                <h3 className="text-lg font-bold">Aleks</h3>
              </div>
              <p className="text-sm text-center mt-4">
                I was able to level up my chess game from Marsel’s lessons!
              </p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.396-0.802 1.556-0.802 1.952 0l1.286 2.611 
                      2.88 0.419c.672 0.097 0.94 0.926 0.454 1.394l-2.083 
                      2.03 0.49 2.85c.113 0.66-.578 1.166-1.158 
                      0.854l-2.563-1.347-2.563 1.347c-.58 
                      0.312-1.271-0.194-1.158-0.854l0.49-2.85-2.083-2.03
                      c-.486-0.468-0.218-1.297 0.454-1.394l2.88-0.419 
                      1.286-2.611z"
                    />
                  </svg>
                ))}
              </div>
            </div>

            {/* Review Box 3 */}
            <div className="flex flex-col items-center bg-gray-300 dark:bg-dark_secondary shadow rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <img src={marcos} alt="Marcos" className="w-16 h-16 object-cover rounded-full" />
                <h3 className="text-lg font-bold">Marcos</h3>
              </div>
              <p className="text-sm text-center mt-4">
                I love playing Roblox games and now know how to make my own!
              </p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.396-0.802 1.556-0.802 1.952 0l1.286 2.611 
                      2.88 0.419c.672 0.097 0.94 0.926 0.454 1.394l-2.083 
                      2.03 0.49 2.85c.113 0.66-.578 1.166-1.158 
                      0.854l-2.563-1.347-2.563 1.347c-.58 
                      0.312-1.271-0.194-1.158-0.854l0.49-2.85-2.083-2.03
                      c-.486-0.468-0.218-1.297 0.454-1.394l2.88-0.419 
                      1.286-2.611z"
                    />
                  </svg>
                ))}
              </div>
              </div>
              {/* Review Box 3 */}
            <div className="flex flex-col items-center bg-gray-300 dark:bg-dark_secondary shadow rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <img src={marcos} alt="Marcos" className="w-16 h-16 object-cover rounded-full" />
                <h3 className="text-lg font-bold">Marcos</h3>
              </div>
              <p className="text-sm text-center mt-4">
                I love playing Roblox games and now know how to make my own!
              </p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.396-0.802 1.556-0.802 1.952 0l1.286 2.611 
                      2.88 0.419c.672 0.097 0.94 0.926 0.454 1.394l-2.083 
                      2.03 0.49 2.85c.113 0.66-.578 1.166-1.158 
                      0.854l-2.563-1.347-2.563 1.347c-.58 
                      0.312-1.271-0.194-1.158-0.854l0.49-2.85-2.083-2.03
                      c-.486-0.468-0.218-1.297 0.454-1.394l2.88-0.419 
                      1.286-2.611z"
                    />
                  </svg>
                ))}
              </div>
              </div>
          </div>
        </div>
      </section>

      {/* Limited Time Offer Section */}
      <section className="py-20 text-center px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-6">
          LIMITED TIME ONLY: GET YOUR FIRST LESSON FOR FREE
        </h2>
        <Link
          className="bg-baby_blue rounded-xl hover:bg-blue-500 text-white font-bold py-2 px-4"
          to="https://calendly.com/marsel-tutors/meeting"
        >
          Start Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-lg py-6 border-t border-gray-200 dark:border-gray-700">
        © 2024 MarselTutors. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
