import React from "react";
import Exercise from "./Exercise";

const Exercises = ({ items, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <section className="container">
      <ul className="exercises">
        {items.map((item) => (
          <Exercise item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Exercises;
