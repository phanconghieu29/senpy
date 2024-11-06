import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope, faRightFromBracket, faHome } from "@fortawesome/free-solid-svg-icons"; // Import the home icon
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import Button from "../../../Button";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Header({ isAuthenticated, setAuthenticated }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuthenticated(false);
        navigate("/");
    };

    return (
        <header className={cx("wrapper")}>
        <div className={cx("top-section")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <Link to="/">
                        <img src={images.logo} alt="Senpy" />
                    </Link>
                </div>
                <nav className={cx("nav")}>
                    <Link to="/" className={cx("nav-item")}>
                        <FontAwesomeIcon icon={faHome} style={{ fontSize: '20px' }} />
                    </Link>
                    <Link to="/about" className={cx("nav-item")}>
                        GIỚI THIỆU
                    </Link>
                    <Link to="/blog" className={cx("nav-item")}>
                        TIN TỨC
                    </Link>
                    <Link to="/mentor" className={cx("nav-item")}>
                        CỐ VẤN
                    </Link>
                </nav>
                <div className={cx("actions")}>
                    {isAuthenticated ? (
                        <>
                            <div className={cx("user")}>
                                <img
                                    src={images.logo}
                                    alt="avatar"
                                    className={cx("avatar")}
                                />
                            </div>
                            <Button
                                small
                                leftIcon={<FontAwesomeIcon icon={faRightFromBracket} />}
                                style={{ color: "white", minWidth: "1px" }}
                                onClick={handleLogout}
                            />
                        </>
                    ) : (
                        <>
                            <Link to="/dang-nhap" className={cx("button-link")}>
                                <Button primary>ĐĂNG NHẬP</Button>
                            </Link>
                            <Link to="/dang-ky" className={cx("button-link")}>
                                <Button outline style={{ color: "white" }}>ĐĂNG KÝ</Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    </header>
    
    );
}

export default Header;
