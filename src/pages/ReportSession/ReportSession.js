import React, { useState } from 'react';
import './ReportSession.css';

const ReportSession = () => {

    const [formData, setFormData] = useState({
        schedule_id: '',
        mentor_id: '',
        mentee_id: '',
        crossMentor: '',
        meetingNumber: '',
        resultsAchieved: '',
        currentIssue: '',
        mentorGuidance: '',
        nextActions: '',
        image: ''
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

    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file); // Lưu file để gửi cùng với dữ liệu
            setImagePreview(URL.createObjectURL(file)); // Hiển thị preview
        }
    };
    // const handleImageUpload = (e) => {
    //     const file = e.target.files[0];
    //     const formData = new FormData();
    //     formData.append('image', file);  // Thêm file vào formData
    
    //     fetch('http://localhost:2903/api/upload', {
    //         method: 'POST',
    //         body: formData,  // Gửi formData chứa ảnh
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('File uploaded successfully:', data);
    //     })
    //     .catch(error => {
    //         console.error('Error uploading file:', error);
    //     });
    // };
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     const formDataToSubmit = {
    //         schedule_id: 2, // Cập nhật với ID lịch thực tế
    //         mentor_id: 1,   // Cập nhật với ID Mentor thực tế
    //         mentee_id: 1,   // Cập nhật với ID Mentee thực tế
    //         crossMentor: formData.crossMentor,
    //         meetingNumber: formData.meetingNumber,
    //         resultsAchieved: formData.resultsAchieved,
    //         currentIssue: formData.currentIssue,
    //         mentorGuidance: formData.mentorGuidance,
    //         nextActions: formData.nextActions,
    //         image: imagePreview, // Bạn có thể upload ảnh hoặc lưu URL ảnh
    //     };
    
    //     try {
    //         const response = await fetch('http://localhost:2903/api/report-session/report', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formDataToSubmit),
    //         });
    
    //         const data = await response.json();
    //         console.log(data);
    //         alert('Form đã được submit thành công.');
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //         alert('Có lỗi xảy ra khi gửi báo cáo.');
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSubmit = new FormData();
        formDataToSubmit.append('schedule_id', 2);
        formDataToSubmit.append('mentor_id', 1);
        formDataToSubmit.append('mentee_id', 1);
        formDataToSubmit.append('crossMentor', formData.crossMentor);
        formDataToSubmit.append('meetingNumber', formData.meetingNumber);
        formDataToSubmit.append('resultsAchieved', formData.resultsAchieved);
        formDataToSubmit.append('currentIssue', formData.currentIssue);
        formDataToSubmit.append('mentorGuidance', formData.mentorGuidance);
        formDataToSubmit.append('nextActions', formData.nextActions);

        if (imageFile) {
            formDataToSubmit.append("image", imageFile);  // Đảm bảo rằng `imageFile` là file ảnh bạn muốn tải lên
        }

        try {
            const response = await fetch('http://localhost:2903/api/reports/create', {
                method: 'POST',
                body: formDataToSubmit,  // Gửi formData chứa tất cả dữ liệu, bao gồm ảnh
            });

            const data = await response.json();
            console.log(data);
            alert('Form đã được submit thành công.');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Có lỗi xảy ra khi gửi báo cáo.');
        }
    };
    
    return (
        <div className="form-container">
            <h2>Báo Cáo Buổi Cố Vấn</h2>
            <form onSubmit={handleSubmit} className="report-form">
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
                    <label>Tên Cross Mentor:</label>
                    <input type="text" name="crossMentor" value={formData.crossMentor} onChange={handleChange} />
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
                    <label>Kết quả đạt được:</label>
                    <textarea name="resultsAchieved" value={formData.resultsAchieved} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Hành động sắp tới và cam kết thực hiện:</label>
                    <textarea name="nextActions" value={formData.nextActions} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Hình ảnh:</label>
                    <div className="image-upload">
                        {/* <input type="file" accept="image/*" onChange={handleImageChange} /> */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
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
