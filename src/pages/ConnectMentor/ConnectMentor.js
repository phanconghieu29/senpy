import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ConnectMentor.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ConnectMentor() {
    const location = useLocation();
    const navigate = useNavigate();
    const { mentor } = location.state || {};
    const [reason, setReason] = useState("");

    const handleSubmit = () => {
        console.log("Lý do kết nối:", reason);
        navigate("/mentors");
    };

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>Kết nối với mentor <strong>{mentor?.name}</strong></div>
            <div className={cx('textAreaWrapper')}>
                <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Nhập lý do tại đây..."
                    className={cx('textarea')}
                />
            </div>
            <div className={cx('buttonWrapper')}>
                <button onClick={handleSubmit} className={cx('submitButton')}>
                    Gửi
                </button>
            </div>
        </div>
    );
}

export default ConnectMentor;
