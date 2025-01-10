import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
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
  const [isMenuOpen, setMenuOpen] = useState(false);
  const role = localStorage.getItem("role"); // Lấy role từ localStorage

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    localStorage.removeItem("isAuthenticated");
    setAuthenticated(false);
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
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
              <Link to="/news" className={cx("nav-item")}>
                Tin tức
              </Link>
              <Link to="/mentor" className={cx("nav-item")}>
                Cố vấn
              </Link>
              {role === "mentor" ? (
                <Link to="/mentor-requests" className={cx("nav-item")}>
                  Mentee của tôi
                </Link>
              ) : (
                <Link to="/mentee-requests" className={cx("nav-item")}>
                  Mentor của tôi
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
              <Link to="/news" className={cx("nav-item")}>
                Tin tức
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
              <Link to="/change-password" className={cx("icon")}>
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
              <Link to="/survey-form" className={cx("icon")}>
                <FontAwesomeIcon icon={faBell} />
              </Link>
              <div className={cx("user")} onClick={toggleMenu}>
                <img src={images.logo} alt="avatar" className={cx("avatar")} />
                {isMenuOpen && (
                  <div className={cx("menu")}>
                    <b className={cx("menu-item")}>
                      Xin chào {localStorage.getItem("userName")}
                    </b>
                    <Link
                      to={`/user/${localStorage.getItem("userId")}`}
                      className={cx("menu-item")}
                    >
                      Xem hồ sơ cá nhân
                    </Link>
                    <Link to="/change-password" className={cx("menu-item")}>
                      Đổi mật khẩu
                    </Link>
                    {/* <button className={cx("menu-item")} onClick={handleLogout}>
                      Đăng xuất
                    </button> */}
                    <div className={cx("divider")}></div>
                    <Link
                      to="/"
                      className={cx("menu-item")}
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </Link>
                  </div>
                )}
              </div>
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
