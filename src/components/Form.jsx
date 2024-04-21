import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Consultancy Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
