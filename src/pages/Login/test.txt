import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import images from "../../assets/images";
import axios from "axios";

const cx = classNames.bind(styles);

function Login({ setAuthenticated }) {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:2903/api/auth/login",
        {
          email,
          password,
        }
      );

      const data = response.data;
      const user = data.user;

      if (response.status === 200) {
        setAuthenticated(true);

        // Store common information in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", user.id);
        localStorage.setItem("userName", user.name);
        localStorage.setItem("role", user.role);

        // Store specific ID based on user role
        if (user.role === "mentee") {
          localStorage.setItem("menteeId", user.additionalInfo.id);
          navigate("/feed");
          console.log("User id:" + localStorage.getItem("userId"));
          console.log("Mentee id:" + localStorage.getItem("menteeId"));
        } else if (user.role === "mentor") {
          localStorage.setItem("mentorId", user.additionalInfo.id);
          navigate("/feed");
          console.log("User id:" + localStorage.getItem("userId"));
          console.log("Mentor id:" + localStorage.getItem("mentorId"));
        } else if (user.role === "admin") {
          navigate("/dashboard");
          console.log("User id:" + localStorage.getItem("userId"));
        }
      }
    } catch (error) {
      if (error.response) {
        alert(
          error.response.data.message || "Đã xảy ra lỗi. Vui lòng thử lại."
        );
      } else {
        alert("Đã xảy ra lỗi. Vui lòng thử lại.");
      }
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
              <span className={cx("text-2")}>Let's get started</span>
            </div>
          </div>
        </div>
        <div className={cx("forms")}>
          <div className={cx("form-content")}>
            <div className={cx("login-form")}>
              <div className={cx("title")}>Đăng nhập</div>
              <form onSubmit={handleLogin}>
                <div className={cx("input-boxes")}>
                  <div className={cx("input-box")}>
                    <i className={cx("fas fa-envelope")}></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div className={cx("input-box")}>
                    <i className={cx("fas fa-lock")}></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className={cx("text")}>
                    <a href="/">Quên mật khẩu?</a>
                  </div>
                  <div className={cx("button", "input-box")}>
                    <input type="submit" value="Submit" />
                  </div>
                  <div className={cx("text", "sign-up-text")}>
                    Không có tài khoản?{" "}
                    <label htmlFor="flip">
                      <a href="/senpy/Form/Formregister.html">Quên mật khẩu?</a>
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
