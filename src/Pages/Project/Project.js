import React from 'react';
import { useParams } from 'react-router-dom';
const Project = () => {
  let { projectName } = useParams();
  return <div>Project {projectName}</div>;
};

export default Project;
