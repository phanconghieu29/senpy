import React from "react";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./MentorCard.module.scss";

const cx = classNames.bind(styles);

const img = "https://picsum.photos/130/130?image=839";
const summary = "Summary";

// const MentorCard = ({ avatar, name, expertise, summary }) => {
const MentorCard = ({ id, name, expertise, onConnect }) => {
    const navigate = useNavigate();

    const handleViewProfile = () => {
        navigate(`/mentor/${id}`);
    };

    return (
        <div className={cx("mentor-card")}>
            <div className={cx("mentor-info")}>
                <img
                    src={img}
                    alt={`${name}'s avatar`}
                    className={cx("mentor-avatar")}
                />
                <h3 className={cx("mentor-name")}>{name}</h3>
                <p className={cx("mentor-expertise")}>{expertise}</p>
            </div>
            <div className={cx("mentor-overlay")}>
                <p className={cx("mentor-summary")}>{summary}</p>
                <div className={cx("mentor-actions")}>
                    {/* <button className={cx("mentor-btn")}>Xem Hồ Sơ</button> */}
                    {/* <button className={cx("mentor-btn")}>Kết Nối</button> */}
                    <button className={cx("mentor-btn")} onClick={handleViewProfile}>
                        Xem Hồ Sơ
                    </button>
                    <button className={cx("mentor-btn")} onClick={onConnect}>
                        Kết Nối
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MentorCard;
