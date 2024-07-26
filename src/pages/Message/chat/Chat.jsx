import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faVideo, faInfoCircle, faSmile, faThumbsUp, faPaperPlane, faPlus, faImage } from '@fortawesome/free-solid-svg-icons';
import { faStickerMule } from '@fortawesome/free-brands-svg-icons';
import './Chat.css';
import EmojiPicker from 'emoji-picker-react';
import images from '../../../assets/images';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const endRef = useRef(null);


  const handleEmojiClick = (e) => {
    setText(prev => prev + e.emoji);
    setOpen(false);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // console.log(text);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src={images.huit_logo} alt="User profile" />
          <div className='texts'>
            <span>Bùi Xuân Lộc</span>
            {/* <p>Đang hoạt động</p> */}
          </div>
        </div>
        <div className='icons'>
          <FontAwesomeIcon icon={faPhone} className='phone icons' />
          <FontAwesomeIcon icon={faVideo} className='video icons' />
          <FontAwesomeIcon icon={faInfoCircle} className='info icons' />
        </div>
      </div>
      <div className='center'>
        <div className='message '>
          <img src={images.huit_logo} alt="User profile" />
          <div className='texts'>
            <p>Hôm nay của bạn như thế nào?</p>
            <span>13:10</span>
          </div>
        </div>

        <div className='message own'>
          {/* <img src={images.huit_logo} alt="User profile" /> */}
          <div className='texts'>
            <p>Khỏe anh</p>
            <span>13:10</span>
          </div>
        </div>

        <div className='message '>
          <img src={images.huit_logo} alt="User profile" />
          <div className='texts'>
            <p>Hôm nay của bạn như thế nào?</p>
            <span>13:10</span>
          </div>
        </div>
        <div ref={endRef}></div>

        <div className='message own'>
          {/* <img src={images.huit_logo} alt="User profile" /> */}
          <div className='texts'>
            <p>Hôm nay của bạn như thế nào?</p>
            <span>13:10</span>
          </div>
        </div>
        <div className='message '>
          <img src={images.huit_logo} alt="User profile" />
          <div className='texts'>
            <p>Hôm nay của bạn như thế nào?</p>
            <span>13:10</span>
          </div>
        </div>

        <div className='message own'>
          {/* <img src={images.huit_logo} alt="User profile" /> */}
          <div className='texts'>
            <p>Hôm nay của bạn như thế nào?</p>
            <span>13:10</span>
          </div>
        </div>

        <div className='message '>
          <img src={images.huit_logo} alt="User profile" />
          <div className='texts'>
            <p>Hôm nay của bạn như thế nào?</p>
            <span>13:10</span>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='icons'>
          <FontAwesomeIcon icon={faPlus} aria-label="Add icons" />
          <FontAwesomeIcon icon={faImage} aria-label="Image icons" />
          <FontAwesomeIcon icon={faStickerMule} aria-label="Sticker icons" />
        </div>
        <input 
          type="text" 
          placeholder="Aa" 
          value={text} 
          onChange={handleInputChange} 
          className='messages'
        />
        <div className='emoji'>
          <FontAwesomeIcon icon={faSmile} aria-label="smile-face" className='smile-icon icons' onClick={() => setOpen(prev => !prev)} />

          <div className='picker'>
            {open && <EmojiPicker onEmojiClick={handleEmojiClick} />}
          </div>
        </div>
        <FontAwesomeIcon 
          icon={text ? faPaperPlane : faThumbsUp} 
          aria-label={text ? "Send" : "Like"} 
          className='send-icon icons' 
        />
      </div>
    </div>
  );
};

export default Chat;
