import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/book/${id}`);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
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
        <p className="text-black-700 text-base">{book.authorName}</p>
        <p className="text-black-700 text-base">{book.isbnNumber}</p>
        <Link to={`/edit/${book._id}`}>
          <button className="bg-blue-500 rounded-xl cursor-pointer px-2 text-amber-50">
            Edit
          </button>
        </Link>
        <button
          className="bg-red-500 rounded-xl cursor-pointer px-2 text-amber-50 m-5"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default SingleBook;
