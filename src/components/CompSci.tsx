import React from 'react';
import compSciBanner from '../assets/python_banner.png'; // Ensure you have a banner image for CompSci
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const CompSci: React.FC = () => {
  const weeks = [
    { title: "Week 1: Introduction to Python", focus: "Setting up Python, basic syntax, variables, data types.", project: "Simple data handling script." },
    { title: "Week 2: Control Structures and Functions", focus: "Conditional statements, loops, functions, error handling.", project: "Building a calculator." },
    { title: "Week 3: Data Structures", focus: "Lists, tuples, sets, dictionaries.", project: "Contact book application." },
    { title: "Week 4: Working with Files", focus: "File operations, file formats (text, CSV, JSON).", project: "File management tool." },
    { title: "Week 5: Object-Oriented Programming (OOP)", focus: "Classes, objects, inheritance, polymorphism, encapsulation.", project: "Basic inventory system." },
    { title: "Week 6: Advanced Python Concepts", focus: "Comprehensions, lambda functions, map/reduce/filter, decorators.", project: "Enhanced project efficiency." },
    { title: "Week 7: Introduction to Web Programming", focus: "Web programming basics, Flask/Django overview, web apps.", project: "Basic web application or REST API." },
    { title: "Week 8: Data Analysis and Visualization", focus: "Pandas, Matplotlib, data manipulation, visualization.", project: "Data analysis with real-world datasets." },
    { title: "Week 9: Introduction to Machine Learning", focus: "Machine learning basics, scikit-learn.", project: "Simple machine learning model." },
    { title: "Week 10: Capstone Project", focus: "Applying all learned concepts, peer programming.", project: "Student's choice project." }
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-16 dark:bg-black text-black dark:text-white">
        {/* Full-width header image */}
        <div style={{ maxHeight: '60vh' }} className="w-full overflow-hidden">
          <img src={compSciBanner} alt="CompSci Banner" className="w-full h-auto" />
        </div>

        <div className="text-center my-8">
          <h1 className="text-3xl font-bold text-blue-400">MASTERING PYTHON: 10 WEEK PROGRAM</h1>
        </div>

        {/* Weekly Modules */}
        <div className="flex flex-col my-8 mx-4">
          {weeks.map((week, index) => (
            <div key={index} className="bg-yellow-200 text-black p-4 rounded-lg shadow-md mb-4">
              <h2 className="font-semibold text-lg">{week.title}</h2>
              <p className="mt-2"><strong>Focus:</strong> {week.focus}</p>
              <p className="mt-1"><strong>Project:</strong> {week.project}</p>
            </div>
          ))}
        </div>

        {/* Pricing and Call to Action */}
        <div className="text-center font-bold mb-4">
          <h2 className="text-2xl">PRICING</h2>
          <p className="mb-2">LIMITED TIME ONLY: GET YOUR FIRST LESSON FOR FREE IN COMPUTER SCIENCE</p>
          <p>1 Lesson = $50</p>
          <p>10 Lesson Pack $400 (Save $100)</p>
        </div>
        <div className="text-center my-8">
        <Link to="https://calendly.com/marsel-tutors/python" target="_blank" rel="noopener noreferrer" className="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            Schedule Your First Lesson
        </Link>
        </div>
      </div>
    </>
  );
};

export default CompSci;
