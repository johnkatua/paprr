import React from "react";

const Card = (props) => {
  return (
    <div className="home--container--1">
      <iframe
        src={`${props.file}#view=fitH`}
        title="paperpdf"
        width="100%"
        height="70%"
      ></iframe>
      <div className="home--container__details">
        <p>{props.name}</p>
        <p>{props.academicYear}</p>
        <p>{props.year}</p>
        <p>{props.status}</p>
        <button>View Paper</button>
      </div>
    </div>
  );
};

export default Card;
