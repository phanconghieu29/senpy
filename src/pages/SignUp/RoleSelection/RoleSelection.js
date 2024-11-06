import React from 'react';
import { useNavigate } from 'react-router-dom';

function RoleSelection() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/dang-ky/${role}`);
  };

  return (
    <div>
      <h2>Đăng ký</h2>
      <button onClick={() => handleSelect('mentor')}>Mentor</button>
      <button onClick={() => handleSelect('mentee')}>Mentee</button>
    </div>
  );
}

export default RoleSelection;