import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import axios from "axios";

function Login({ setAuthenticated }) {
  const [email, setEmail] = useState("");
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

      const { user, token } = response.data;

      if (response.status === 200) {
        setAuthenticated(true);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", user.id);
        localStorage.setItem("userName", user.name);
        localStorage.setItem("role", user.role);

        if (user.role === "mentee") {
          localStorage.setItem("menteeId", user.additionalInfo.id);
          navigate("/feed");
        } else if (user.role === "mentor") {
          localStorage.setItem("mentorId", user.additionalInfo.id);
          navigate("/feed");
        } else if (user.role === "admin") {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      alert(
        error.response?.data?.message || "Đã xảy ra lỗi, vui lòng thử lại."
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.glassCard}>
        <h1 className={styles.title}>🔐 Đăng nhập</h1>
        <form onSubmit={handleLogin}>
          <div className={styles.inputBox}>
            <input
              type="email"
              placeholder="📧 Email của bạn"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="🔑 Mật khẩu"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.links}>
            <a href="/">Quên mật khẩu?</a>
          </div>
          <button type="submit" className={styles.loginButton}>
            🚀 Đăng nhập
          </button>
          <p className={styles.registerLink}>
            Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
