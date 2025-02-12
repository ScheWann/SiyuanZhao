import React from "react";
import PropTypes from "prop-types";

import Publication from './Publications/Publication';

const Publications = ({ data }) => (
    <div className="publications">
        {data.map((pub, index) => (
            <Publication key={index} data={pub} last={index === data.length - 1} />
        ))}
    </div>
);

Publications.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Publications;
