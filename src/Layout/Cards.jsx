import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/Book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  });
  console.log(books);
  return (
    <div className="mt-14">
      <h1 className="text-3xl font-bold text-center ">Books</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {books.map((book) => (
          <Card key={book.id} book={book}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
