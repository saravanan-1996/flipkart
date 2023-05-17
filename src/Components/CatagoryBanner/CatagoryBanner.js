import React from 'react'
import "./CatagoryBanner.css";


const CatagoryBanner = ({ImgSrc,Title,Brand}) => {
  return (
    <div className="CategoryBanner">
    <img src={ImgSrc} alt="" className="CategoryBanner-img" />
    <p className="CategoryBanner-title">
      {Title.length < 25 ? Title : Title.slice(0, 25) + "..."}
    </p>
    <p className="CategoryBanner-ShopNow">Shop Now!</p>
    <p className="CategoryBanner-Brands">{Brand}</p>
  </div>
  )
}

export default CatagoryBanner;