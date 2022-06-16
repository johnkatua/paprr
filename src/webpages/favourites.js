import React from "react";

import { usePapersQuery } from "../services/paperApi";

const Favourites = () => {
  const { data } = usePapersQuery();
  console.log(data);
  return (
    <div>
      <h3>Favs:</h3>
      <div>
        {data && data.data.map((paper) => {
          return (
            <>
              <iframe key={paper._id} src={`${paper.file}#view=fitH`} title="Hello" height="200%" width="33%" style={{ marginBottom: '2rem' }} />
            </>
          )
        })}
      </div>
    </div>
  );
};

export default Favourites;
