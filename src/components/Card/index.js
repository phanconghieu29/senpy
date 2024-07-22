import React from "react";
import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import images from "../../assets/images"

const cx = classNames.bind(styles);

function Card({ image, date, title }) {
    return (
        <div className={cx("card")}>
            <img src={images[image]} alt={title} className={cx("card-image")} />
            <div className={cx("card-content")}>
                <p className={cx("card-content-date")}>{date}</p>
                <h2 className={cx("card-content-title")}>{title}</h2>
            </div>
        </div>
    );
}

export default Card;
