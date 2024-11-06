import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './profilementor.css';
// import { mockDataMentor } from '../../Data/mockData.js';
import { mockDataMentor } from '../../Data/mockData';

const ProfileMentors = () => {
  const [activeTab, setActiveTab] = useState("Hồ Sơ");
  const [profileData, setProfileData] = useState(null);
  const { id } = useParams(); // Access the ID from the URL

  // Filter mentor data based on the ID from URL
  useEffect(() => {
    const mentor = mockDataMentor.find((mentor) => mentor.id === parseInt(id));
    setProfileData(mentor);
  }, [id]); // Run whenever the id changes

  if (!profileData) {
    return <div>Loading...</div>;
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const { profile, reviews } = profileData;

  return (
    <div className="profile-container">
      <div className="cover-photo">
        <img src="/cover.jpg" alt="Cover" />
      </div>
      <div className="profile-header">
        <div className="avatar">
          <img src="/avatar.jpg" alt="Avatar" />
        </div>
        <div className="mentor-info">
          <h2>{profile.name}</h2>
          <p>{profile.specialty}</p>
        </div>
        <button className="connect-button">Kết Nối</button>
      </div>
      
      <div className="nav-tabs">
        <button
          className={`tab ${activeTab === "Hồ Sơ" ? "active" : ""}`}
          onClick={() => handleTabClick("Hồ Sơ")}
        >
          Hồ Sơ
        </button>
        <button
          className={`tab ${activeTab === "Đánh Giá" ? "active" : ""}`}
          onClick={() => handleTabClick("Đánh Giá")}
        >
          Đánh Giá
        </button>
      </div>

      {activeTab === "Hồ Sơ" ? (
        <div>
          <div className="profile-section">
            <h3>GIỚI THIỆU BẢN THÂN</h3>
            {profile.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="profile-section">
            <h3>KINH NGHIỆM LÀM VIỆC</h3>
            {profile.experience.map((exp, index) => (
              <div key={index} className="experience">
                <p><strong>{exp.position}</strong></p>
                <p>{exp.date}</p>
                <p>{exp.company}</p>
              </div>
            ))}
          </div>
          <div className="profile-section">
            <h3>HỌC VẤN</h3>
            {profile.education.map((edu, index) => (
              <div key={index} className="education">
                <p><strong>{edu.school}</strong></p>
                <p>{edu.degree}</p>
                <p>{edu.date}</p>
              </div>
            ))}
          </div>
          <div className="profile-section">
            <h3>GIẢI THƯỞNG</h3>
            {profile.awards.map((award, index) => (
              <div key={index} className="award">
                <p><strong>{award.title}</strong></p>
                <p>{award.field}</p>
                <p>{award.date}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="rating-section">
          <h3>Đánh Giá</h3>
          <ReviewList reviews={reviews} />
        </div>
      )}
    </div>
  );
}

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <div className="review-header">
            <span className="review-name">{review.name}</span>
            <StarRating rating={review.rating} />
          </div>
          <p className="review-comment">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`star ${star <= rating ? "filled" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default ProfileMentors;
