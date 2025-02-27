import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const FestivalCard = ({ image, title, description, tall }) => {
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
        <div className="btn-3d">Trải nghiệm 3D</div>
        <div className="btn-tour">Đặt Tour</div>
      </div>
    </div>
  );
};

export default FestivalCard;
