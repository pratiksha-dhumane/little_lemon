import React, { useState } from "react";

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    alert("Booking submitted successfully!");
    setFormData({ name: "", date: "", time: "", guests: 1 });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md sm:p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-yellow-600">
        Book a Table
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="number"
          name="guests"
          value={formData.guests}
          min="1"
          max="20"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition"
        >
          Reserve Table
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
