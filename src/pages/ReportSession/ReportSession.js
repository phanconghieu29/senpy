// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./ReportSession.css";
// import axios from "axios";

// const ReportSession = () => {
//   const [formData, setFormData] = useState({
//     schedule_id: "",
//     // mentor_id: "",
//     // mentee_id: "",
//     crossMentor: "",
//     meetingNumber: "",
//     resultsAchieved: "",
//     currentIssue: "",
//     mentorGuidance: "",
//     nextActions: "",
//     image: "",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [imageFile, setImageFile] = useState(null);

//   // Dùng useLocation để lấy query params từ URL
//   const location = useLocation();
//   const navigate = useNavigate(); // Sử dụng useNavigate để chuyển hướng

//   // Lấy scheduleId từ query params
//   const queryParams = new URLSearchParams(location.search);
//   const scheduleId = queryParams.get("scheduleId");

//   const fetchSchedules = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:2903/api/schedules/ordered",
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       const schedulesWithOrder = response.data.map((schedule, index) => ({
//         ...schedule,
//         meetingOrder: index + 1,
//       }));
//       console.log(schedulesWithOrder);
//     } catch (error) {
//       console.error("Có lỗi xảy ra khi lấy dữ liệu: ", error);
//       return []; // Trả về mảng rỗng nếu có lỗi
//     }
//   };

//   useEffect(() => {
//     if (scheduleId) {
//       setFormData((prevData) => ({
//         ...prevData,
//         schedule_id: scheduleId,
//       }));
//     }

//     fetchSchedules();
//   }, [scheduleId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSubmit = new FormData();
//     formDataToSubmit.append("schedule_id", formData.schedule_id);
//     // formDataToSubmit.append("mentor_id", 1); // Cập nhật ID Mentor thực tế
//     // formDataToSubmit.append("mentee_id", 1); // Cập nhật ID Mentee thực tế
//     formDataToSubmit.append("crossMentor", formData.crossMentor);
//     formDataToSubmit.append("meetingNumber", formData.meetingNumber);
//     formDataToSubmit.append("resultsAchieved", formData.resultsAchieved);
//     formDataToSubmit.append("currentIssue", formData.currentIssue);
//     formDataToSubmit.append("mentorGuidance", formData.mentorGuidance);
//     formDataToSubmit.append("nextActions", formData.nextActions);

//     if (imageFile) {
//       formDataToSubmit.append("image", imageFile);
//     }

//     try {
//       const response = await fetch("http://localhost:2903/api/reports/create", {
//         method: "POST",
//         body: formDataToSubmit,
//       });

//       const data = await response.json();
//       console.log(data);

//       if (response.ok) {
//         alert("Form đã được submit thành công.");
//         navigate("/feed"); // Chuyển hướng về trang /feed sau khi submit thành công
//       } else {
//         throw new Error("Lỗi khi gửi báo cáo");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Có lỗi xảy ra khi gửi báo cáo.");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Báo Cáo Buổi Cố Vấn</h2>
//       <form onSubmit={handleSubmit} className="report-form">
//         <div className="form-group">
//           <label>Lần gặp:</label>
//           <input
//             type="number"
//             name="meetingNumber"
//             value={formData.meetingNumber}
//             onChange={handleChange}
//             min="1"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Tên Cross Mentor:</label>
//           <input
//             type="text"
//             name="crossMentor"
//             value={formData.crossMentor}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Vấn đề lần này:</label>
//           <textarea
//             name="currentIssue"
//             value={formData.currentIssue}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Hướng dẫn của Mentor:</label>
//           <textarea
//             name="mentorGuidance"
//             value={formData.mentorGuidance}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Kết quả đạt được:</label>
//           <textarea
//             name="resultsAchieved"
//             value={formData.resultsAchieved}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Hành động sắp tới và cam kết thực hiện:</label>
//           <textarea
//             name="nextActions"
//             value={formData.nextActions}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Hình ảnh:</label>
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//           {imagePreview && (
//             <img src={imagePreview} alt="Preview" className="image-preview" />
//           )}
//         </div>
//         <button type="submit" className="submit-btn">
//           Nộp Báo Cáo
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReportSession;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ReportSession.css";
import axios from "axios";

const ReportSession = () => {
  const [formData, setFormData] = useState({
    schedule_id: "",
    crossMentor: "",
    meetingNumber: "",
    resultsAchieved: "",
    currentIssue: "",
    mentorGuidance: "",
    nextActions: "",
    image: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const scheduleId = queryParams.get("scheduleId");

  const fetchSchedules = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2903/api/schedules/ordered",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const schedules = response.data;

      const currentSchedule = schedules.find(
        (schedule) => schedule.schedule_id === parseInt(scheduleId)
      );

      console.log(currentSchedule);
      if (currentSchedule) {
        setFormData((prevData) => ({
          ...prevData,
          schedule_id: currentSchedule.schedule_id,
          meetingNumber: currentSchedule.meeting_order,
        }));
      } else {
        console.warn("Không tìm thấy lịch hẹn với ID:", scheduleId);
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi lấy dữ liệu lịch hẹn:", error);
    }
  };

  useEffect(() => {
    if (scheduleId) {
      fetchSchedules();
    }
  }, [scheduleId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("schedule_id", formData.schedule_id);
    formDataToSubmit.append("crossMentor", formData.crossMentor);
    formDataToSubmit.append("meetingNumber", formData.meetingNumber);
    formDataToSubmit.append("resultsAchieved", formData.resultsAchieved);
    formDataToSubmit.append("currentIssue", formData.currentIssue);
    formDataToSubmit.append("mentorGuidance", formData.mentorGuidance);
    formDataToSubmit.append("nextActions", formData.nextActions);

    if (imageFile) {
      formDataToSubmit.append("image", imageFile);
    }

    try {
      const response = await fetch("http://localhost:2903/api/reports/create", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (response.ok) {
        alert("Form đã được submit thành công.");
        navigate("/feed");
      } else {
        throw new Error("Lỗi khi gửi báo cáo");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Có lỗi xảy ra khi gửi báo cáo.");
    }
  };

  return (
    <div className="form-container">
      <h2>Báo Cáo Buổi Cố Vấn</h2>
      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-group">
          <label>Lần gặp:</label>
          <p className="meeting-number-display">
            Lần gặp: {formData.meetingNumber || "Đang tải..."}
          </p>
        </div>
        <div className="form-group">
          <label>Tên Cross Mentor:</label>
          <input
            type="text"
            name="crossMentor"
            value={formData.crossMentor}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Vấn đề lần này:</label>
          <textarea
            name="currentIssue"
            value={formData.currentIssue}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Hướng dẫn của Mentor:</label>
          <textarea
            name="mentorGuidance"
            value={formData.mentorGuidance}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Kết quả đạt được:</label>
          <textarea
            name="resultsAchieved"
            value={formData.resultsAchieved}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Hành động sắp tới và cam kết thực hiện:</label>
          <textarea
            name="nextActions"
            value={formData.nextActions}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Hình ảnh:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="image-preview" />
          )}
        </div>
        <button type="submit" className="submit-btn">
          Nộp Báo Cáo
        </button>
      </form>
    </div>
  );
};

export default ReportSession;
