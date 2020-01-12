import React from "react";
import PropTypes from "prop-types";

const EducatorSection = ({ side, children, img, imgDesc }) => {
  return (
    <div className={`speakingSection ${side === "left" ? "reversed" : ""}`}>
      <div>{children}</div>
      <img src={img} className={"speakingImg"} alt={imgDesc} />
    </div>
  );
};

EducatorSection.propTypes = {
  side: PropTypes.string,
  children: PropTypes.node,
  img: PropTypes.string,
  imgDesc: PropTypes.string
};

export default EducatorSection;
