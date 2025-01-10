import React, { useEffect, useState } from "react";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./MentorRequests.module.scss";

const cx = classNames.bind(styles);

function MentorRequests() {
  const [status, setStatus] = useState(null);
  const [requests, setRequests] = useState([]);
  const [mentee, setMentee] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   axios
  //     .get("http://localhost:2903/api/connections/mentors/status", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       setStatus(response.data.connectionStatus);
  //       if (response.data.connectionStatus === "not_connected") {
  //         setRequests(response.data.requests);
  //       } else if (response.data.connectionStatus === "connected") {
  //         setMentee(response.data.mentee);
  //         console.log(mentee);
  //       }
  //       console.log(response.data.connectionStatus);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  useEffect(() => {
    const fetchMentorStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:2903/api/connections/mentors/status",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data);

        if (response.data.connectionStatus === "connected") {
          setStatus("connected");
          setMentee(response.data.mentee);
        } else {
          setStatus("not_connected");
          setRequests(response.data.requests);
        }
      } catch (error) {
        console.error("Error fetching mentee status:", error);
      }
    };

    fetchMentorStatus();
  }, []);

  // const handleApproveRequest = async (connectionId) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     await axios.patch(
  //       `http://localhost:2903/api/connections/mentors/requests/${connectionId}`,
  //       { action: "approve" },
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );
  //     setRequests(requests.filter((req) => req.connection_id !== connectionId));
  //   } catch (error) {
  //     console.error("Lỗi khi duyệt yêu cầu:", error);
  //   }
  // };

  const handleApproveRequest = async (connectionId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:2903/api/connections/mentors/requests/${connectionId}`,
        { action: "approve" },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Cập nhật trạng thái của yêu cầu trong danh sách
      setRequests((prevRequests) =>
        prevRequests.map((req) =>
          req.connection_id === connectionId
            ? { ...req, status: "Chờ BĐH" }
            : req
        )
      );
    } catch (error) {
      console.error("Lỗi khi duyệt yêu cầu:", error);
    }
  };

  // const handleRejectRequest = async (connectionId) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     await axios.patch(
  //       `http://localhost:2903/api/connections/mentors/requests/${connectionId}`,
  //       { action: "reject" },
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );
  //     setRequests(requests.filter((req) => req.connection_id !== connectionId));
  //   } catch (error) {
  //     console.error("Lỗi khi từ chối yêu cầu:", error);
  //   }
  // };

  const handleRejectRequest = async (connectionId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:2903/api/connections/mentors/requests/${connectionId}`,
        { action: "reject" },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Cập nhật trạng thái của yêu cầu trong danh sách
      setRequests((prevRequests) =>
        prevRequests.map((req) =>
          req.connection_id === connectionId
            ? { ...req, status: "Từ chối bởi Mentor" }
            : req
        )
      );
    } catch (error) {
      console.error("Lỗi khi từ chối yêu cầu:", error);
    }
  };

  return (
    <div className={cx("container")}>
      {/* <h2 className={cx("title")}>Trạng Thái Kết Nối Của Mentor</h2> */}
      {status === "not_connected" ? (
        <div>
          <h3 className={cx("title")}>Danh Sách Yêu Cầu Kết Nối</h3>
          <ul className={cx("requestList")}>
            {requests.map((request) => (
              <li key={request.connection_id}>
                <p>
                  <strong>Mentee:</strong> {request.mentee_name}
                </p>
                <p>
                  <strong>Lời nhắn:</strong> {request.introduction}
                </p>
                <p>
                  <strong>Trạng thái:</strong> {request.status}
                </p>
                <p>
                  <strong>Ngày gửi:</strong>{" "}
                  {new Date(request.request_date).toLocaleDateString()}
                </p>
                {request.status === "Chờ mentor" && (
                  <button
                    onClick={() => handleApproveRequest(request.connection_id)}
                    className={cx("button")}
                  >
                    Duyệt
                  </button>
                )}
                {(request.status === "Chờ mentor" ||
                  request.status === "Chờ BĐH") && (
                  <button
                    onClick={() => handleRejectRequest(request.connection_id)}
                    className={cx("button", "rejectButton")}
                  >
                    Từ chối
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : status === "connected" && mentee ? (
        <div className={cx("menteeInfo")}>
          <h3>Thông Tin Mentee Đã Kết Nối</h3>
          <p>Tên Mentee: {mentee.mentee_name}</p>
          <p>Chuyên Môn: {mentee.major}</p>
          <p>Mục tiêu: {mentee.goals}</p>
          <p>Diểm mạnh: {mentee.strengths}</p>
          <p>Diểm yếu: {mentee.weaknesses}</p>
        </div>
      ) : (
        <p>Đang tải...</p>
      )}
    </div>
  );
}

export default MentorRequests;
