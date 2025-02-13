import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const EditBook = () => {
  const { id } = useParams();
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

    Object.entries(bookDetails).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.patch(
        `http://localhost:3000/book/${id}`,
        formData
      );

      console.log(response);
      navigate("/book/" + id);
    } catch (error) {
      console.error("Error uploading book:", error);
    }
  };
  const fetchBooks = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`);
    if (response.status === 200) {
      setBookDetails(response.data.data);
    }
  };
  useEffect(() => {
    console.log("hi");
    fetchBooks();
  }, []);
  return (
    <>
      <Navbar />
      <form className="max-w-sm  mx-auto my-[200px]" onSubmit={handleSubmit}>
        <h1 className="font-bold text-blue-500 text-5xl mb-[50px] text-center">
          Edit Book
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
            value={bookDetails.bookName}
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
            value={bookDetails.bookPrice}
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
            value={bookDetails.isbnNumber}
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
            value={bookDetails.authorName}
            name="authorName"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="publication"
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
            value={bookDetails.publication}
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
            value={bookDetails.publishedAt}
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
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit Book
        </button>
      </form>
    </>
  );
};

export default EditBook;
