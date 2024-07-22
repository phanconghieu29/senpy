import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import images from "../../../../assets/images";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLocationDot,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("about")}>
                    <div className={cx("title")}>
                        <div className={cx("logo")}>
                            <img src={images.logo} alt="Senpy" />
                        </div>
                    </div>
                    <div>
                        <p>Giới thiệu ngắn gọn về dự án</p>
                    </div>
                </div>
                <div className={cx("contact")}>
                    <div className={cx("title")}>Liên hệ</div>
                    <div className={cx("contact-item")}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>
                            140 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú,
                            TP.HCM
                        </p>
                    </div>
                    <div className={cx("contact-item")}>
                        <FontAwesomeIcon icon={faPhone} />
                        <p>0123.456.789</p>
                    </div>
                    <div className={cx("contact-item")}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>senpy@gmail.com</p>
                    </div>
                </div>
                <div className={cx("links")}>
                    <div className={cx("title")}>Liên kết</div>
                    <nav className={cx("nav")}>
                        <Link to="/" className={cx("nav-item")}>
                            Trang chủ
                        </Link>
                        <Link to="/About" className={cx("nav-item")}>
                            Giới thiệu
                        </Link>
                        <Link to="/contact" className={cx("nav-item")}>
                            Liên hệ
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
