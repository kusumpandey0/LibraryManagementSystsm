import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams();
  console.log(id);
  const [book, setBook] = useState({});
  const fetchBooks = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`);
    if (response.status === 200) {
      setBook(response.data.data);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  console.log(book);
  return (
    <>
      <img
        className="w-full"
        src={
          book.imageUrl
            ? book.imageUrl
            : "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg"
        }
        alt="photo"
        height="200px"
        width="200px"
      />
      <div className="px-6 py-4">
        <p className="font-bold text-gray-700 text-base">{book.bookName}</p>
        <p className="text-gray-700 text-base">Rs. {book.bookPrice}</p>
        <p className="text-black-700 text-base">authorName</p>
        <p className="text-black-700 text-base">is</p>
        <button className="bg-blue-500 rounded-xl cursor-pointer px-2 text-amber-50"></button>
      </div>
    </>
  );
};

export default SingleBook;
