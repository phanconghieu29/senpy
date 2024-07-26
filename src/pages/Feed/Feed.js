import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import styles from "./Feed.module.scss";
import NameCard from "../../components/Card/NameCard/NameCard";

const cx = classNames.bind(styles);

const Feed = () => {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:5000/api/matches"
                );
                setMentors(response.data);
            } catch (error) {
                console.error("Error fetching mentors:", error);
            }
        };

        fetchMentors();
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={cx("container")}>
            <Slider {...settings}>
                {mentors.map((mentor, index) => (
                    <div key={index} className={cx("card-wrapper")}>
                        <NameCard {...mentor} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Feed;
