import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./profile.css";

const Profile = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Gọi API để lấy thông tin người dùng dựa trên ID
    axios
      .get(`http://localhost:2903/api/users/users/${id}`)
      .then((response) => {
        const data = response.data;

        // Parse role_details nếu có
        let roleDetails = {};
        if (data.role_details) {
          try {
            roleDetails = JSON.parse(data.role_details);
          } catch (error) {
            console.error("Error parsing role_details:", error);
          }
        }

        // Gộp dữ liệu chính và role_details
        setProfileData({ ...data, ...roleDetails });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  // Hiển thị Loading hoặc thông báo lỗi khi dữ liệu chưa sẵn sàng
  if (!profileData) {
    return <div>Loading...</div>;
  }

  // Destructure dữ liệu người dùng
  const {
    name,
    email,
    phone,
    facebook_link,
    gender,
    role,
    strengths,
    weaknesses,
    goals,
    mentoring_expectations,
    avatar,
    status,
  } = profileData;

  return (
    <div className="profile-container">
      <div className="cover-photo">
        <img
          src={profileData.coverPhoto || "http://localhost:2903/uploads/default-cover.jpg"}
          alt="Cover"
          onError={(e) => (e.target.src = "http://localhost:2903/uploads/default-cover.jpg")}
        />
      </div>
      <div className="profile-header">
        <div className="avatar">
          <img
            src="http://localhost:2903/uploads/default-avatar.png"
            alt="Avatar"
            onError={(e) =>
              (e.target.src = "/assets/images/default-avatar.png")
            }
          />
        </div>
        <div className="mentor-info">
          <h2>{name}</h2>
          <p>Email: {email}</p>
          <p>Số điện thoại: {phone}</p>
        </div>
      </div>
      <div className="profile-section">
        <h4>ĐIỂM MẠNH</h4>
        <p>{strengths || "Chưa có thông tin"}</p>
      </div>
      <div className="profile-section">
        <h4>ĐIỂM YẾU</h4>
        <p>{weaknesses || "Chưa có thông tin"}</p>
      </div>
      <div className="profile-section">
        <h4>MỤC TIÊU</h4>
        <p>{goals || "Chưa có thông tin"}</p>
      </div>
      <div className="profile-section">
        <h4>KỲ VỌNG VỀ MENTORING</h4>
        <p>{mentoring_expectations || "Chưa có thông tin"}</p>
      </div>
    </div>
  );
};

export default Profile;
