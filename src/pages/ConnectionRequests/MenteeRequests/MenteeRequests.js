// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function MenteeRequests() {
//   const [status, setStatus] = useState("");
//   const [requests, setRequests] = useState([]);
//   const [mentor, setMentor] = useState(null);

//   useEffect(() => {
//     // Gọi API để lấy danh sách yêu cầu và trạng thái kết nối
//     const fetchMenteeStatus = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Giả sử bạn lưu token trong localStorage
//         const response = await axios.get(
//           "http://localhost:2903/api/connections/mentees/status",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log(response.data);

//         // Kiểm tra trạng thái kết nối
//         if (response.data.connectionStatus === "connected") {
//           setStatus("connected");
//           setMentor(response.data.mentor); // Nếu đã có kết nối, lưu thông tin mentor
//         } else {
//           setStatus("not_connected");
//           setRequests(response.data.requests); // Nếu chưa kết nối, lưu danh sách yêu cầu
//         }
//       } catch (error) {
//         console.error("Error fetching mentee status:", error);
//       }
//     };

//     fetchMenteeStatus();
//   }, []);

//   // Hủy yêu cầu kết nối
//   const cancelRequest = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(`http://localhost:2903/api/connections/mentees/requests/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setRequests(requests.filter((req) => req.connection_id !== id));
//     } catch (error) {
//       console.error("Error canceling request:", error);
//     }
//   };

//   const renderRequests = () => {
//     return requests.map((request) => (
//       <li key={request.connection_id}>
//         <p>
//           <strong>Mentor:</strong> {request.mentor_name}
//         </p>
//         <p>
//           <strong>Trạng thái:</strong> {request.status}
//         </p>
//         <p>
//           <strong>Ngày gửi:</strong>{" "}
//           {new Date(request.request_date).toLocaleDateString()}
//         </p>
//         {request.status === "pending" && (
//           <button onClick={() => cancelRequest(request.connection_id)}>
//             Hủy Yêu Cầu
//           </button>
//         )}
//       </li>
//     ));
//   };

//   const renderMentorInfo = () => {
//     if (mentor) {
//       return (
//         <div>
//           <h3>Thông Tin Mentor</h3>
//           <p>
//             <strong>Tên:</strong> {mentor.name}
//           </p>
//           <p>
//             <strong>Chuyên môn:</strong> {mentor.expertise}
//           </p>
//           <p>
//             <strong>Mục tiêu:</strong> {mentor.goals}
//           </p>
//           <p>
//             <strong>Điểm mạnh:</strong> {mentor.strengths}
//           </p>
//           <p>
//             <strong>Điểm yếu:</strong> {mentor.weaknesses}
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div>
//       <h2>Yêu Cầu Kết Nối Đã Gửi</h2>

//       {status === "not_connected" && (
//         <div>
//           <h3>Các Yêu Cầu Kết Nối Chưa Được Phê Duyệt</h3>
//           <ul>{renderRequests()}</ul>
//         </div>
//       )}

//       {status === "connected" && renderMentorInfo()}
//     </div>
//   );
// }

// export default MenteeRequests;

import React, { useEffect, useState } from "react";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./MenteeRequests.module.scss";

const cx = classNames.bind(styles);

function MenteeRequests() {
  const [status, setStatus] = useState("");
  const [requests, setRequests] = useState([]);
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    const fetchMenteeStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:2903/api/connections/mentees/status",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data);

        if (response.data.connectionStatus === "connected") {
          setStatus("connected");
          setMentor(response.data.mentor);
        } else {
          setStatus("not_connected");
          setRequests(response.data.requests);
        }
      } catch (error) {
        console.error("Error fetching mentee status:", error);
      }
    };

    fetchMenteeStatus();
  }, []);

  const cancelRequest = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `http://localhost:2903/api/connections/mentees/requests/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRequests(requests.filter((req) => req.connection_id !== id));
    } catch (error) {
      console.error("Error canceling request:", error);
    }
  };

  const renderRequests = () => {
    return requests.map((request) => (
      <li key={request.connection_id} className={cx("requestItem")}>
        <p>
          <strong>Mentor:</strong> {request.mentor_name}
        </p>
        <p>
          <strong>Trạng thái:</strong> {request.status}
        </p>
        <p>
          <strong>Ngày gửi:</strong>{" "}
          {new Date(request.request_date).toLocaleDateString()}
        </p>
        {request.status === "pending" && (
          <button onClick={() => cancelRequest(request.connection_id)} className={cx("button")}>
            Hủy Yêu Cầu
          </button>
        )}
      </li>
    ));
  };

  const renderMentorInfo = () => {
    if (mentor) {
      return (
        <div className={cx("mentorInfo")}>
          <h3>Thông Tin Mentor</h3>
          <p>
            <strong>Tên:</strong> {mentor.name}
          </p>
          <p>
            <strong>Chuyên môn:</strong> {mentor.expertise}
          </p>
          <p>
            <strong>Mục tiêu:</strong> {mentor.goals}
          </p>
          <p>
            <strong>Điểm mạnh:</strong> {mentor.strengths}
          </p>
          <p>
            <strong>Điểm yếu:</strong> {mentor.weaknesses}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>Yêu Cầu Kết Nối Đã Gửi</h2>

      {status === "not_connected" && (
        <div>
          <h3 className={cx("title")}>Các Yêu Cầu Kết Nối Chưa Được Phê Duyệt</h3>
          <ul className={cx("requestsList")}>{renderRequests()}</ul>
        </div>
      )}

      {status === "connected" && renderMentorInfo()}
    </div>
  );
}

export default MenteeRequests;
