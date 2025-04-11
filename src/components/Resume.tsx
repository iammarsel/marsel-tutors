import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar2';
import emailjs from 'emailjs-com';

const Resume: React.FC = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    resume: null as File | null,
    resumeBase64: '',
    resumeMimeType: '',
    resumeName:'',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setFormData((prev) => ({
            ...prev,
            resume: file,
            resumeMimeType: file.type, // Store file MIME type
            resumeName: file.name, // Store file name
          }));
        }
      };
      reader.onerror = (error) => {
        console.error('Error converting file to Base64:', error);
        alert('Failed to process file. Please try again.');
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.resume) return alert('Please upload a resume before submitting.');
    setLoading(true);

    try {
      const emailParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      };

      await emailjs.send(
        'service_lz5lvek', 
        'template_d93152e',
        emailParams,
        '_U48sttJ2zy1My1et'
      );
  
      alert('Your resume has been submitted successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error submitting resume:', error);
      alert('Failed to submit resume. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-dark_primary text-dark_secondary dark:text-white px-4">
      <div className="max-w-lg w-full bg-gray-100 dark:bg-dark_secondary p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Resume Review</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark_primary focus:ring-2 focus:ring-brand_primary"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark_primary focus:ring-2 focus:ring-brand_primary"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark_primary focus:ring-2 focus:ring-brand_primary"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Upload Resume (PDF/DOCX)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              name="resume"
              onChange={handleFileChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark_primary focus:ring-2 focus:ring-brand_primary"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand_primary hover:bg-brand_secondary text-white font-bold py-3 rounded-lg transition duration-300"
          >
            {loading ? 'Submitting...' : 'Submit Resume'}
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Resume;
