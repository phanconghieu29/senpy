import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import Button from "../../../Button";
import {
  faBell,
  faEnvelope,
  faRightFromBracket,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Header({ isAuthenticated, setAuthenticated }) {
  const navigate = useNavigate();
  const role = localStorage.getItem("role"); // Lấy role từ localStorage

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    localStorage.removeItem("isAuthenticated");
    setAuthenticated(false);
    navigate("/");
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img src={images.logo} alt="Senpy" />
          </Link>
        </div>
        <nav className={cx("nav")}>
          {isAuthenticated ? (
            <>
              <Link to="/feed" className={cx("nav-item")}>
                <FontAwesomeIcon icon={faHome} style={{ fontSize: "20px" }} />
              </Link>
              <Link to="/about" className={cx("nav-item")}>
                Giới thiệu
              </Link>
              <Link to="/blog" className={cx("nav-item")}>
                Tin tức
              </Link>
              <Link to="/mentor" className={cx("nav-item")}>
                Cố vấn
              </Link>
              {role === "mentor" ? (
                <>
                  <Link to="/mentor-requests" className={cx("nav-item")}>
                    Kết nối Mentee
                  </Link>
                </>
              ) : (
                <Link to="/mentee-requests" className={cx("nav-item")}>
                  Kết nối Mentee
                </Link>
              )}
            </>
          ) : (
            <>
              <Link to="/" className={cx("nav-item")}>
                <FontAwesomeIcon icon={faHome} style={{ fontSize: "20px" }} />
              </Link>
              <Link to="/about" className={cx("nav-item")}>
                Giới thiệu
              </Link>
              <Link to="/contact" className={cx("nav-item")}>
                Liên hệ
              </Link>
              <Link to="/mentor" className={cx("nav-item")}>
                Cố vấn
              </Link>
            </>
          )}
        </nav>
        <div className={cx("actions")}>
          {isAuthenticated ? (
            <>
              <Link to="/schedule" className={cx("icon")}>
                <FontAwesomeIcon icon={faCalendarDays} />
              </Link>
              <Link to="/messages" className={cx("icon")}>
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
              <Link to="/notifications" className={cx("icon")}>
                <FontAwesomeIcon icon={faBell} />
              </Link>
              <div className={cx("user")}>
                <img src={images.logo} alt="avatar" className={cx("avatar")} />
              </div>
              <Button
                small
                leftIcon={<FontAwesomeIcon icon={faRightFromBracket} />}
                style={{ color: "white", minWidth: "1px" }}
                onClick={handleLogout}
              ></Button>
            </>
          ) : (
            <>
              <Link to="/dang-nhap" className={cx("button-link")}>
                <Button primary>Đăng nhập</Button>
              </Link>
              <Link to="/dang-ky" className={cx("button-link")}>
                <Button outline>Đăng ký</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
