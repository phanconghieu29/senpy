// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import './Post.css'
// import Comment from '../../img/comment.png'
// import Share from '../../img/share.png'
// import Heart from '../../img/like.png'
// import NotLike from '../../img/notlike.png'


// const Post = ({data, small, isDetailPage}) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleDescription = () => {
//     setIsExpanded(!isExpanded);
//   };
//   return (
//     // <div className="Post">
//     <div className={`Post ${small ? 'smallPost' : ''}`}>
//         <img src={data.img} alt="" />

//         <div className="postReact">
//             <img src={data.liked?Heart: NotLike} alt="" />
//             <img src={Comment} alt="" />
//             <img src={Share} alt="" />
//         </div>


//         <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>

//         <div className="detail">
//             <span><b>{data.name}</b></span>
//             {/* <span> {data.desc}</span> */}
//             {isExpanded ? data.desc : `${data.desc.substring(0, 100)}...`}
//             {data.desc.length > 100 && (
//           isDetailPage ? (
//             <Link to={`/post/${data.id}`} className="see-more-link">
//               {isExpanded ? 'Ẩn bớt' : 'Xem thêm'}
//             </Link>
//           ) : (
//             <button onClick={toggleDescription} className="see-more-btn">
//               {isExpanded ? 'Ẩn bớt' : 'Xem thêm'}
//             </button>
//           )
//         )}
//         </div>
//     </div>
//   )
// }

// export default Post

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import { FaHeart, FaRegHeart, FaCommentAlt } from 'react-icons/fa';

