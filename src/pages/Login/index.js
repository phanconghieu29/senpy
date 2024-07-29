// import React from "react";
// import classNames from "classnames/bind";

// import styles from "./Login.module.scss";
// import images from "../../assets/images"

// const cx = classNames.bind(styles);

// function Login() {
//     return (
//         <div className={cx("wrapper")}>
//             <div className={cx("container")}>
//                 <div className={cx("cover")}>
//                     <div className={cx("front")}>
//                         <img src={images.logo} alt="" />
//                     </div>
//                     <div className={cx("back")}>
//                         <div className={cx("text")}>
//                             <span className={cx("text-1")}>
//                                 Complete miles of journey <br /> with one step
//                             </span>
//                             <span className={cx("text-2")}>
//                                 Let's get started
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={cx("forms")}>
//                     <div className={cx("form-content")}>
//                         <div className={cx("login-form")}>
//                             <div className={cx("title")}>Login</div>
//                             <form action="#">
//                                 <div className={cx("input-boxes")}>
//                                     <div className={cx("input-box")}>
//                                         <i
//                                             className={cx("fas fa-envelope")}
//                                         ></i>
//                                         <input
//                                             type="text"
//                                             placeholder="Enter your email"
//                                             required
//                                         />
//                                     </div>
//                                     <div className={cx("input-box")}>
//                                         <i className={cx("fas fa-lock")}></i>
//                                         <input
//                                             type="password"
//                                             placeholder="Enter your password"
//                                             required
//                                         />
//                                     </div>
//                                     <div className={cx("text")}>
//                                         <a href="/">Forgot password?</a>
//                                     </div>
//                                     <div className={cx("button", "input-box")}>
//                                         <input type="submit" value="Submit" />
//                                     </div>
//                                     <div className={cx("text", "sign-up-text")}>
//                                         Don't have an account?{" "}
//                                         <label htmlFor="flip">
//                                             Sign up now
//                                         </label>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import images from "../../assets/images";

const cx = classNames.bind(styles);

function Login({ setAuthenticated }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "phanconghieu" && password === "123") {
            setAuthenticated(true);
            navigate("/feed");
        } else if (username === "admin" && password === "1234") {
            setAuthenticated(true);
            navigate("/dashboard");
        }
        else {
            alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("cover")}>
                    <div className={cx("front")}>
                        <img src={images.logo} alt="" />
                    </div>
                    <div className={cx("back")}>
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
                            <form onSubmit={handleLogin}>
                                <div className={cx("input-boxes")}>
                                    <div className={cx("input-box")}>
                                        <i
                                            className={cx("fas fa-envelope")}
                                        ></i>
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            required
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className={cx("input-box")}>
                                        <i className={cx("fas fa-lock")}></i>
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            required
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
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
