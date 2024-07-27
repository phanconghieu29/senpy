import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Contact.module.scss";
import {
    faEnvelope,
    faLocationArrow,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("contact-container")}>
                <form className={cx("contact-form")}>
                    <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Họ và Tên"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Số Điện Thoại"
                        required
                    />
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Nội Dung"
                        required
                        rows="6"
                    ></textarea>
                    <button type="submit">Gửi nội dung</button>
                </form>
                <div className={cx("contact-info")}>
                    <h3>Thông Tin Liên Hệ</h3>
                    <div className={cx("contact-info-item")}>
                        <FontAwesomeIcon icon={faLocationArrow} />
                        <p>
                            <strong>Địa Chỉ:</strong> 140 Lê Trọng Tấn, Phường
                            Tây Thạnh, Quận Tân Phú, TP.HCM
                        </p>
                    </div>
                    <div className={cx("contact-info-item")}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>
                            <strong>Email:</strong> senpy@gmail.com
                        </p>
                    </div>
                    <div className={cx("contact-info-item")}>
                        <FontAwesomeIcon icon={faPhone} />
                        <p>
                            <strong>Số điện thoại:</strong> 0123.456.789
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
