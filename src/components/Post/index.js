import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Post.module.scss";
import Button from "../Button";
import images from "../../assets/images";
import {
    faComment,
    faShareFromSquare,
    faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

const Post = ({ avatar, username, timePosted, content, image }) => {
    return (
        <div className={cx("post")}>
            <div className={cx("post-header")}>
                <img
                    src={images[avatar]}
                    alt={`${username}'s avatar`}
                    className={cx("post-avatar")}
                />
                <div className={cx("post-user-info")}>
                    <span className={cx("post-username")}>{username}</span>
                    <span className={cx("post-time")}>{timePosted}</span>
                </div>
            </div>
            <div className={cx("post-content")}>
                <p>{content}</p>
                {image && (
                    <img
                        src={images[image]}
                        alt="Post content"
                        className={cx("post-image")}
                    />
                )}
            </div>
            <div className={cx("post-actions")}>
                {/* <button className={cx("like-btn")}>Like</button>
                <button className={cx("comment-btn")}>Comment</button>
                <button className={cx("share-btn")}>Share</button> */}
                <Button
                    small
                    leftIcon={<FontAwesomeIcon icon={faThumbsUp} />}
                    className={cx("btn")}
                ></Button>
                <Button
                    small
                    leftIcon={<FontAwesomeIcon icon={faComment} />}
                    className={cx("btn")}
                ></Button>
                <Button
                    small
                    leftIcon={<FontAwesomeIcon icon={faShareFromSquare} />}
                    className={cx("btn")}
                ></Button>
            </div>
        </div>
    );
};

export default Post;
