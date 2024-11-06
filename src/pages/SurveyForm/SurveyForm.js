import React, { useState } from 'react';
import './SurveyForm.css';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    processSatisfaction: '',
    processingTime: '',
    informationSatisfaction: '',
    mentorMatch: '',
    supportReceived: '',
    qualityExpectation: '',
    schedulingDifficulty: '',
    bdSupportSatisfaction: '',
    programUsefulness: '',
    improvementSuggestions: '',
    futureParticipation: '',
    commitment: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="survey-form">
      <h1 className='tieude'>KHẢO SÁT ĐÁNH GIÁ CHƯƠNG TRÌNH</h1>
      <h1 className='survey-title'>SENPY - FIND YOUR MENTOR</h1>
      <form onSubmit={handleSubmit}>

        <h2>1. Thông Tin Cá Nhân</h2>
        <label>
          <h3>Họ và tên:</h3>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          <h3>Email liên hệ:</h3>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          <h3>Vai trò của bạn trong chương trình:</h3>
          <div style={{ marginLeft: '70px' }}>
            <label>
              <input
                type="radio"
                name="role"
                value="mentee"
                checked={formData.role === 'mentee'}
                onChange={handleChange}
                required
              />
              Mentee
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="mentor"
                checked={formData.role === 'mentor'}
                onChange={handleChange}
                required
              />
              Mentor
            </label>
          </div>
        </label>

        <h2>2. Đánh Giá Quy Trình Kết Nối</h2>
        <label>
          <h3>Bạn có hài lòng với quy trình đăng ký và phỏng vấn để trở thành thành viên của chương trình không?</h3>
          <div style={{ marginLeft: '70px' }}>
            {['Rất hài lòng', 'Hài lòng', 'Bình thường', 'Không hài lòng', 'Rất không hài lòng'].map(option => (
              <label key={option}>
                <input
                  type="radio"
                  name="processSatisfaction"
                  value={option}
                  checked={formData.processSatisfaction === option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </label>
        <label>
          <h3>Thời gian xử lý yêu cầu kết nối của BDH có phù hợp với bạn không?</h3>
          <div style={{ marginLeft: '70px' }}>
            {['Rất nhanh chóng', 'Nhanh chóng', 'Bình thường', 'Chậm', 'Rất chậm'].map(option => (
              <label key={option}>
                <input
                  type="radio"
                  name="processingTime"
                  value={option}
                  checked={formData.processingTime === option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </label>
        <label>
          <h3>Bạn có cảm thấy BDH cung cấp đủ thông tin để bạn chuẩn bị cho quá trình kết nối không?</h3>
          <div style={{ marginLeft: '70px' }}>
            {['Có, rất đầy đủ', 'Đủ', 'Bình thường', 'Chưa đủ', 'Rất thiếu thông tin'].map(option => (
              <label key={option}>
                <input
                  type="radio"
                  name="informationSatisfaction"
                  value={option}
                  checked={formData.informationSatisfaction === option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </label>

        <h2>3. Đánh Giá Chất Lượng Kết Nối và Cố Vấn</h2>
        <label>
          <h3>Bạn có cảm thấy Mentor/Mentee được kết nối phù hợp với bạn không?</h3>
          <div style={{ marginLeft: '70px' }}>
            {['Rất phù hợp', 'Phù hợp', 'Bình thường', 'Chưa phù hợp', 'Rất không phù hợp'].map(option => (
              <label key={option}>
                <input
                  type="radio"
                  name="mentorMatch"
                  value={option}
                  checked={formData.mentorMatch === option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </label>
        <label>
          <h3>Bạn có nhận được hỗ trợ và hướng dẫn kịp thời từ Mentor/Mentee không?</h3>
          <div style={{ marginLeft: '70px' }}>
            {['Rất nhiều', 'Nhiều', 'Bình thường', 'Ít', 'Không có'].map(option => (
              <label key={option}>
                <input
                  type="radio"
                  name="supportReceived"
                  value={option}
                  checked={formData.supportReceived === option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </label>
        <label>
          <h3>Chất lượng các buổi cố vấn có đáp ứng kỳ vọng của bạn không?</h3>
          <div style={{ marginLeft: '70px' }}>
            {['Rất đáp ứng', 'Đáp ứng', 'Bình thường', 'Chưa đáp ứng', 'Hoàn toàn không đáp ứng'].map(option => (
              <label key={option}>
                <input
                  type="radio"
                  name="qualityExpectation"
                  value={option}
                  checked={formData.qualityExpectation === option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </label>
        <label>
          <h3>Bạn có gặp khó khăn gì trong việc thống nhất lịch cố vấn không?</h3>
          <div style={{ marginLeft: '70px' }}>
            {['Không gặp khó khăn', 'Một ít khó khăn', 'Khá khó khăn', 'Rất khó khăn'].map(option => (
              <label key={option}>
                <input
                  type="radio"
                  name="schedulingDifficulty"
                  value={option}
                  checked={formData.schedulingDifficulty === option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </label>

        <h2>4. Phản Hồi Sau Quá Trình Cố Vấn</h2>
        <label>
          <h3>Bạn có hài lòng với sự hỗ trợ của BDH trong quá trình cố vấn không?</h3>
          <div style={{ marginLeft: '70px' }}>
            {['Rất hài lòng', 'Hài lòng', 'Bình thường', 'Không hài lòng', 'Rất không hài lòng'].map(option => (
              <label key={option}>
                <input
                  type="radio"
                  name="bdSupportSatisfaction"
                  value={option}
                  checked={formData.bdSupportSatisfaction === option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </label>
        <label>
          <h3>Bạn có thấy chương trình SENPY giúp ích cho sự phát triển bản thân/công việc không?</h3>
          <div style={{ marginLeft: '70px' }}>
            {['Rất nhiều', 'Nhiều', 'Bình thường', 'Ít', 'Không giúp ích'].map(option => (
              <label key={option}>
                <input
                  type="radio"
                  name="programUsefulness"
                  value={option}
                  checked={formData.programUsefulness === option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </label>
        <label>
          <h3>Bạn có đề xuất gì để cải thiện chương trình trong tương lai không?</h3>
          <textarea name="improvementSuggestions" value={formData.improvementSuggestions} onChange={handleChange} />
        </label>
        <label>
          <h3>Bạn có muốn tham gia vào các chương trình tương tự trong tương lai không?</h3>
          <div style={{ marginLeft: '70px' }}>
            {['Có', 'Không'].map(option => (
              <label key={option}>
                <input
                  type="radio"
                  name="futureParticipation"
                  value={option}
                  checked={formData.futureParticipation === option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </label>
        

        <button type="submit">Gửi</button>
      </form>
    </div>
  );
};

export default SurveyForm;
