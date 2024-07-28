import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

import styles from "./Home.module.scss";
import Card from "../../components/Card";
// import Post from "../../components/Post";
import images from "../../assets/images";
import Button from "../../components/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const newsArticles = [
    {
        id: 1,
        image: "event1",
        date: "12-07-2024",
        title: "Cuộc thi sinh viên công thương với ý tưởng khởi nghiệp lần IV - năm 2023",
    },
    {
        id: 2,
        image: "event2",
        date: "13-07-2024",
        title: "Cuộc thi DigiTrans Smart City - Sáng kiến xây dựng thành phố thông minh năm 2023",
    },
    {
        id: 3,
        image: "event3",
        date: "14-07-2024",
        title: "YOUPRENEUR LAUNCHPAD 2024: Đam mê khởi nghiệp và Sứ mệnh xây dựng Thành phố Thông minh tại Đại học Ngoại Thương FTU",
        url: "https://www.giaitrivanhoa.vn/2024/06/youpreneur-launchpad-2024-am-me-khoi.html",
    },
    {
        id: 4,
        image: "logo512",
        date: "15-07-2024",
        title: "SENPY - FIND YOUR MENTOR: Nền tảng giúp mentee tìm thấy mentor định mệnh của mình.",
    },
];

// const posts = [
//     {
//         avatar: "huit_logo",
//         username: "Xuân Lộc",
//         timePosted: "2 hours ago",
//         content: "This is a sample post content.",
//         image: "post1",
//     },
//     {
//         avatar: "huit_logo",
//         username: "Xuân Lộc",
//         timePosted: "2 hours ago",
//         content: "This is a sample post content.",
//         image: "post2",
//     },
//     {
//         avatar: "huit_logo",
//         username: "Trần Thị Thúy Hằng",
//         timePosted: "2 hours ago",
//         content: "This is a sample post content.",
//         image: "post3",
//     },
// ];

function Home() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("banner-wrapper")}>
                    <img src={images.homeBanner} alt="Banner" />
                </div>
                <div className={cx("news-wrapper")}>
                    <p className={cx("title")}>Tin tức - Sự kiện</p>
                    <div className={cx("news-list")}>
                        {newsArticles.map((article) => (
                            <Card
                                key={article.id}
                                image={article.image}
                                date={article.date}
                                title={article.title}
                                url={article.url}
                            />
                        ))}
                    </div>
                    <Button
                        text
                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                    >
                        Xem thêm
                    </Button>
                </div>
                <div className={cx("cooperation-wrapper")}>
                    <p className={cx("title")}>Đơn vị đồng hành</p>
                    <div className={cx("cooperation-logos")}>
                        <img
                            src={images.huit_logo}
                            alt="Đại học Công thương Tp.HCM"
                            // style={{ marginTop: "25px" }}
                            className={cx("cooperation-logo")}
                        />
                        <img
                            src={images.huit_mentoring_club}
                            alt="Đại học Công thương Tp.HCM"
                            className={cx("cooperation-logo")}
                        />
                        <img
                            src={images.ssc_logo}
                            alt="Đại học Công thương Tp.HCM"
                            className={cx("cooperation-logo")}
                        />
                    </div>
                </div>
                <div className={cx("roadmap-wrapper")}>
                    <p className={cx("title")}>Lộ trình phát triển</p>
                    <img src={images.roadmap} alt="Mentoring Roadmap" />
                </div>
                <div className={cx("posts-wrapper")}>
                    <p className={cx("title")}>Bài viết nổi bật</p>
                    <div className={cx("posts")}>
                        {/* {posts.map((post) => (
                            <div key={post.id} className={cx("post-item")}>
                                <Post
                                    avatar={post.avatar}
                                    username={post.username}
                                    timePosted={post.timePosted}
                                    content={post.content}
                                    image={post.image}
                                />
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
