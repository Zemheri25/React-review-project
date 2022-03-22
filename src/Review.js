import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];
  console.log(name);

  const nextperson = () => {
    if(index !== 3) {
      setIndex(index + 1)
    }
    
  };

  const previousperson = () => {
    if(index !== 0) {
      setIndex(index - 1)
    }
  };

  const randomperson = () => {
    let mynumber = Math.floor(Math.random()*4);
    setIndex(mynumber)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="next-btn" onClick={previousperson}>
          <FaChevronLeft />
        </button>

        <button className="random-btn" onClick={randomperson}>Surprise Me</button>

        <button className="prev-btn" onClick={nextperson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
