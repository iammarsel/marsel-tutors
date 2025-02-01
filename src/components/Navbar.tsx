import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext';
const Navbar: React.FC = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("Dark Mode:", !darkMode);
  };

  return (
    <>
    

<nav className="bg-gray-100 dark:bg-dark_secondary fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">

  <Link to="/" className="flex items-center">
      <span className="self-center text-2xl font-semibold whitespace-nowrap block text-transparent bg-clip-text bg-gradient-to-r from-baby_blue via-peach to-baby_blue">
        marseltutors
      </span>
  </Link>
  
  <div className="flex-1 hidden md:flex justify-center">
    <ul className="flex space-x-8 font-medium">
      <li>
        <a href="#" className="text-black dark:text-white md:bg-transparent" aria-current="page">About</a>
      </li>
      <li>
        <a href="#topics" className="text-black dark:text-white hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#reviews" className="text-black dark:text-white hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonials</a>
      </li>
    </ul>
  </div>

  <div className="flex items-center space-x-4">
      <button onClick={toggleDarkMode}>
      <div className="flex flex-col justify-center mx-3">
        <input type="checkbox" name="light-switch" className="light-switch sr-only" />
        <label className="relative cursor-pointer p-1">
            <svg className="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-slate-300" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                <path className="fill-slate-400" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
            </svg>
            <svg className="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                <path className="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
            </svg>
            <span className="sr-only">Switch to Light/Dark mode</span>
        </label>
      </div>
      </button>
      <Link to="https://calendly.com/marsel-tutors/meeting" target="_blank" rel="noopener noreferrer"  className="text-white bg-baby_blue hover:bg-peach focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-3 py-2 text-center dark:bg-dark-secondary">
      Schedule Lesson
      </Link>
      <Link to="https://calendly.com/marsel-tutors/meeting" target="_blank" rel="noopener noreferrer"  className="text-white bg-peach hover:bg-baby_blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-3 py-2 text-center dark:bg-dark-secondary">
      Resume Review
      </Link>
  </div>

  </div>
</nav>

    </>
  );
};

export default Navbar;
