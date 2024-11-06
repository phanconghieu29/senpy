import React, { useState } from 'react';
import './ReportSession.css';

const ReportSession = () => {
    const [formData, setFormData] = useState({
        scheduleId: '',
        menteeName: '',
        mentorName: '',
        crossMentor: '',
        meetingNumber: 1,
        sessionDate: '',
        resultsAchieved: '',
        currentIssue: '',
        mentorGuidance: '',
        nextActions: '',
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (imageFile) {
            console.log('File ảnh:', imageFile);
        }
        alert('Form đã được submit. Bạn có thể lưu vào database sau khi hoàn tất backend.');
    };

    return (
        <div className="form-container">
            <h2>Báo Cáo Buổi Cố Vấn</h2>
            <form onSubmit={handleSubmit} className="report-form">
                <div className="form-group">
                    <label>Tên Mentee:</label>
                    <input type="text" name="menteeName" value={formData.menteeName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Tên Mentor:</label>
                    <input type="text" name="mentorName" value={formData.mentorName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Tên Cross Mentor:</label>
                    <input type="text" name="crossMentor" value={formData.crossMentor} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Lần gặp:</label>
                    <input
                        type="number"
                        name="meetingNumber"
                        value={formData.meetingNumber}
                        onChange={handleChange}
                        min="1"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Ngày:</label>
                    <input type="date" name="sessionDate" value={formData.sessionDate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Kết quả đạt được:</label>
                    <textarea name="resultsAchieved" value={formData.resultsAchieved} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Vấn đề lần này:</label>
                    <textarea name="currentIssue" value={formData.currentIssue} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Hướng dẫn của Mentor:</label>
                    <textarea name="mentorGuidance" value={formData.mentorGuidance} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Hành động sắp tới và cam kết thực hiện:</label>
                    <textarea name="nextActions" value={formData.nextActions} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Hình ảnh:</label>
                    <div className="image-upload">
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        <button type="button" className="upload-button" onClick={() => document.querySelector('input[type=file]').click()}>Thêm Ảnh</button>
                    </div>
                    {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                </div>
                <button type="submit" className="submit-btn">Nộp Báo Cáo</button>
            </form>
        </div>
    );
};

export default ReportSession;
