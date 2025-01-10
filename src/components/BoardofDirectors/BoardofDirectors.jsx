import React from "react";
import ProfileCard from "../ProfileCard/Profilecard";
import classNames from "classnames/bind";
import "../AdvisoryBoard/ProfileList.css";

const cx = classNames.bind();

const BoardofDirectors = ({ profiles }) => {
  const mentorProfiles = profiles.filter(
    (profile) => profile.pos === "Ban chủ nhiệm"
  );

  const rows = [];
  for (let i = 0; i < mentorProfiles.length; i += 5) {
    rows.push(mentorProfiles.slice(i, i + 5));
  }

  return (
    <div className="profile-list">
      {rows.map((row, index) => (
        <div key={index} className="profile-row">
          {row.map((profile, idx) => (
            <ProfileCard
              key={idx}
              name={profile.name}
              title={profile.title}
              avatar={profile.avatar}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BoardofDirectors;
