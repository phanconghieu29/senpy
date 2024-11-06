import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RoleSelection.module.scss';  // Import file SCSS module

function RoleSelection() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/dang-ky/${role}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Đăng ký</h2>
      <button className={styles.button} onClick={() => handleSelect('mentor')}>Mentor</button>
      <button className={styles.button} onClick={() => handleSelect('mentee')}>Mentee</button>
    </div>
  );
}

export default RoleSelection;
