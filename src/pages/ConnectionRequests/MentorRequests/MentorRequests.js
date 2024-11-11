// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function MentorStatus() {
//   const [status, setStatus] = useState(null); // Trạng thái kết nối hoặc yêu cầu
//   const [requests, setRequests] = useState([]); // Danh sách yêu cầu kết nối
//   const [mentee, setMentee] = useState(null); // Thông tin của Mentee nếu đã kết nối

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     // Lấy trạng thái kết nối và yêu cầu kết nối của Mentor
//     axios
//       .get("http://localhost:2903/api/connections/mentors/status", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         setStatus(response.data.connectionStatus);
//         if (response.data.connectionStatus === "not_connected") {
//           setRequests(response.data.requests); // Hiển thị yêu cầu nếu chưa kết nối
//         } else if (response.data.connectionStatus === "connected") {
//           setMentee(response.data.mentee); // Hiển thị thông tin Mentee nếu đã kết nối
//         }
//         console.log(response.data.connectionStatus);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   const handleApproveRequest = async (connectionId) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.patch(
//         `http://localhost:2903/api/connections/mentors/requests/${connectionId}`,
//         {
//           action: 'approve', // Gửi action là 'approve'
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       // Sau khi duyệt yêu cầu, reload lại danh sách yêu cầu
//       setRequests(requests.filter((req) => req.connection_id !== connectionId));
//     } catch (error) {
//       console.error("Lỗi khi duyệt yêu cầu:", error);
//     }
//   };

//   const handleRejectRequest = async (connectionId) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.patch(
//         `http://localhost:2903/api/connections/mentors/requests/${connectionId}`,
//         {
//           action: 'reject', // Gửi action là 'reject'
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       // Sau khi từ chối yêu cầu, reload lại danh sách yêu cầu
//       setRequests(requests.filter((req) => req.connection_id !== connectionId));
//     } catch (error) {
//       console.error("Lỗi khi từ chối yêu cầu:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Trạng Thái Kết Nối Của Mentor</h2>
//       {status === "not_connected" ? (
//         <div>
//           <h3>Danh Sách Yêu Cầu Kết Nối</h3>
//           <ul>
//             {requests.map((request) => (
//               <li key={request.connection_id}>
//                 <p>Mentee: {request.mentee_name}</p>
//                 <p>Trạng thái: {request.status}</p>
//                 <button
//                   onClick={() => handleApproveRequest(request.connection_id)}
//                 >
//                   Duyệt
//                 </button>
//                 <button
//                   onClick={() => handleRejectRequest(request.connection_id)}
//                 >
//                   Từ chối
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : status === "connected" && mentee ? (
//         <div>
//           <h3>Thông Tin Mentee Đã Kết Nối</h3>
//           <p>Tên Mentee: {mentee.name}</p>
//           <p>Chuyên Môn: {mentee.major}</p>
//           <p>Năm học: {mentee.year_in_school}</p>
//           <p>Mục tiêu: {mentee.goals}</p>
//         </div>
//       ) : (
//         <p>Đang tải...</p>
//       )}
//     </div>
//   );
// }

// export default MentorStatus;


import React, { useEffect, useState } from "react";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./MentorRequests.module.scss";

const cx = classNames.bind(styles);

function MentorRequests() {
  const [status, setStatus] = useState(null);
  const [requests, setRequests] = useState([]);
  const [mentee, setMentee] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:2903/api/connections/mentors/status", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setStatus(response.data.connectionStatus);
        if (response.data.connectionStatus === "not_connected") {
          setRequests(response.data.requests);
        } else if (response.data.connectionStatus === "connected") {
          setMentee(response.data.mentee);
        }
        console.log(response.data.connectionStatus);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleApproveRequest = async (connectionId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:2903/api/connections/mentors/requests/${connectionId}`,
        { action: "approve" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRequests(requests.filter((req) => req.connection_id !== connectionId));
    } catch (error) {
      console.error("Lỗi khi duyệt yêu cầu:", error);
    }
  };

  const handleRejectRequest = async (connectionId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:2903/api/connections/mentors/requests/${connectionId}`,
        { action: "reject" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRequests(requests.filter((req) => req.connection_id !== connectionId));
    } catch (error) {
      console.error("Lỗi khi từ chối yêu cầu:", error);
    }
  };

  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>Trạng Thái Kết Nối Của Mentor</h2>
      {status === "not_connected" ? (
        <div>
          <h3 className={cx("title")}>Danh Sách Yêu Cầu Kết Nối</h3>
          <ul className={cx("requestList")}>
            {requests.map((request) => (
              <li key={request.connection_id}>
                <p>Mentee: {request.mentee_name}</p>
                <p>Trạng thái: {request.status}</p>
                <button
                  onClick={() => handleApproveRequest(request.connection_id)}
                  className={cx("button")}
                >
                  Duyệt
                </button>
                <button
                  onClick={() => handleRejectRequest(request.connection_id)}
                  className={cx("button", "rejectButton")}
                >
                  Từ chối
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : status === "connected" && mentee ? (
        <div className={cx("menteeInfo")}>
          <h3>Thông Tin Mentee Đã Kết Nối</h3>
          <p>Tên Mentee: {mentee.name}</p>
          <p>Chuyên Môn: {mentee.major}</p>
          <p>Năm học: {mentee.year_in_school}</p>
          <p>Mục tiêu: {mentee.goals}</p>
        </div>
      ) : (
        <p>Đang tải...</p>
      )}
    </div>
  );
}

export default MentorRequests;
