import React, { useState, useEffect } from 'react';
import { InputOtp } from 'primereact/inputotp';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import { useNavigate } from 'react-router-dom';
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 
import './OTP.css';

const InputOTP = () => {
  const [token, setToken] = useState('');
  const [countdown, setCountdown] = useState(60); 
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setDisabled(false); // Khi đồng hồ đếm ngược kết thúc, bật lại nút gửi
    }
  }, [countdown]);

  const handleResendOTP = () => {
    setCountdown(60); // Reset đồng hồ đếm ngược khi người dùng yêu cầu lại OTP
    setDisabled(true); // Tạm thời vô hiệu hóa nút gửi
  };

  const handleSubmit = () => {
    // Thực hiện hành động khi người dùng nhấn nút Submit
    alert("OTP đã được xác nhận!");
    navigate('/dang-nhap');
  };

  return (
    <div className="otp-container max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Nhập OTP</h2>
    <div className="text-center mb-4">
      <p className="text-lg text-gray-700">Vui lòng nhập mã OTP đã gửi đến email của bạn.</p>
      <div className="otp-input-group">
        <InputOtp
          value={token}
          onChange={(e) => setToken(e.value)}
          className="otp-input"
        />
      </div>
    </div>
    <div className="countdown text-center mb-4">
      <p className="text-sm text-gray-500">Thời gian còn lại: <span className="font-bold">{countdown}s</span></p>
    </div>

    <div className="button-group">
      <button
        className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        onClick={handleResendOTP}
        disabled={disabled}
      >
        Gửi lại OTP
      </button>
      <button
        className="w-full py-3 mt-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={handleSubmit}
      >
        Xác Nhận OTP
      </button>
    </div>
  </div>
  
  );
};

export default InputOTP;