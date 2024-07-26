import React, { useState } from 'react';
import './Detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faSearch,faAngleDown  } from '@fortawesome/free-solid-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import {  faBellSlash, faLock, faBan, faFlag } from '@fortawesome/free-solid-svg-icons';
import { faFile, faImage, faLink } from '@fortawesome/free-solid-svg-icons';
import images from '../../../assets/images';

const Detail = () => {
  const [isChatInfoVisible, setIsChatInfoVisible] = useState(false);
  const [isMediaFileLinksVisible, setIsMediaFileLinksVisible] = useState(false);
  const [isPrivacySupportVisible, setIsPrivacySupportVisible] = useState(false);

  const handleTitleClick = (section) => {
    if (section === 'chatInfo') {
      setIsChatInfoVisible(prevState => !prevState);
    } else if (section === 'mediaFileLinks') {
      setIsMediaFileLinksVisible(prevState => !prevState);
    } else if (section === 'privacySupport') {
      setIsPrivacySupportVisible(prevState => !prevState);
    }
  };
  return (
    <div className='detail'>
      <div className='user'>
        <img src={images.huit_logo} alt="User profile" />
        <h2>Bui Xuan Loc</h2> {/* link toi trang ca nhan cua nguoi nay */}
      </div>
      <div className='info'>
        <div className='option'>
          <div className='title'>
            <FontAwesomeIcon icon={faUser} aria-label="Person" />
            <span>Trang cá nhân</span>
          </div>
          <div className='title'>
            <FontAwesomeIcon icon={faBell} aria-label="Bell" />
            <span>Tắt thông báo</span>
          </div>
          <div className='title'>
            <FontAwesomeIcon icon={faSearch} aria-label="Search" />
            <span>Tìm kiếm</span>
          </div>
        </div>
      </div>
      <div className='setting'>
        <div className='option'>
          <div className='title'onClick={() => handleTitleClick('chatInfo')}>
            <span>Thông tin đoạn chat</span>
            <FontAwesomeIcon icon={faAngleDown} aria-label="down-arrow" className='icon'/>
          </div>
            {isChatInfoVisible && (
            <div className='title'>
              <FontAwesomeIcon icon={faMapPin} aria-label="pin" className='sub-icon'/>
              <span>Xem tin nhắn đã ghim</span>
            </div>
          )}
          <div className='title'>
            <span>Tùy chỉnh đoạn chat</span>
            <FontAwesomeIcon icon={faAngleDown} aria-label="down-arrow" />
          </div>
          <div className='title' onClick={() => handleTitleClick('mediaFileLinks')}>
            <span>Phương tiện, file và liên kết</span>
            <FontAwesomeIcon icon={faAngleDown} aria-label="down-arrow" />
          </div>

          {isMediaFileLinksVisible  && (
            <div>
              <div className='title'>
                <FontAwesomeIcon icon={faImage} aria-label="image" className='sub-icon'/>
                <span>File phương tiện</span>
              </div>
              <div className='title'>
                <FontAwesomeIcon icon={faFile} aria-label="file" className='sub-icon'/>
                <span>File</span>
              </div>
              <div className='title'>
                <FontAwesomeIcon icon={faLink} aria-label="link" className='sub-icon'/>
                <span>Liên kết</span>
              </div>
            </div>
          )}
          <div className='title'onClick={() => handleTitleClick('privacySupport')}>
            <span>Quyền riêng tư và hỗ trợ</span>
            <FontAwesomeIcon icon={faAngleDown} aria-label="down-arrow" />
          </div>
          {isPrivacySupportVisible  && (
            <div>
              <div className='title'>
                <FontAwesomeIcon icon={faBellSlash} aria-label="bell-slash" className='sub-icon'/>
                <span>Tắt thông báo</span>
              </div>
              <div className='title'>
                <FontAwesomeIcon icon={faLock} aria-label="lock" className='sub-icon'/>
                <span>Hạn chế</span>
              </div>
              <div className='title'>
                <FontAwesomeIcon icon={faBan} aria-label="ban" className='sub-icon'/>
                <span>Chặn</span>
              </div>
              <div className='title'>
                <FontAwesomeIcon icon={faFlag} aria-label="flag" className='sub-icon'/>
                <span>Báo cáo</span>
                <p>Đóng góp ý kiến và báo cáo cuộc trò chuyện</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
