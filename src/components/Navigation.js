import React from "react";
import { NavLink } from "react-router-dom";

import { useFacultiesQuery } from "../services/paperApi";

const Navigation = ({ onClick }) => {
  const { data } = useFacultiesQuery();
  console.log(data);
  return (
    <nav className="nav--wrapper">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            All
          </NavLink>
        </li>
        {data &&
          data.data.map((faculty) => {
            return (
              <li key={faculty._id}>
                <NavLink
                  to={faculty.acronym}
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  {faculty.acronym}
                </NavLink>
              </li>
            );
          })}
        <button onClick={onClick}>Filter</button>
      </ul>
    </nav>
  );
};

export default Navigation;
