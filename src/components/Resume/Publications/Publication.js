import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ data }) => (
    <article className="publication-container">
        <header>
            <h4>{data.title}</h4>
            <p className="description">{data.description}</p>
            <a className="citeLink" href={data.link}>{data.cite}</a>
        </header>
    </article>
);

Publication.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        cite: PropTypes.string.isRequired
    }).isRequired,
};

export default Publication;
