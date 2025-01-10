import React from 'react';

const Reply = ({ reply }) => {
  return (
    <div className="reply">
      <span className="reply-label">@{reply.user}:</span>
      <span>{reply.text}</span>
      <span className="reply-date">{reply.date}</span>
    </div>
  );
};

export default Reply;
