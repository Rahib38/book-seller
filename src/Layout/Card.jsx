import { FaRegStar } from "react-icons/fa6";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  const {bookId, tags, author, rating, bookName, image } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="flex justify-center items-center ">
        <div className="border-2 w-80  p-4 mt-6 rounded-2xl">
          <div className="bg-gray-200 flex justify-center p-4 rounded-2xl">
            <img className="w-32 " src={image} alt="" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex gap-10">
              {tags.map((tag, id) => (
                <div key={id}>
                  <h2 className="bg-gray-200 p-1 rounded-xl text-[#23BE0A] text-sm font-bold ">
                    #{tag}
                  </h2>
                </div>
              ))}
            </div>
            <h1 className="text-2xl font-bold">{bookName}</h1>
            <p className="text-[#131313] text-sm font-semibold">
              By : {author}
            </p>
            <div className="border-dashed border-[1px]"></div>
            <div className="flex justify-between items-center">
              <p className="text-[#131313] text-sm font-semibold">Fiction</p>
              <div className="flex gap-1 items-center">
                <p className="text-[#131313] text-sm font-semibold">{rating}</p>
                <p className="">
                  <FaRegStar />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  book: PropTypes.obj,
};

export default Card;
