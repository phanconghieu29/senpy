import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import Header from "../components/Header";

const cx = classNames.bind(styles);

function ProfileLayout({ children, isAuthenticated, setAuthenticated }) {
    return (
        <div>
            <div className={cx("wrapper")}>
                <Header
                    isAuthenticated={isAuthenticated}
                    setAuthenticated={setAuthenticated}
                />
                <div className={cx("container")}>
                    <div className={cx("content")}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileLayout;
