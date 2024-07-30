// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import './FollowersCard.css'

// // import { Followers } from '../../Data/FollowersData'
// const FollowersCard = () => {

//     const [followers, setFollowers] = useState([]);

//     useEffect(() => {
//         const fetchFollowers = async () => {
//         try {
//             const response = await axios.get("http://127.0.0.1:5000/api/matches");
//             setFollowers(response.data);
//         } catch (error) {
//             console.error("Error fetching the followers:", error);
//         }
//     };

//     fetchFollowers();
//   }, []);

//   const displayedNames = new Set();

//   return (
//     <div className="FollowersCard">
//         <h3>Gợi ý mentor cho bạn</h3>

//         {followers.map((follower, id)=>{
//             if (!displayedNames.has(follower.name)) {
//                 displayedNames.add(follower.name);
//                 return(
//                     <div className="follower">
//                         <div>
//                             <img src={follower.img} alt="" className='followerImage' />
//                             <div className="name">
//                                 {/* <span>{follower.name}</span>
//                                 <span>@{follower.username}</span> */}
//                                 <span>{follower.mentor}</span>
//                                 <span>Ngành: {follower.mentor_specialty}</span>
//                             </div>
//                         </div>
//                         <button className='button fc-button'>
//                             Follow
//                         </button>
//                     </div>
//                 )
//             } else {
//                 return null;
//             }
//         })}
//     </div>
//   )
// }

// export default FollowersCard

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FollowersCard.css';
import images from '../../assets/images';

const FollowersCard = () => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/matches');
        setFollowers(response.data);
      } catch (error) {
        console.error('Error fetching the followers:', error);
      }
    };

    fetchFollowers();
  }, []);

  // Lọc ra các mentor của mentee "Bùi Xuân Lộc"
  const buiXuanLocMentors = followers.filter(follower => follower.mentee === "Bùi Xuân Lộc");

  // Loại bỏ các mentor trùng lặp
  const uniqueMentors = buiXuanLocMentors.filter((follower, index, self) =>
    index === self.findIndex((f) => (
      f.mentor === follower.mentor
    ))
  );

  return (
    <div className="FollowersCard">
      <h3>Gợi ý mentor cho bạn</h3>
      {uniqueMentors.map((mentor, id) => (
        <div className="follower" key={id}>
          <div>
            {/* <img src={mentor.img} alt="" className='followerImage' /> */}
            <img src={images.huit_logo} alt="" className='followerImage' />
            <div className="name">
              <span>{mentor.mentor}</span>
              <span>Ngành: {mentor.mentor_specialty}</span>
            </div>
          </div>
          <button className='button fc-button'>
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default FollowersCard;
