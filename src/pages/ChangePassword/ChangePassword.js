import React, { useState } from 'react';
import './ChangePassword.css';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // Hàm xử lý thay đổi input
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'currentPassword') {
      setCurrentPassword(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  // Hàm kiểm tra sự khớp giữa mật khẩu mới và xác nhận mật khẩu
  const validatePasswords = () => {
    if (newPassword !== confirmPassword) {
      setMessage('Mật khẩu mới và xác nhận mật khẩu không khớp.');
      return false;
    }
    return true;
  };

  // Hàm xử lý khi submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validatePasswords()) return;

    // Giả lập việc đổi mật khẩu thành công
    setMessage('Đổi mật khẩu thành công!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  // Hàm render trường input
  const renderInputField = (label, type, name, value) => (
    <label className="input-label">
      <span className="input-label-text">{label}:</span>
      <input
        className="input-field"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </label>
  );

  return (
    <div className="change-password">
      <h2 className="change-password-header">Đổi Mật Khẩu</h2>
      <form onSubmit={handleSubmit} className="form-container">
        {renderInputField('Mật khẩu hiện tại', 'password', 'currentPassword', currentPassword)}
        {renderInputField('Mật khẩu mới', 'password', 'newPassword', newPassword)}
        {renderInputField('Xác nhận mật khẩu mới', 'password', 'confirmPassword', confirmPassword)}
        
        <button className="submit-button" type="submit">Đổi Mật Khẩu</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ChangePassword;