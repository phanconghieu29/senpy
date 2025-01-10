// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./profile.css";

// const Profile = () => {
//   const { id } = useParams(); // Lấy ID từ URL
//   const [profileData, setProfileData] = useState(null);

//   useEffect(() => {
//     // Gọi API để lấy thông tin người dùng dựa trên ID
//     axios
//       .get(`http://localhost:2903/api/users/users/${id}`)
//       .then((response) => {
//         const data = response.data;

//         // Parse role_details nếu có
//         let roleDetails = {};
//         if (data.role_details) {
//           try {
//             roleDetails = JSON.parse(data.role_details);
//           } catch (error) {
//             console.error("Error parsing role_details:", error);
//           }
//         }

//         // Gộp dữ liệu chính và role_details
//         setProfileData({ ...data, ...roleDetails });
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, [id]);

//   // Hiển thị Loading hoặc thông báo lỗi khi dữ liệu chưa sẵn sàng
//   if (!profileData) {
//     return <div>Loading...</div>;
//   }

//   // Destructure dữ liệu người dùng
//   const {
//     name,
//     email,
//     phone,
//     facebook_link,
//     gender,
//     role,
//     strengths,
//     weaknesses,
//     goals,
//     mentoring_expectations,
//     avatar,
//     status,
//   } = profileData;

//   return (
//     <div className="profile-container">
//       <div className="cover-photo">
//         <img
//           src={profileData.coverPhoto || "http://localhost:2903/uploads/default-cover.jpg"}
//           alt="Cover"
//           onError={(e) => (e.target.src = "http://localhost:2903/uploads/default-cover.jpg")}
//         />
//       </div>
//       <div className="profile-header">
//         <div className="avatar">
//           <img
//             src="http://localhost:2903/uploads/default-avatar.png"
//             alt="Avatar"
//             onError={(e) =>
//               (e.target.src = "/assets/images/default-avatar.png")
//             }
//           />
//         </div>
//         <div className="mentor-info">
//           <h2>{name}</h2>
//           <p>Email: {email}</p>
//           <p>Số điện thoại: {phone}</p>
//         </div>
//       </div>
//       <div className="profile-section">
//         <h4>ĐIỂM MẠNH</h4>
//         <p>{strengths || "Chưa có thông tin"}</p>
//       </div>
//       <div className="profile-section">
//         <h4>ĐIỂM YẾU</h4>
//         <p>{weaknesses || "Chưa có thông tin"}</p>
//       </div>
//       <div className="profile-section">
//         <h4>MỤC TIÊU</h4>
//         <p>{goals || "Chưa có thông tin"}</p>
//       </div>
//       <div className="profile-section">
//         <h4>KỲ VỌNG VỀ MENTORING</h4>
//         <p>{mentoring_expectations || "Chưa có thông tin"}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./profile.module.scss";

const cx = classNames.bind(styles);

const Profile = () => {
  const { id } = useParams();
  const currentUserId = localStorage.getItem("userId");
  const isEditable = id === currentUserId;
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:2903/api/users/users/${id}`)
      .then((response) => {
        const data = response.data;
        let roleDetails = {};
        if (data.role_details) {
          try {
            roleDetails = JSON.parse(data.role_details);
          } catch (error) {
            console.error("Error parsing role_details:", error);
          }
        }
        setProfileData({ ...data, ...roleDetails });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  const handleEditClick = () => {
    setEditMode(true);
    setFormData(profileData);
  };

  const handleCancel = () => {
    setEditMode(false);
    setFormData({});
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:2903/api/users/users/${id}`, formData)
      .then((response) => {
        setProfileData(response.data);
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  const {
    name,
    email,
    phone,
    // facebook_link,
    strengths,
    weaknesses,
    goals,
    mentoring_expectations,
  } = profileData;

  return (
    <div className={cx("profile-container")}>
      <div className={cx("cover-photo")}>
        <img
          src={
            profileData.coverPhoto ||
            "http://localhost:2903/uploads/default-cover.jpg"
          }
          alt="Cover"
          onError={(e) =>
            (e.target.src = "http://localhost:2903/uploads/default-cover.jpg")
          }
        />
      </div>
      <div className={cx("profile-header")}>
        <div className={cx("avatar")}>
          <img
            src="http://localhost:2903/uploads/default-avatar.png"
            alt="Avatar"
            onError={(e) =>
              (e.target.src = "/assets/images/default-avatar.png")
            }
          />
        </div>
        <div className={cx("mentor-info")}>
          {editMode ? (
            <input
              type="text"
              value={formData.name || ""}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          ) : (
            <h2>{name}</h2>
          )}
          <p>
            Email:{" "}
            {editMode ? (
              <input
                type="email"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            ) : (
              email
            )}
          </p>
          <p>
            Số điện thoại:{" "}
            {editMode ? (
              <input
                type="text"
                value={formData.phone || ""}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            ) : (
              phone
            )}
          </p>
        </div>
        {isEditable && !editMode && (
          <button onClick={handleEditClick} className={cx("connect-button")}>
            Sửa hồ sơ
          </button>
        )}
      </div>
      <div className={cx("profile-section")}>
        <h4>ĐIỂM MẠNH</h4>
        {editMode ? (
          <textarea
            value={formData.strengths || ""}
            onChange={(e) =>
              setFormData({ ...formData, strengths: e.target.value })
            }
          />
        ) : (
          <p>{strengths || "Chưa có thông tin"}</p>
        )}
      </div>
      <div className={cx("profile-section")}>
        <h4>ĐIỂM YẾU</h4>
        {editMode ? (
          <textarea
            value={formData.weaknesses || ""}
            onChange={(e) =>
              setFormData({ ...formData, weaknesses: e.target.value })
            }
          />
        ) : (
          <p>{weaknesses || "Chưa có thông tin"}</p>
        )}
      </div>
      <div className={cx("profile-section")}>
        <h4>MỤC TIÊU</h4>
        {editMode ? (
          <textarea
            value={formData.goals || ""}
            onChange={(e) =>
              setFormData({ ...formData, goals: e.target.value })
            }
          />
        ) : (
          <p>{goals || "Chưa có thông tin"}</p>
        )}
      </div>
      <div className={cx("profile-section")}>
        <h4>KỲ VỌNG VỀ MENTORING</h4>
        {editMode ? (
          <textarea
            value={formData.mentoring_expectations || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                mentoring_expectations: e.target.value,
              })
            }
          />
        ) : (
          <p>{mentoring_expectations || "Chưa có thông tin"}</p>
        )}
      </div>
      {isEditable && editMode && (
        <div className={cx("profile-buttons")}>
          <button onClick={handleSave} className={cx("connect-button")}>
            Lưu
          </button>
          <button
            onClick={handleCancel}
            className={cx("connect-button", "cancel")}
          >
            Hủy
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
