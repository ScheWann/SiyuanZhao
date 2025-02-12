import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ data }) => (
    <article className="degree-container">
        <header>
            <h4 className="degree">{data.title}</h4>
            <p>{data.description}</p>
            <a href={data.link}></a>
        </header>
    </article>
);

Publication.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Publication;
