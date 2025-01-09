import React, { useState } from "react";
import "./ProfileCard.css"; // Import file CSS để tạo hiệu ứng

const ProfileCard = ({ name, title, avatar }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="profile-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src={avatar} alt={name} className="profile-image" />
      <div className={`profile-info ${isHovered ? "visible" : ""}`}>
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
