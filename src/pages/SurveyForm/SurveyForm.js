import React, { useState } from 'react';
import './SurveyForm.css';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    mentor_id: '',
    mentee_id: '',
    quality_score: '',
    collaboration_score: '',
    effectiveness_score: '',
    comments: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;  
    setFormData((prevState) => ({
      ...prevState,  
      [name]: value, 
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Tạo đối tượng dữ liệu từ form
    const dataToSubmit = {
      mentor_id: 1,  // Mã mentor tạm thời là 1
      mentee_id: 1,  // Mã mentee tạm thời là 1
      quality_score: formData.quality_score,
      collaboration_score: formData.collaboration_score,
      effectiveness_score: formData.effectiveness_score,
      comments: formData.comments,
    };

    try {
      // Gửi dữ liệu đến API backend
      const response = await fetch('http://localhost:2903/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Gửi dữ liệu dưới dạng JSON
        },
        body: JSON.stringify(dataToSubmit),  // Gửi dữ liệu dưới dạng JSON
      });

      const data = await response.json();
      console.log('Server response:', data);

      // Kiểm tra phản hồi từ server
      if (data.success) {
        alert('Đánh giá đã được gửi thành công!');
      } else {
        alert('Đã xảy ra lỗi khi gửi đánh giá.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Có lỗi xảy ra khi gửi đánh giá.');
    }
  };

  return (
    <div className="survey-form">
      <h1 className="survey-title">KHẢO SÁT ĐÁNH GIÁ CHƯƠNG TRÌNH</h1>
      <form onSubmit={handleSubmit}>
        {/* <h2>Thông Tin Đánh Giá</h2>
        <label>
          <h3>ID Mentor:</h3>
          <input
            type="number"
            name="mentor_id"
            value={formData.mentor_id}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <h3>ID Mentee:</h3>
          <input
            type="number"
            name="mentee_id"
            value={formData.mentee_id}
            onChange={handleChange}
            required
          />
        </label> */}

        <h2>Đánh Giá Chất Lượng Cố Vấn</h2>
        <label>
          <h3>Chất lượng các buổi cố vấn:</h3>
          <select
            name="quality_score"
            value={formData.quality_score}
            onChange={handleChange}
            required
          >
            <option value="">Chọn</option>
            <option value="1">1 - Rất tệ</option>
            <option value="2">2 - Không tốt</option>
            <option value="3">3 - Trung bình</option>
            <option value="4">4 - Tốt</option>
            <option value="5">5 - Xuất sắc</option>
          </select>
        </label>
        <label>
          <h3>Mức độ hợp tác:</h3>
          <select
            name="collaboration_score"
            value={formData.collaboration_score}
            onChange={handleChange}
            required
          >
            <option value="">Chọn</option>
            <option value="1">1 - Rất kém</option>
            <option value="2">2 - Kém</option>
            <option value="3">3 - Trung bình</option>
            <option value="4">4 - Tốt</option>
            <option value="5">5 - Xuất sắc</option>
          </select>
        </label>
        <label>
          <h3>Hiệu quả của các buổi cố vấn:</h3>
          <select
            name="effectiveness_score"
            value={formData.effectiveness_score}
            onChange={handleChange}
            required
          >
            <option value="">Chọn</option>
            <option value="1">1 - Không hiệu quả</option>
            <option value="2">2 - Ít hiệu quả</option>
            <option value="3">3 - Trung bình</option>
            <option value="4">4 - Hiệu quả</option>
            <option value="5">5 - Rất hiệu quả</option>
          </select>
        </label>

        <h2>Phản Hồi Chi Tiết</h2>
        <label>
          <h3>Góp ý chi tiết của bạn:</h3>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="5"
            required
          />
        </label>

        <button type="submit">Gửi Đánh Giá</button>
      </form>
    </div>
  );
};

export default SurveyForm;
