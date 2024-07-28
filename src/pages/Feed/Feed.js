// import React, { useEffect, useState } from "react";
// import classNames from "classnames/bind";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import axios from "axios";

// import styles from "./Feed.module.scss";
// import NameCard from "../../components/Card/NameCard/NameCard";
// import Sidebar from "../../components/Layout/components/Sidebar/Sidebar";
// // import Post from "../../components/Post";

// const cx = classNames.bind(styles);

// const Feed = () => {
//     const [mentors, setMentors] = useState([]);

//     useEffect(() => {
//         const fetchMentors = async () => {
//             try {
//                 const response = await axios.get(
//                     "http://127.0.0.1:5000/api/matches"
//                 );
//                 setMentors(response.data);
//             } catch (error) {
//                 console.error("Error fetching mentors:", error);
//             }
//         };

//         fetchMentors();
//     }, []);

//     const settings = {
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     initialSlide: 1,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         // <div className={cx("feed-wrapper")}>
//         //     <Sidebar className={cx("sidebar")} />
//         //     <div className={cx("namecard-container")}>
//         //         <Slider {...settings}>
//         //             {mentors.map((mentor, index) => (
//         //                 <div key={index} className={cx("card-wrapper")}>
//         //                     <NameCard {...mentor} />
//         //                 </div>
//         //             ))}
//         //         </Slider>
//         //     </div>
//         //     <Sidebar className={cx("sidebar")} />
//         // </div>
//         <div className={cx("feed-wrapper")}>
//             <Sidebar className={cx("sidebar")} />
//             <div className={cx("main-content")}>
//                 <div className={cx("namecard-container")}>
//                     <Slider {...settings}>
//                         {mentors.map((mentor, index) => (
//                             <div key={index} className={cx("card-wrapper")}>
//                                 <NameCard {...mentor} />
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//                 <div className={cx("posts-container")}></div>
//             </div>
//             <Sidebar className={cx("sidebar")} />
//         </div>
//     );
// };

// export default Feed;

import React from "react";

import PostSide from "../../components/PostSide/PostSide";
// import ProfileCard from "../../components/ProfileCard.jsx/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import "./Feed.css";
const Profile = () => {
    return (
        <div className="App">
            <div className="blur" style={{ top: "-18%", right: "0" }}></div>
            <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
            <div className="Profile">
                <ProfileLeft />

                <div className="Profile-center">
                    {/* <ProfileCard/> */}
                    <PostSide />
                </div>

                <RightSide />
            </div>
        </div>
    );
};

export default Profile;
