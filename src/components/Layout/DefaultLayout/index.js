import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cx = classNames.bind(styles);

const DefaultLayout = ({ children, isAuthenticated, setAuthenticated }) => {
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
                <Footer />
            </div>
        </div>
    );
};

export default DefaultLayout;
