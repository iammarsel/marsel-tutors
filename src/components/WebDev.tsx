import React from 'react';
import webDevBanner from '../assets/webdev_banner.png'; // Ensure you have a banner image for Web Development
import Navbar from './Navbar2';
import { Link } from 'react-router-dom';

const WebDev: React.FC = () => {
  const weeks = [
    { title: "Week 1: Introduction to HTML", focus: "Basic structure of web pages, tags, attributes.", project: "Simple personal webpage." },
    { title: "Week 2: Styling with CSS", focus: "CSS syntax, selectors, box model, layout.", project: "Styling the personal webpage." },
    { title: "Week 3: Advanced CSS", focus: "Responsive design, Flexbox, Grid.", project: "Responsive company landing page." },
    { title: "Week 4: Introduction to JavaScript", focus: "JavaScript basics, variables, functions, DOM manipulation.", project: "Interactive content on web pages." },
    { title: "Week 5: Advanced JavaScript", focus: "ES6 features, asynchronous JavaScript, APIs.", project: "Weather application using an API." },
    { title: "Week 6: Introduction to React JS", focus: "React basics, components, state, props.", project: "Simple React application." },
    { title: "Week 7: Intermediate React JS", focus: "Hooks, context API, routing.", project: "Single Page Application with React Router." },
    { title: "Week 8: State Management in React", focus: "Redux, state management patterns.", project: "Complex state handling in React app." },
    { title: "Week 9: Building Full-Stack Web Apps", focus: "Integrating backend services, RESTful APIs.", project: "Full-stack application with Node.js backend." },
    { title: "Week 10: Capstone Project", focus: "Applying all learned concepts, comprehensive project.", project: "Student's choice full-stack project." }
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-14 dark:bg-dark_primary text-dark_primary dark:text-white">
        {/* Full-width header image */}
        <div style={{ maxHeight: '60vh' }} className="w-full overflow-hidden">
          <img src={webDevBanner} alt="Web Development Banner" className="w-full h-auto" />
        </div>

        <h1 className="text-center text-6xl font-semibold my-6">WEB DEVELOPMENT</h1>

        {/* Weekly Modules */}
        <div className="max-w-2xl mx-auto p-6 shadow-lg rounded-lg text-center shadow-slate-300">
          {weeks.map((week, index) => (
            <div key={index} className="bg-blue-200 text-dark_primary p-4 rounded-lg shadow-md mb-4">
              <h2 className="font-semibold text-lg">{week.title}</h2>
              <p className="mt-2"><strong>Focus:</strong> {week.focus}</p>
              <p className="mt-1"><strong>Project:</strong> {week.project}</p>
            </div>
          ))}
        

        {/* Pricing and Call to Action */}
        <div className="text-center font-bold mb-4">
          <h2 className="text-2xl">PRICING</h2>
          <p className="mb-2">EXCLUSIVE OFFER: ENROLL IN WEB DEVELOPMENT AND GET A DISCOUNT ON ADVANCED MODULES</p>
          <p>1 Lesson = $50</p>
          <p>10 Lesson Pack $400 (Save $100)</p>
        </div>
        </div>
        <div className="text-center my-8">
        <Link to="https://calendly.com/marsel-tutors/meeting" target="_blank" rel="noopener noreferrer" className="bg-baby_blue hover:bg-blue-500 rounded-2xl text-white font-bold py-2 px-4 rounded">
            Enroll in Web Development
        </Link>
        </div>
        <p className='text-center text-lg py-4'>© 2024 MarselTutors. All Rights Reserved. </p>
      </div>
    </>
  );
};

export default WebDev;
