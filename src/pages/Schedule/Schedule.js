// import React from "react";
// import Calendar from "./calendar/calendar";

// function Schedule() {
//   return (
//     <div>
//       <Calendar />
//     </div>
//   );
// }

// export default Schedule;

import React, { useEffect, useState } from "react";
import Calendar from "./calendar/calendar";
import axios from "axios";
import "./Schedule.css"

function Schedule() {
  const [connectionStatus, setConnectionStatus] = useState(null); // Trạng thái kết nối
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Lỗi nếu có

  useEffect(() => {
    const checkConnectionStatus = async () => {
      try {
        setLoading(true);
        setError(null);

        // Lấy role từ localStorage
        const role = localStorage.getItem("role");
        const token = localStorage.getItem("token");
        let apiUrl;

        // Chọn API dựa trên vai trò
        if (role === "mentor") {
          apiUrl = "http://localhost:2903/api/connections/mentors/status";
        } else if (role === "mentee") {
          apiUrl = "http://localhost:2903/api/connections/mentees/status";
        } else {
          setError("Vai trò của bạn không được hỗ trợ.");
          setLoading(false);
          return;
        }

        // Gọi API để lấy trạng thái kết nối
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Cập nhật trạng thái kết nối
        setConnectionStatus(response.data.connectionStatus);
      } catch (err) {
        setError("Không thể tải trạng thái kết nối. Vui lòng thử lại.");
      } finally {
        setLoading(false);
      }
    };

    checkConnectionStatus();
  }, []);

  if (loading) {
    return <p>Đang tải...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Nếu trạng thái là "connected", hiển thị Calendar
  if (connectionStatus === "connected") {
    return (
      <div>
        <Calendar />
      </div>
    );
  }

  // Nếu trạng thái không phải "connected", hiển thị thông báo
  return (
    <p className="centeredMessage">
      Bạn chưa có kết nối. Vui lòng hoàn tất kết nối trước khi sử dụng lịch.
    </p>
  );
}

export default Schedule;
