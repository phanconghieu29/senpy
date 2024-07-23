import React from "react";
import classNames from "classnames/bind";

import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                {/* <input type="checkbox" id="flip" /> */}
                <div className={cx("cover")}>
                    <div className={cx("front")}>
                        <img src="images/frontImg.jpg" alt="" />
                        <div className={cx("text")}>
                            <span className={cx("text-1")}>
                                Every new friend is a <br /> new adventure
                            </span>
                            <span className={cx("text-2")}>
                                Let's get connected
                            </span>
                        </div>
                    </div>
                    <div className={cx("back")}>
                        {/* <img className={cx('backImg')} src="images/backImg.jpg" alt="" /> */}
                        <div className={cx("text")}>
                            <span className={cx("text-1")}>
                                Complete miles of journey <br /> with one step
                            </span>
                            <span className={cx("text-2")}>
                                Let's get started
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx("forms")}>
                    <div className={cx("form-content")}>
                        <div className={cx("login-form")}>
                            <div className={cx("title")}>Login</div>
                            <form action="#">
                                <div className={cx("input-boxes")}>
                                    <div className={cx("input-box")}>
                                        <i
                                            className={cx("fas fa-envelope")}
                                        ></i>
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className={cx("input-box")}>
                                        <i className={cx("fas fa-lock")}></i>
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>
                                    <div className={cx("text")}>
                                        <a href="/">Forgot password?</a>
                                    </div>
                                    <div className={cx("button", "input-box")}>
                                        <input type="submit" value="Submit" />
                                    </div>
                                    <div className={cx("text", "sign-up-text")}>
                                        Don't have an account?{" "}
                                        <label htmlFor="flip">
                                            Sign up now
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
