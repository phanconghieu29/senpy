import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Post.css";
import { FaHeart, FaRegHeart, FaCommentAlt } from "react-icons/fa";

const Post = ({ data, small, isDetailPage }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [likedBy, setLikedBy] = useState([]);
  const [showCommentInput, setShowCommentInput] = useState(false);

  const handleLike = () => {
    const userName = localStorage.getItem("userName") || "User";
    setLiked(!liked); // Toggle like status

    if (!liked) {
      // Nếu chưa like, thêm tên người dùng vào danh sách likedBy
      setLikedBy([...likedBy, userName]);
    } else {
      // Nếu đã like, loại bỏ tên người dùng khỏi danh sách likedBy
      setLikedBy(likedBy.filter((user) => user !== userName));
    }
  };

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput); // Toggle comment input visibility
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && commentText.trim()) {
      const userName = localStorage.getItem("userName") || "User";
      setComments([
        ...comments,
        {
          text: commentText,
          user: userName,
          date: new Date().toLocaleString(),
          replies: [],
        },
      ]);
      setCommentText(""); // Clear the input after comment is added
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
    updatedComments[commentIndex].isReplying =
      !updatedComments[commentIndex].isReplying;
    setComments(updatedComments);
  };

  const handleReplyChange = (e, commentIndex, replyIndex) => {
    const updatedComments = [...comments];
    if (replyIndex >= 0) {
      updatedComments[commentIndex].replies[replyIndex].replyText =
        e.target.value;
    } else {
      updatedComments[commentIndex].replyText = e.target.value;
    }
    setComments(updatedComments);
  };

  const handleAddReply = (e, commentIndex) => {
    if (e.key === "Enter" && comments[commentIndex].replyText.trim()) {
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
        replies: [], // Mảng replies con cho reply
        isReplying: false, // Đảm bảo isReplying tồn tại
      });
      updatedComments[commentIndex].replyText = ""; // Clear reply input
      setComments(updatedComments);
    }
  };

  const handleReplyToReply = (replyIndex, commentIndex) => {
    const updatedComments = [...comments];
    // Kiểm tra xem reply có tồn tại không, nếu không thì khởi tạo isReplying
    if (
      !updatedComments[commentIndex].replies[replyIndex].hasOwnProperty(
        "isReplying"
      )
    ) {
      updatedComments[commentIndex].replies[replyIndex].isReplying = false;
    }
    updatedComments[commentIndex].replies[replyIndex].isReplying =
      !updatedComments[commentIndex].replies[replyIndex].isReplying;
    setComments(updatedComments);
  };

  // const handleEditReply = (nestedIndex, commentIndex) => {
  //   const newReplyText = prompt('Sửa nội dung trả lời:', comments[commentIndex].replies[nestedIndex].text);
  //   if (newReplyText) {
  //     const updatedComments = [...comments];
  //     updatedComments[commentIndex].replies[nestedIndex].text = newReplyText;
  //     setComments(updatedComments);
  //   }
  // };

  // const handleDeleteReply = (nestedIndex, commentIndex) => {
  //   const updatedComments = [...comments];
  //   updatedComments[commentIndex].replies.splice(nestedIndex, 1); // Xóa reply tại nestedIndex
  //   setComments(updatedComments);
  // };
  const handleAddReplyToReply = (
    e,
    replyIndex,
    commentIndex,
    nestedIndex = null
  ) => {
    const replyText =
      nestedIndex !== null
        ? comments[commentIndex].replies[replyIndex].replies[nestedIndex]
            ?.replyText || ""
        : comments[commentIndex].replies[replyIndex]?.replyText || "";

    if (e.key === "Enter" && replyText.trim()) {
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
          replies: [], // Mảng replies con của reply con
        });
        updatedComments[commentIndex].replies[replyIndex].replies[
          nestedIndex
        ].replyText = "";
      } else {
        if (!updatedComments[commentIndex].replies[replyIndex].replies) {
          updatedComments[commentIndex].replies[replyIndex].replies = [];
        }

        updatedComments[commentIndex].replies[replyIndex].replies.push({
          text: replyText,
          user: userName,
          date: new Date().toLocaleString(),
          replies: [], // Mảng replies con cho reply
        });

        updatedComments[commentIndex].replies[replyIndex].replyText = ""; // Clear input
      }

      setComments(updatedComments);
    }
  };
  const handleEditReplyToReply = (nestedIndex, replyIndex, commentIndex) => {
    const newReplyText = prompt(
      "Sửa câu trả lời:",
      comments[commentIndex].replies[replyIndex].replies[nestedIndex].text
    );
    if (newReplyText) {
      const updatedComments = [...comments];
      updatedComments[commentIndex].replies[replyIndex].replies[
        nestedIndex
      ].text = newReplyText;
      setComments(updatedComments);
    }
  };
  const handleDeleteReplyToReply = (nestedIndex, replyIndex, commentIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies[replyIndex].replies.splice(
      nestedIndex,
      1
    ); // Xoá reply con
    setComments(updatedComments);
  };

  const renderReplies = (
    replies,
    commentIndex,
    replyIndex,
    isReply = false
  ) => {
    return replies.map((reply, nestedIndex) => (
      <div key={nestedIndex} className="reply">
        <span className="reply-label">@{reply.user}:</span>
        <span>
          <b>{reply.user}</b>: {reply.text}
        </span>
        <span className="reply-date">{reply.date}</span>

        {/* Nút Trả lời cho câu trả lời */}
        <button onClick={() => handleReplyToReply(nestedIndex, commentIndex)}>
          Trả lời
        </button>

        {/* Nút Sửa và Xóa cho câu trả lời */}
        <button
          onClick={() =>
            handleEditReplyToReply(nestedIndex, replyIndex, commentIndex)
          }
        >
          Sửa
        </button>
        <button
          onClick={() =>
            handleDeleteReplyToReply(nestedIndex, replyIndex, commentIndex)
          }
        >
          Xóa
        </button>

        {reply.isReplying && (
          <div className="reply-section">
            <input
              type="text"
              value={reply.replyText || ""}
              onChange={(e) =>
                handleReplyChange(e, commentIndex, replyIndex, nestedIndex)
              }
              onKeyDown={(e) =>
                handleAddReplyToReply(e, replyIndex, commentIndex, nestedIndex)
              }
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
    <div className={`Post ${small ? "smallPost" : ""}`}>
      <img src={`http://localhost:2903${data.image}`} alt="" />
      <div className="postReact">
        <span className={liked ? "liked" : "unliked"} onClick={handleLike}>
          {liked ? <FaHeart /> : <FaRegHeart />}
        </span>
        <span
          onClick={handleCommentClick}
          style={{ cursor: "pointer", fontSize: "20px", color: "gray" }}
        >
          <FaCommentAlt />
        </span>
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes} likes
      </span>
      {/* <div className="detail">
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
      </div> */}

      {/* <div className="detail">
        <p>
          <b>
            Lần gặp {data.meeting_number}/10 ngày{" "}
            {new Date(data.scheduled_time).toLocaleDateString("vi-VN")}
          </b>
        </p>
        <p>
          <b>Mentor:</b> {data.mentor_name}
        </p>
        <p>
          <b>Mentee:</b> {data.mentee_name}
        </p>
        <p>
          <b>Điểm lại kết quả đạt được:</b> <br /> {data.achieved_results}
        </p>
        <p>
          <b>Vấn đề lần này:</b> <br /> {data.current_issues}
        </p>
        <p>
          <b>Hướng dẫn của mentor:</b> <br /> {data.mentor_guidance}
        </p>
        <p>
          <b>Hành động sắp tới và cam kết thực hiện:</b> <br />
          {data.next_steps_and_commitments}
        </p>
      </div> */}

      <div className="detail">
        <p>
          <b>Lần gặp {data.meeting_number}/10 ngày </b>
          {new Date(data.scheduled_time).toLocaleDateString("vi-VN")}
        </p>
        <p>
          <b>Mentor:</b> {data.mentor_name}
        </p>
        <p>
          <b>Mentee:</b> {data.mentee_name}
        </p>
        <p>
          <b>Điểm lại kết quả đạt được:</b> <br />
          {isExpanded
            ? data.achieved_results
            : `${data.achieved_results?.substring(0, 100) || ""}...`}
        </p>
        <p>
          <b>Vấn đề lần này:</b> <br />
          {isExpanded
            ? data.current_issues
            : `${data.current_issues?.substring(0, 100) || ""}...`}
        </p>
        <p>
          <b>Hướng dẫn của mentor:</b> <br />
          {isExpanded
            ? data.mentor_guidance
            : `${data.mentor_guidance?.substring(0, 100) || ""}...`}
        </p>
        <p>
          <b>Hành động sắp tới và cam kết thực hiện:</b> <br />
          {isExpanded
            ? data.next_steps_and_commitments
            : `${data.next_steps_and_commitments?.substring(0, 100) || ""}...`}
        </p>

        {(data.achieved_results?.length > 100 ||
          data.current_issues?.length > 100 ||
          data.mentor_guidance?.length > 100 ||
          data.next_steps_and_commitments?.length > 100) && (
          <button onClick={toggleDescription} className="see-more-btn">
            {isExpanded ? "Ẩn bớt" : "Xem thêm"}
          </button>
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
            <span>
              <b>{comment.user}</b>: {comment.text}
            </span>
            <span className="comment-date">{comment.date}</span>

            <button
              onClick={() =>
                handleEditComment(index, prompt("Sửa bình luận:", comment.text))
              }
            >
              Sửa
            </button>
            <button onClick={() => handleDeleteComment(index)}>Xóa</button>
            <button onClick={() => handleReplyClick(index)}>Trả lời</button>

            {comment.isReplying && (
              <div className="reply-section">
                <input
                  type="text"
                  value={comment.replyText || ""}
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
