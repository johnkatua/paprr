import React, { useEffect, useState } from "react";

import { usePapersQuery } from "../services/paperApi";
import Card from "../components/Card";

const Home = () => {
  const { data } = usePapersQuery();
  const [name, setName] = useState('');
  const [results, setResults] = useState(data?.data);

  useEffect(() => {
    setResults(data?.data);
  }, [data]);

  const filter = (e) => {
    const searchedWord = e.target.value;

    if (searchedWord !== '') {
      const response = data.data.filter((paper) => {
        return paper.name.toLowerCase().includes(searchedWord.toLowerCase());
      });
      setResults(response);
    } else {
      setResults(data && data.data)
    }
    setName(searchedWord);
  }


  return (
    <div className="home--container">
      <input type="search" value={name} onChange={filter} placeholder="search paper" />
      <div className="home--container__data">
        {results && results.length > 0 ? (
          results.map((paper) => (
            <Card key={paper._id} academicYear={paper.academicYear} name={paper.name} status={paper.status} year={paper.year} file={paper.file} />
          ))
        ) : (
          <h2>No paper with that name currently!!!</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
