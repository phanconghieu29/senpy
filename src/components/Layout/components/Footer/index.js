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
          <div className={cx("column")}>
            <div className={cx("logo")}>
              <Link to="/">
                <img src={images.logo} alt="Senpy" />
              </Link>
            </div>
          </div>
          <div className={cx("column")}>
            <h2 className={cx("title")}>SENPY - FIND YOUR MENTOR</h2>
            <nav className={cx("nav")}>
              <Link to="/" className={cx("nav-item")}>
                Trang chủ
              </Link>
              <Link to="/about" className={cx("nav-item")}>
                Giới thiệu
              </Link>
              <Link to="/blog" className={cx("nav-item")}>
                Tin tức
              </Link>
              <Link to="/contact" className={cx("nav-item")}>
                Liên hệ
              </Link>
            </nav>
          </div>
          <div className={cx("column")}>
            <h2 className={cx("title")}>LIÊN HỆ</h2>
            <div className={cx("contact-item")}>
              <FontAwesomeIcon icon={faLocationDot} className={cx("icon")} />
              <p>
                Tầng trệt nhà B (B105), 140 Lê Trọng Tấn, Phường Tây Thạnh, Quận
                Tân Phú, TP.HCM
              </p>
            </div>
            <div className={cx("contact-item")}>
              <FontAwesomeIcon icon={faPhone} className={cx("icon")} />
              <p>0963 621 124 </p>
            </div>
            <div className={cx("contact-item")}>
              <FontAwesomeIcon icon={faEnvelope} className={cx("icon")} />
              <p>hotrosinhvien@hufi.edu.vn</p>
            </div>
          </div>
        </div>
        <div className={cx("footer-bottom")}>
          <p>&copy; {new Date().getFullYear()} Senpy. Bảo lưu mọi quyền.</p>
        </div>
      </footer>
    );
}

export default Footer;
