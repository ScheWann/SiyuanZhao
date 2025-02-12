import React from "react";
import PropTypes from "prop-types";

const Publication = ({ data, last }) => (
    <div className="course-container">
        <p className="course-name">{data.title}</p>
    </div>
);

Publication.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Publication;
