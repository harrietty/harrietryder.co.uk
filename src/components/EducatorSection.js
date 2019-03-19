import React from "react";

const EducatorSection = ({ side, children, img, imgDesc }) => {
  return (
    <div className={`speakingSection ${side === "left" ? "reversed" : ""}`}>
      <div>{children}</div>
      <img src={img} className={`speakingImg`} alt={imgDesc} />
    </div>
  );
};

export default EducatorSection;
