import React from "react";

import { usePapersQuery } from "../services/paperApi";
import Card from "../components/Card";

const Home = () => {
  const { data } = usePapersQuery();

  return (
    <div className="home--container">
      {data &&
        data.data.map((paper) => {
          return (
            <Card
              key={paper._id}
              academicYear={paper.academicYear}
              name={paper.name}
              status={paper.status}
              year={paper.year}
              file={paper.file}
            />
          );
        })}
    </div>
  );
};

export default Home;
