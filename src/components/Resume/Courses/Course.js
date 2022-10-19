import React from "react";
import PropTypes from "prop-types";

const Course = ({ data, last }) => (
  <div className="course-container">
    <p className="course-name">{data.title}</p>
  </div>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Course.defaultProps = {
  last: false,
};

export default Course;