const Post = ({ data, small, isDetailPage }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(data.liked); // State to track if the post is liked
  const [commentText, setCommentText] = useState(''); // State to track comment input
  const [comments, setComments] = useState(data.comments || []); // State to store comments
  const [likedBy, setLikedBy] = useState(data.likedBy || []); // State to store the users who liked the post
  const [showCommentInput, setShowCommentInput] = useState(false); // State to control comment input visibility

  const handleLike = () => {
    const userName = localStorage.getItem("userName") || "User";
    setLiked(!liked); // Toggle like status

    if (!liked) {
      // Nếu chưa like, thêm tên người dùng vào danh sách likedBy
      setLikedBy([...likedBy, userName]);
    } else {
      // Nếu đã like, loại bỏ tên người dùng khỏi danh sách likedBy
      setLikedBy(likedBy.filter(user => user !== userName));
    }
  };

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput); // Toggle comment input visibility
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value); 
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && commentText.trim()) {
      const userName = localStorage.getItem("userName") || "User";
      setComments([...comments, { text: commentText, user: userName, date: new Date().toLocaleString(), replies: [] }]);
      setCommentText(''); // Clear the input after comment is added
      setShowCommentInput(false); 
    }
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEditComment = (index, newCommentText) => {
    const updatedComments = [...comments];
    updatedComments[index].text = newCommentText;
    setComments(updatedComments);
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const handleReplyClick = (commentIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].isReplying = !updatedComments[commentIndex].isReplying;
    setComments(updatedComments);
  };

  const handleReplyChange = (e, commentIndex, replyIndex) => {
    const updatedComments = [...comments];
    if (replyIndex >= 0) {
      updatedComments[commentIndex].replies[replyIndex].replyText = e.target.value;
    } else {
      updatedComments[commentIndex].replyText = e.target.value;
    }
    setComments(updatedComments);
  };

  const handleAddReply = (e, commentIndex) => {
    if (e.key === 'Enter' && comments[commentIndex].replyText.trim()) {
      const userName = localStorage.getItem("userName") || "User";
      const replyText = comments[commentIndex].replyText.trim();
  
      const updatedComments = [...comments];
      if (!updatedComments[commentIndex].replies) {
        updatedComments[commentIndex].replies = []; // Khởi tạo replies nếu chưa có
      }
  
      updatedComments[commentIndex].replies.push({
        text: replyText,
        user: userName,
        date: new Date().toLocaleString(),
        replies: [],  // Mảng replies con cho reply
        isReplying: false, // Đảm bảo isReplying tồn tại
      });
      updatedComments[commentIndex].replyText = ''; // Clear reply input
      setComments(updatedComments);
    }
  };
  
  const handleReplyToReply = (replyIndex, commentIndex) => {
    const updatedComments = [...comments];
    // Kiểm tra xem reply có tồn tại không, nếu không thì khởi tạo isReplying
    if (!updatedComments[commentIndex].replies[replyIndex].hasOwnProperty('isReplying')) {
      updatedComments[commentIndex].replies[replyIndex].isReplying = false;
    }
    updatedComments[commentIndex].replies[replyIndex].isReplying = !updatedComments[commentIndex].replies[replyIndex].isReplying;
    setComments(updatedComments);
  };
  
  const handleEditReply = (nestedIndex, commentIndex) => {
    const newReplyText = prompt('Sửa nội dung trả lời:', comments[commentIndex].replies[nestedIndex].text);
    if (newReplyText) {
      const updatedComments = [...comments];
      updatedComments[commentIndex].replies[nestedIndex].text = newReplyText;
      setComments(updatedComments);
    }
  };
  
  const handleDeleteReply = (nestedIndex, commentIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies.splice(nestedIndex, 1); // Xóa reply tại nestedIndex
    setComments(updatedComments);
  };
  const handleAddReplyToReply = (e, replyIndex, commentIndex, nestedIndex = null) => {
    const replyText = nestedIndex !== null 
      ? comments[commentIndex].replies[replyIndex].replies[nestedIndex]?.replyText || ''
      : comments[commentIndex].replies[replyIndex]?.replyText || '';
  
    if (e.key === 'Enter' && replyText.trim()) {
      const userName = localStorage.getItem("userName") || "User";
      const updatedComments = [...comments];
  
      // Kiểm tra nếu chưa có mảng replies con cho reply thì khởi tạo
      if (nestedIndex !== null) {
        if (!updatedComments[commentIndex].replies[replyIndex].replies) {
          updatedComments[commentIndex].replies[replyIndex].replies = [];
        }
        updatedComments[commentIndex].replies[replyIndex].replies.push({
          text: replyText,
          user: userName,
          date: new Date().toLocaleString(),
          replies: [] // Mảng replies con của reply con
        });
        updatedComments[commentIndex].replies[replyIndex].replies[nestedIndex].replyText = '';
      } else {
        if (!updatedComments[commentIndex].replies[replyIndex].replies) {
          updatedComments[commentIndex].replies[replyIndex].replies = [];
        }
  
        updatedComments[commentIndex].replies[replyIndex].replies.push({
          text: replyText,
          user: userName,
          date: new Date().toLocaleString(),
          replies: [] // Mảng replies con cho reply
        });
  
        updatedComments[commentIndex].replies[replyIndex].replyText = ''; // Clear input
      }
      
      setComments(updatedComments);
    }
  };
  const handleEditReplyToReply = (nestedIndex, replyIndex, commentIndex) => {
    const newReplyText = prompt('Sửa câu trả lời:', comments[commentIndex].replies[replyIndex].replies[nestedIndex].text);
    if (newReplyText) {
      const updatedComments = [...comments];
      updatedComments[commentIndex].replies[replyIndex].replies[nestedIndex].text = newReplyText;
      setComments(updatedComments);
    }
  };
  const handleDeleteReplyToReply = (nestedIndex, replyIndex, commentIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies[replyIndex].replies.splice(nestedIndex, 1); // Xoá reply con
    setComments(updatedComments);
  };
  
  const renderReplies = (replies, commentIndex, replyIndex, isReply = false) => {
    return replies.map((reply, nestedIndex) => (
      <div key={nestedIndex} className="reply">
        <span className="reply-label">@{reply.user}:</span>
        <span><b>{reply.user}</b>: {reply.text}</span>
        <span className="reply-date">{reply.date}</span>
  
        {/* Nút Trả lời cho câu trả lời */}
        <button onClick={() => handleReplyToReply(nestedIndex, commentIndex)}>Trả lời</button>
  
        {/* Nút Sửa và Xóa cho câu trả lời */}
        <button onClick={() => handleEditReplyToReply(nestedIndex, replyIndex, commentIndex)}>Sửa</button>
        <button onClick={() => handleDeleteReplyToReply(nestedIndex, replyIndex, commentIndex)}>Xóa</button>
  
        {reply.isReplying && (
          <div className="reply-section">
            <input
              type="text"
              value={reply.replyText || ''}
              onChange={(e) => handleReplyChange(e, commentIndex, replyIndex, nestedIndex)}
              onKeyDown={(e) => handleAddReplyToReply(e, replyIndex, commentIndex, nestedIndex)}
              placeholder="Nhập câu trả lời..."
            />
          </div>
        )}
  
        {/* Hiển thị các câu trả lời cho câu trả lời con nếu có */}
        {reply.replies && reply.replies.length > 0 && (
          <div className="replies">
            {renderReplies(reply.replies, commentIndex, replyIndex, true)}
          </div>
        )}
      </div>
    ));
  };
  
  

  return (
    <div className={`Post ${small ? 'smallPost' : ''}`}>
      <img src={data.img} alt="" />
      <div className="postReact">
        <span 
          className={liked ? 'liked' : 'unliked'} 
          onClick={handleLike} 
        >
          {liked ? <FaHeart /> : <FaRegHeart />} 
        </span>
        <span 
          onClick={handleCommentClick} 
          style={{ cursor: 'pointer', fontSize: '20px', color: 'gray' }}
        >
          <FaCommentAlt /> 
        </span>
      </div>
      <span style={{ color: "var(--gray)", fontSize: '12px' }}>{data.likes} likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        {isExpanded ? data.desc : `${data.desc.substring(0, 100)}...`}
        {data.desc.length > 100 && (
          isDetailPage ? (
            <Link to={`/post/${data.id}`} className="see-more-link">
              {isExpanded ? 'Ẩn bớt' : 'Xem thêm'}
            </Link>
          ) : (
            <button onClick={toggleDescription} className="see-more-btn">
              {isExpanded ? 'Ẩn bớt' : 'Xem thêm'}
            </button>
          )
        )}
      </div>

      {showCommentInput && (
        <div className="comment-section">
          <input
            type="text"
            value={commentText}
            onChange={handleCommentChange}
            onKeyDown={handleKeyPress} 
            placeholder="Nhập bình luận..."
          />
        </div>
      )}

      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <span><b>{comment.user}</b>: {comment.text}</span>
            <span className="comment-date">{comment.date}</span>

            <button onClick={() => handleEditComment(index, prompt('Sửa bình luận:', comment.text))}>Sửa</button>
            <button onClick={() => handleDeleteComment(index)}>Xóa</button>
            <button onClick={() => handleReplyClick(index)}>Trả lời</button>

            {comment.isReplying && (
              <div className="reply-section">
                <input
                  type="text"
                  value={comment.replyText || ''}
                  onChange={(e) => handleReplyChange(e, index)}
                  onKeyDown={(e) => handleAddReply(e, index)}
                  placeholder="Nhập câu trả lời..."
                />
              </div>
            )}

            {comment.replies && comment.replies.length > 0 && (
              <div className="replies">
                {renderReplies(comment.replies, index)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
