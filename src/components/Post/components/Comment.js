import React, { useState } from 'react';
import Reply from './Reply';

const Comment = ({ comment, index, setComments }) => {
  const [replyText, setReplyText] = useState('');
  const [isReplying, setIsReplying] = useState(false);

  // Handle reply text change
  const handleReplyChange = (e) => setReplyText(e.target.value);

  // Handle adding a reply to the comment
  const handleAddReply = () => {
    if (replyText.trim()) {
      const updatedComments = [...comment.replies, {
        text: replyText,
        user: localStorage.getItem('userName') || 'User',
        date: new Date().toLocaleString(),
      }];
      const newComments = [...comments];
      newComments[index].replies = updatedComments;
      setComments(newComments);
      setReplyText('');
      setIsReplying(false);
    }
  };

  return (
    <div className="comment">
      <span><b>{comment.user}</b>: {comment.text}</span>
      <span className="comment-date">{comment.date}</span>

      <button onClick={() => setIsReplying(!isReplying)}>Trả lời</button>

      {isReplying && (
        <div className="reply-section">
          <input
            type="text"
            value={replyText}
            onChange={handleReplyChange}
            onKeyDown={(e) => e.key === 'Enter' && handleAddReply()}
            placeholder="Nhập câu trả lời..."
          />
        </div>
      )}

      {comment.replies.length > 0 && (
        <div className="nested-replies">
          {comment.replies.map((reply, replyIndex) => (
            <Reply key={replyIndex} reply={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
