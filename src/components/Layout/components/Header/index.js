import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
// import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import Button from "../../../Button";
import {
    faBell,
    faEnvelope,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { Wrapper as PopperWrapper } from "../../../Popper";

const cx = classNames.bind(styles);

function Header({ isAuthenticated, setAuthenticated }) {
    const navigate = useNavigate();

    const handleLogout = () => {
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
                {/* <nav className={cx("nav")}>
                    <Link to="/" className={cx("nav-item")}>
                        Trang chủ
                    </Link>
                    <Link to="/about" className={cx("nav-item")}>
                        Giới thiệu
                    </Link>
                    <Link to="/contact" className={cx("nav-item")}>
                        Liên hệ
                    </Link>
                </nav> */}
                <nav className={cx("nav")}>
                    {isAuthenticated ? (
                        <>
                            <Link to="/feed" className={cx("nav-item")}>
                                Trang chủ
                            </Link>
                            <Link to="/groups" className={cx("nav-item")}>
                                Sự kiện
                            </Link>
                            <Link to="/mentors" className={cx("nav-item")}>
                                Cố vấn
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/" className={cx("nav-item")}>
                                Trang chủ
                            </Link>
                            <Link to="/about" className={cx("nav-item")}>
                                Giới thiệu
                            </Link>
                            <Link to="/contact" className={cx("nav-item")}>
                                Liên hệ
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
                            <Tippy
                                interactive
                                render={(attrs) => (
                                    <div className={cx("user-wrapper")}>
                                        <PopperWrapper>Hello</PopperWrapper>
                                    </div>
                                )}
                            >
                                <div className={cx("user")}>
                                    <img
                                        src={images.logo}
                                        alt="avatar"
                                        className={cx("avatar")}
                                    />
                                </div>
                            </Tippy>
                            <Button
                                small
                                leftIcon={
                                    <FontAwesomeIcon
                                        icon={faRightFromBracket}
                                    />
                                }
                                style={{ color: "white", minWidth: "1px" }}
                                onClick={handleLogout}
                            ></Button>
                        </>
                    ) : (
                        <>
                            <Link to="/dang-nhap" className={cx("button-link")}>
                                <Button primary>Đăng nhập</Button>
                            </Link>
                            <a
                                href="/senpy/Form/Formregister.html"
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
