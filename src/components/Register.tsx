import React, { useState, ChangeEvent, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './Navbar';

// Define a type for the form state
type FormData = {
  date: Date;
  topic: string;
  name: string;
  email: string;
  age: string;
  experience: string;
};

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    date: new Date(),
    topic: '',
    name: '',
    email: '',
    age: '',
    experience: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-12">
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded bg-white">
          <DatePicker 
            selected={formData.date} 
            onChange={handleDateChange} 
            className="p-2 border rounded w-full"
            popperPlacement="right-start"
          />

          <select 
            name="topic" 
            value={formData.topic}
            onChange={handleChange} 
            className="p-2 border rounded w-full"
          >
            <option value="">Choose a Topic</option>
            <option value="chess">Chess</option>
            <option value="python">Python</option>
            <option value="webdev">Web Development</option>
            <option value="gamedev">Game Development</option>
          </select>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              placeholder="Name" 
              onChange={handleChange} 
              className="p-2 border rounded w-full"
            />

            <input 
              type="email" 
              name="email" 
              value={formData.email}
              placeholder="Email" 
              onChange={handleChange} 
              className="p-2 border rounded w-full"
            />

            <input 
              type="number" 
              name="age" 
              value={formData.age}
              placeholder="Age" 
              onChange={handleChange} 
              className="p-2 border rounded w-full"
            />

            <input 
              type="text" 
              name="experience" 
              value={formData.experience}
              placeholder="Experience Level" 
              onChange={handleChange} 
              className="p-2 border rounded w-full"
            />

          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded w-full">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
