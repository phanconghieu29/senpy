import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RoleSelection.module.scss";

function RoleSelection() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/dang-ky/${role}`);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.glassCard}>
        <h1 className={styles.title}>🌟 Chọn Vai Trò Của Bạn</h1>
        <p className={styles.subtitle}>
          Tham gia cộng đồng của chúng tôi với tư cách:
        </p>
        <div className={styles.buttonGroup}>
          <button
            className={styles.button}
            onClick={() => handleSelect("mentor")}>
            🚀 Mentor
          </button>
          <button
            className={styles.button}
            onClick={() => handleSelect("mentee")}>
            📚 Mentee
          </button>
        </div>
      </div>
    </section>
  );
}

export default RoleSelection;
