import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ConnectMentor.module.scss";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);

function ConnectMentor() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const { mentor } = location.state || {};
  const [reason, setReason] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:2903/api/mentors/connect",
        {
          mentee_id: userId,
          mentor_id: mentor.id,
          introduction: reason,
        }
      );

      if (response.status === 201) {
        navigate("/mentor");
      }
    } catch (error) {
      console.error("Error connecting to mentor:", error);
    }
  };

  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        Kết nối với mentor <strong>{mentor?.name}</strong>
      </div>
      <div className={cx("textAreaWrapper")}>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Giới thiệu ngắn về bản thân..."
          className={cx("textarea")}
          maxLength={250}
        />
        <div className={cx("remainingCharacters")}>
          {250 - reason.length} ký tự còn lại
        </div>
      </div>
      <div className={cx("buttonWrapper")}>
        <button onClick={handleSubmit} className={cx("submitButton")}>
          Gửi
        </button>
      </div>
    </div>
  );
}

export default ConnectMentor;
