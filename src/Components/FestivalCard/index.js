import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Link, NavLink, Outlet } from "react-router-dom";

const FestivalCard = ({ image, title, description, tall }) => {

  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className={`festival-card ${tall ? "tall" : ""}`} style={{ backgroundImage: `url(${image})` }}>
      <div className="festival-overlay"></div>
      <div className="festival-icon">
        <div className="festival-icon__inner">
          <GoArrowUpRight />
        </div>
      </div>
      <div className="festival-content">
        <h3 className="festival-title">{title}</h3>
        <p className="festival-description">{description}</p>
      </div>
      <div className="festival-buttons">
        <div className="festival-buttons__back"></div>
        <Link to="/game" className="btn-3d">
          {language === "EN" ? "Virtual explore" : "Trải nghiệm ảo"}
        </Link>
        <div className="btn-tour">
          {language === "EN" ? "Book tour" : "Đặt Tour"}
        </div>
      </div>
    </div>
  );
};

export default FestivalCard;
