import React from "react";
import PropTypes from "prop-types";

import Publication from './Publications/Publication';

const Publications = ({ data }) => (
    <div className="publications">
        <div className="link-to" id="publication" />
        <div className="title">
            <h3>Publications</h3>
        </div>
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
