import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false); // Add a state for form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to an API
    console.log('Form submitted:', formData);
    
    // After form submission, show confirmation message and reset form
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Optional: Hide the message after a few seconds
    setTimeout(() => setIsSubmitted(false), 5000); // Hide after 5 seconds
  };

  return (
    <div className="bg-white text-purple-900 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-purple-300 rounded p-2 w-full"
          />
        </label>
        <label className="mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-purple-300 rounded p-2 w-full"
          />
        </label>
        <label className="mb-2">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-purple-300 rounded p-2 w-full h-32"
          />
        </label>
        <button type="submit" className="bg-purple-600 text-white rounded p-2 mt-2 hover:bg-purple-700">
          Send Message
        </button>
      </form>
      
      {/* Show confirmation message after form submission */}
      {isSubmitted && (
        <p className="mt-4 text-green-600">
          Your message has been sent successfully!
        </p>
      )}
    </div>
  );
};

export default Contact;
