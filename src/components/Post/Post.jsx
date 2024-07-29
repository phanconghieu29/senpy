import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'


const Post = ({data, small, isDetailPage}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    // <div className="Post">
    <div className={`Post ${small ? 'smallPost' : ''}`}>
        <img src={data.img} alt="" />

        <div className="postReact">
            <img src={data.liked?Heart: NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>


        <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            {/* <span> {data.desc}</span> */}
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
    </div>
  )
}

export default Post