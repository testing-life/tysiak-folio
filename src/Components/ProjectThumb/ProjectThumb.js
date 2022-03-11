import React from 'react';
import './ProjectThumb.css';
const ProjectThumb = ({ index, src, name, description }) => {
  return (
    <figure className="project__thumb">
      <img src={src} alt="" className="mb-4" />
      <figcaption>
        <span className="project__title">{name}</span> &ndash; {description}
      </figcaption>
    </figure>
  );
};

export default ProjectThumb;
