import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ data }) => (
    <article className="degree-container">
        <header>
            <h4 className="degree">{data.title}</h4>
            <p>{data.description}</p>
            <a className="school" href={data.link}>Zhao S, Marai GE. A Part-to-Whole Circular Cell Explorer. ArXiv [Preprint]. 2024 Oct 14:arXiv:2410.10936v1. PMID: 39483344; PMCID: PMC11527092.</a>
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
