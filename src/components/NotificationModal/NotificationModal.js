import React from "react";
import classNames from "classnames/bind";
import styles from "./NotificationModal.module.scss";

const cx = classNames.bind(styles);

const NotificationModal = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={cx("overlay")}>
      <div className={cx("modal")}>
        <div className={cx("modalContent")}>
          <p>{message}</p>
          <button onClick={onClose} className={cx("closeButton")}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
