import React from "react";

const Exercise = ({ item }) => {
  const { name, gifurl, id, target } = item;
  return (
    <li key={id} className="exercise">
      <div className="exercise__inner">
        <h4>Target Muscle ({target})</h4>
        <img src={gifurl} alt="" />
        <h4>{name}</h4>
      </div>
    </li>
  );
};

export default Exercise;
