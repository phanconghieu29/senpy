// import { useEffect, useState } from "react";
// import axios from "axios";

// const MentorConnectionRequests = () => {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     // Lấy danh sách yêu cầu kết nối
//     axios
//       .get("http://localhost:2903/api/mentor-connections/requests", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => setRequests(response.data))
//       .catch((error) => console.error("Error fetching requests:", error));
//   }, []);

//   const handleStatusChange = (connectionId, status) => {
//     axios
//       .post(
//         "http://localhost:2903/api/mentor-connections/update-status",
//         { connectionId, status },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       )
//       .then(() => {
//         // Cập nhật trạng thái sau khi thành công
//         setRequests(
//           requests.map((request) =>
//             request.connection_id === connectionId
//               ? { ...request, status }
//               : request
//           )
//         );
//       })
//       .catch((error) => console.error("Error updating status:", error));
//   };

//   return (
//     <div>
//       <h2>Danh sách yêu cầu kết nối</h2>
//       <ul>
//         {requests.map((request) => (
//           <li key={request.connection_id}>
//             <div>
//               <img src={request.avatar} alt={request.mentee_name} />
//               <h3>{request.mentee_name}</h3>
//               <p>{request.introduction}</p>
//               <p>Trạng thái: {request.status}</p>
//               <button
//                 onClick={() =>
//                   handleStatusChange(request.connection_id, "approved")
//                 }
//               >
//                 Đồng ý
//               </button>
//               <button
//                 onClick={() =>
//                   handleStatusChange(request.connection_id, "rejected")
//                 }
//               >
//                 Từ chối
//               </button>
//               <button>Xem hồ sơ</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MentorConnectionRequests;

import { useEffect, useState } from "react";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./ConnectionRequests.module.scss";

const cx = classNames.bind(styles);

const MentorConnectionRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Lấy danh sách yêu cầu kết nối
    axios
      .get("http://localhost:2903/api/mentor-connections/requests", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => setRequests(response.data))
      .catch((error) => console.error("Error fetching requests:", error));
  }, []);

  const handleStatusChange = (connectionId, status) => {
    axios
      .post(
        "http://localhost:2903/api/mentor-connections/update-status",
        { connectionId, status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        // Cập nhật trạng thái sau khi thành công
        setRequests(
          requests.map((request) =>
            request.connection_id === connectionId
              ? { ...request, status }
              : request
          )
        );
      })
      .catch((error) => console.error("Error updating status:", error));
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>Danh sách yêu cầu kết nối</div>
        {requests.length === 0 ? (
          <div className={cx("no-request")}>Không có yêu cầu kết nối nào</div>
        ) : (
          <ul className={cx("request-list")}>
            {requests.map((request) => (
              <li key={request.connection_id} className={cx("request-item")}>
                <img
                  src={request.avatar}
                  alt={request.mentee_name}
                  className={cx("avatar")}
                />
                <div className={cx("mentee-info")}>
                  <div className={cx("mentee-name")}>{request.mentee_name}</div>
                  <div className={cx("mentee-intro")}>
                    {request.introduction}
                  </div>
                  <div className={cx("status")}>
                    Trạng thái: {request.status}
                  </div>
                </div>
                <div className={cx("buttons")}>
                  <button
                    className={cx("button", "accept")}
                    onClick={() =>
                      handleStatusChange(request.connection_id, "approved")
                    }
                  >
                    Đồng ý
                  </button>
                  <button
                    className={cx("button", "reject")}
                    onClick={() =>
                      handleStatusChange(request.connection_id, "rejected")
                    }
                  >
                    Từ chối
                  </button>
                  <button className={cx("button", "view-profile")}>
                    Xem hồ sơ
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MentorConnectionRequests;
