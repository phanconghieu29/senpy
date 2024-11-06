import React, { useState } from 'react';
import './forgotpass.css';
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Đường dẫn khôi phục mật khẩu đã được gửi đến email của bạn.");
      setTimeout(() => {
        navigate('/otp'); // Điều hướng đến trang /ptp sau khi gửi yêu cầu
      }, 2000); // Delay 2s trước khi chuyển trang
    
    } else {
      setMessage("Vui lòng nhập email.");
    }
  };

  return (
    <div className="forgot-password-container max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Quên Mật Khẩu</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập email của bạn"
          />
        </div>
        <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Gửi yêu cầu
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-green-600">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
