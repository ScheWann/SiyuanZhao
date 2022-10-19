import React from 'react';
import PropTypes from 'prop-types';

const Research = ({ data }) => (
  <article className="researches-container">
    <header>
      <h4>{data.company} - {data.position}</h4>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Research.propTypes = {
  data: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Research;
