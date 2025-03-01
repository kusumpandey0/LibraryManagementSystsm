import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const AddBook = () => {
  const [bookDetails, setBookDetails] = useState({
    bookName: "",
    bookPrice: "",
    isbnNumber: "",
    authorName: "",
    publication: "",
    publishedAt: "",
    image: null,
  });
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    setBookDetails((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    console.log(Object.enteries(data));
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.patch(
        `http://localhost:3000/book/${id}`,
        formData
      );

      console.log(response);
      navigate("/");
    } catch (error) {
      console.error("Error uploading book:", error);
    }
  };

  return (
    <>
      <Navbar />
      <form className="max-w-sm  mx-auto my-[200px]" onSubmit={handleSubmit}>
        <h1 className="font-bold text-blue-500 text-5xl mb-[50px] text-center">
          Add A Book
        </h1>
        <div className="mb-5">
          <label
            htmlFor="bookName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Book Name
          </label>
          <input
            type="text"
            id="bookName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name of the book"
            required
            name="bookName"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="bookPrice"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Price of Book
          </label>
          <input
            type="number"
            id="bookPrice"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            name="bookPrice"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="isbnNumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Isbn Number
          </label>
          <input
            type="number"
            id="isbnNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            name="isbnNumber"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="authorName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Author Name
          </label>
          <input
            type="text"
            id="authorName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Author of the book"
            required
            name="authorName"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="bookName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Publication
          </label>
          <input
            type="text"
            id="publication"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Publication name"
            required
            name="publication"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="publishedAt"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Published At
          </label>
          <input
            type="date"
            id="publishedAt"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name of the book"
            required
            name="publishedAt"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="imageUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Image Url
          </label>
          <input
            type="file"
            id="image"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
            name="image"
            required
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddBook;
