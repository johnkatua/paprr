import React from 'react';
import { useParams } from 'react-router-dom';

import { useExamsByCategoryQuery } from '../services/paperApi';
import Card from '../components/Card';

const FilteredPapers = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, isError, error } = useExamsByCategoryQuery(id);

  let content;

  if (isLoading) {
    content = <div>Loading</div>
  } else if (isSuccess) {
    content = data && data.data.map(paper => <Card key={paper._id} academicYear={paper.academicYear} name={paper.name} status={paper.status} year={paper.year} file={paper.file} />)
  } else if (isError) {
    content = <div>{error}</div>
  }

  return (
    <div className='home--container'>
      {content}
    </div>
  )
}

export default FilteredPapers;