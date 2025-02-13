import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  console.log(book);
  return (
    <>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg m-2"
        key={book._id}
      >
        <img
          className="w-full"
          src={
            book.imageUrl
              ? book.imageUrl
              : "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg"
          }
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.bookName}</div>
          <p className="text-gray-700 text-base">Rs. {book.bookPrice}</p>
          <p className="text-black-700 text-base">{book.authorName}</p>
          <p className="text-black-700 text-base">{book.isbnNumber}</p>
          <p className="text-red-700 text-base">{book.publishedAt}</p>
          <button className="bg-blue-500 rounded-xl cursor-pointer px-2 text-amber-50">
            <Link to={`/book/${book._id}`}>See More</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
