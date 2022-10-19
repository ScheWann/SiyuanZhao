import React from "react";
import PropTypes from "prop-types";

import Research from "./Researches/Research";

const References = ({ data }) => (
  <div className="research">
    <div className="link-to" id="research" />
    <div className="title">
      <h3>Research</h3>
    </div>
    {data.map((research) => (
      <Research data={research} key={research.company} />
    ))}
  </div>
);

References.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      position: PropTypes.string,
      daterange: PropTypes.string,
      points: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

References.defaultProps = {
  data: [],
};

export default References;
