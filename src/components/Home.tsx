import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import banner_img from '../assets/img7.jpg';
import marcos from '../assets/marcos.png';
import isaac from '../assets/isaac.png';
import aleks from '../assets/aleks.png';
import swan from '../assets/swan.jpg';
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
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand_primary via-brand_secondary to-brand_primary">
              marseltutors
            </span>
          </h1>
          <p className="text-md mb-8">
            Learn new skills, evolve your career, and get the help you need to succeed.
            From coding skills to career growth to chess, the resources are worth your time!
          </p>
          <Link
            className="inline-block bg-brand_primary rounded-2xl hover:bg-brand_secondary text-white font-bold py-2 px-6"
            to="https://calendly.com/marsel-tutors/meeting"
            target="_blank"
            rel="noopener noreferrer"
          >
             Learn More
          </Link>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section id="topics" className="py-20 mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-6">Choose Your Path</h2>
        <h2 className="text-center text-md sm:text-xl mb-6">3 Topics with Customizable Paths to Fit Your Needs</h2>
        <div className="flex flex-wrap justify-center">
          {/* Box 1 */}
          <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/5 bg-purple-700 text-white p-4 rounded-lg m-2">
            <p className="text-2xl mb-2 font-semibold text-center">Secure Your First Internship</p>
            <p className="text-sm/7 my-2 flex-grow">
              Learn how to build yourself up step-by-step professionally as a Computer Science
              student and secure your first internship for this summer.
            </p>
            <Link
              className="inline-block bg-white text-purple-500 hover:bg-purple-800 hover:text-white text-lg font-semibold py-2 px-4 mt-2 rounded-full transition duration-300 ease-in-out"
              to="/internship"
            >
              Learn More
            </Link>
          </div>

          <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/5 bg-blue-600 text-white p-4 rounded-lg m-2">
            <p className="text-2xl mb-2 font-semibold text-center">Software Development</p>
            <p className="text-sm/7 my-2 flex-grow">
              Build a project from start to finish with different technologies: Python, JavaScript, SQL, AWS, and much more.
            </p>
            <Link
              className="inline-block bg-white text-blue-500 hover:bg-blue-800 hover:text-white text-lg font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
              to="/software"
            >
              Learn More
            </Link>
          </div>

                 {/* Box 3 */}
          <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/5 bg-orange-800 text-white p-4 rounded-lg m-2">
            <p className="text-2xl pt-3 pb-6 font-semibold text-center">Chess</p>
            <p className="text-sm/7 my-2 flex-grow">
              Learn how to play chess from a professional; Choose a path from beginner
              to advanced, learning the fundamentals, theory, puzzles, and much more.
            </p>
            <Link
              className="inline-block bg-white text-orange-800 hover:bg-orange-900 hover:text-white text-lg font-semibold py-2 mt-2 px-4 rounded-full transition duration-300 ease-in-out"
              to="/chess"
            >
              Learn More
            </Link>
          </div>

        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-6">Testimonials</h2>
        <h2 className="text-center text-md sm:text-xl mb-6">How Students Learned and Succeeded</h2>
        <div className="bg-gray-100 dark:bg-dark_primary p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="flex flex-col items-center bg-gray-300 dark:bg-dark_secondary shadow rounded-lg p-4">
              <div className="flex flex-col items-center">
                <img src={marcos} alt="Marcos" className="w-24 h-24 object-cover rounded-full" />
                <h3 className="text-lg font-bold mt-2">Marcos Condori</h3>
                <h3 className="text-sm text-brand_secondary">Python and Roblox Developer</h3>
              </div>
              
              <div className="flex justify-center my-2">
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
              <p className="text-sm/6 mb-4">
                I love playing Roblox games and now know how to make my own!
              </p>
              </div>
            
              <div className="flex flex-col items-center bg-gray-300 dark:bg-dark_secondary shadow rounded-lg p-4">
              <div className="flex flex-col items-center">
                <img src={swan} alt="Marcos" className="w-24 h-24 object-cover rounded-full" />
                <h3 className="text-lg font-bold  mt-2">Swan Thurein</h3>
                <h3 className="text-sm text-brand_secondary">SWE Intern at Wells Fargo</h3>
              </div>
              <div className="flex justify-center my-2">
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
              <p className="text-sm/6 mb-4">
              Marsel helped me get started with my own projects—something I really struggled with before. I didn’t know where to begin or how to finish, but his guidance made a lot of difference. He also gave me great tips for making my resume internship-ready, which helped me land my first internship at Wells Fargo. Super grateful for his help!
              </p>
              
              </div>

            {/* Review Box 1 */}
            <div className="flex flex-col items-center bg-gray-300 dark:bg-dark_secondary shadow rounded-lg p-4">
              <div className="flex flex-col items-center">
                <img src={isaac} alt="Isaac" className="w-24 h-24 object-cover rounded-full" />
                <h3 className="text-lg font-bold mt-2">Isaac Powell</h3>
                <h3 className="text-sm text-brand_secondary">SWE Intern at JPMorganChase</h3>
                
              </div>
              
              <div className="flex justify-center my-2">
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
              <p className="text-sm/6 mb-4">
                I was Marsel's mentee for 6 months and he helped me secure my first Software Development Internship!
              </p>
            </div>

            {/* Review Box 2 */}
            <div className="flex flex-col items-center bg-gray-300 dark:bg-dark_secondary shadow rounded-lg p-4">
              <div className="flex flex-col items-center">
                <img src={aleks} alt="Aleks" className="w-24 h-24 object-cover rounded-full" />
                <h3 className="text-lg font-bold mt-2">Aleks Fetlyaev</h3>                
                <h3 className="text-sm text-brand_secondary">Professional Chess Player</h3>
              </div>
              
              <div className="flex justify-center my-2">
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
              <p className="text-sm/6 mb-4">
                I was able to level up my chess game from Marsel’s lessons!
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Limited Time Offer Section */}
      <section className="py-20 text-center px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-12">
          Find Out More Over a Free Introduction Call
        </h2>
        <Link
          className="bg-brand_secondary rounded-xl hover:bg-blue-500 text-white font-bold py-2 px-4"
          to="https://calendly.com/marsel-tutors/meeting"
        >
          Schedule Your Lesson
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-lg py-6 border-t border-gray-200 dark:border-gray-700">
        © 2025 MarselTutors. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
