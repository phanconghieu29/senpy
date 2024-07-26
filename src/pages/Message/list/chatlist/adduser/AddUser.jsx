import React from 'react';
import "./AddUser.css";

const AddUser = () => {
  return (
    <div className='addUser'>
      <form>
        <input type='text' placeholder='Tên người dùng' name='username' />
        <button type='submit'>Tìm kiếm</button>
      </form>
      <div className='user'>
        <div className='detail'>
          <img src="../../assets/user.png" alt="User profile" />
          <span>Bùi Xuân Lộc</span>
        </div>
        <button>Thêm</button>
      </div>
    </div>
  )
}

export default AddUser;
