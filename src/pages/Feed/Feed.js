import React from "react";

import PostSide from "../../components/PostSide/PostSide";
// import ProfileCard from "../../components/ProfileCard.jsx/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import "./Feed.css";
const Profile = () => {
    return (
        <div className="Feed">
            {/* <div className="blur" style={{ top: "-18%", right: "0" }}></div> */}
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
