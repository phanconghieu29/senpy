import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faVideo, faEdit } from '@fortawesome/free-solid-svg-icons';
import './Userinfo.css';
import images from '../../../../assets/images';

const Userinfo = () => {
  return (
    <div className='userInfo'>
      <div className='user'>
        <img src={images.huit_logo} alt="User profile" />
        <h2>Bui Xuan Loc</h2>
      </div>
      <div className='icons'>
        <FontAwesomeIcon icon={faEllipsisH} aria-label="More options" className='icon-more' />
        <FontAwesomeIcon icon={faVideo} aria-label="Video call" className='icon-video' />
        <FontAwesomeIcon icon={faEdit} aria-label="Edit" className='icon-edit' />
      </div>
    </div>
  );
};

export default Userinfo;
