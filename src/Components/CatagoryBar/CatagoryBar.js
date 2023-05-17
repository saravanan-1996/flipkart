import React from "react";
import "./CatagoryBar.css";
const CategoryBar = ({ Imgsrc, CategoryName }) => {
  return (
    <div className="CategoryBar">
      <div className="categoryBar-Img">
        <img src={Imgsrc} alt="CategoryImg" />
      </div>
      <p className="categoryBar-name">{CategoryName}</p>
    </div>
  );
};

export default CategoryBar;