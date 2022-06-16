import React from "react";

import image1 from "../assets/image-1.jpg";

const Intro = () => {
  return (
    <div className="intro--container">
      <div className="intro--container__details">
        <p className="intro--details__header">
          The Technical University of Kenya Past Paper Repository.
        </p>
        <p className="intro--details__docs">
          Get access to all the past papers both main exams and cats. The past
          papers will for degree and diploma students. The past papers will be
          from all the three faculties in TUK.
        </p>
      </div>
      <div className="intro--container__img">
        <img src={image1} alt="intro" />
      </div>
    </div>
  );
};

export default Intro;
