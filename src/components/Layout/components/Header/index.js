import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import Button from "../../../Button";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

console.log(images.logo);

function Header() {
    const isAuthenticated = false;

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <Link to="/">
                        <img src={images.logo} alt="Senpy" />
                    </Link>
                </div>
                <nav className={cx("nav")}>
                    <Link to="/" className={cx("nav-item")}>
                        Trang chủ
                    </Link>
                    <Link to="/about" className={cx("nav-item")}>
                        Giới thiệu
                    </Link>
                    <Link to="/contact" className={cx("nav-item")}>
                        Liên hệ
                    </Link>
                </nav>
                <div className={cx("actions")}>
                    {isAuthenticated ? (
                        <>
                            <Link to="/messages" className={cx("icon")}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Link>
                            <Link to="/notifications" className={cx("icon")}>
                                <FontAwesomeIcon icon={faBell} />
                            </Link>
                            <div className={cx("user")}>
                                <img
                                    src={images.logo}
                                    alt="avatar"
                                    className={cx("avatar")}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/dang-nhap" className={cx("button-link")}>
                                <Button primary>Đăng nhập</Button>
                            </Link>
                            <a
                                href="/senpy/Form/mentor.html"
                                style={{
                                    textDecoration: "none",
                                    marginLeft: "10px",
                                }}
                            >
                                <Button outline>Đăng ký</Button>
                            </a>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
