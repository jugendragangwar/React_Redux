import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../features/user/userDetailSlice";

const Index = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: "", body: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(formData));
    setFormData({ title: "", body: "" });
  };

  return (
    <div className="min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 shadow rounded bg-white"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Body</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Index;
