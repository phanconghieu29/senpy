import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Home.module.scss";
import Card from "../../components/Card";
import Post from "../../components/Post";
import images from "../../assets/images";
import Button from "../../components/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const newsArticles = [
    { id: 1, image: "logo", date: "12-07-2024", title: "Bài viết 1" },
    { id: 2, image: "logo512", date: "13-07-2024", title: "Bài viết 2" },
    { id: 3, image: "logo", date: "14-07-2024", title: "Bài viết 3" },
    { id: 4, image: "logo512", date: "15-07-2024", title: "Bài viết 4" },
];

const posts = [
    {
        avatar: "huit_logo",
        username: "Xuân Lộc",
        timePosted: "2 hours ago",
        content: "This is a sample post content.",
        image: "post1",
    },
    {
        avatar: "huit_logo",
        username: "Xuân Lộc",
        timePosted: "2 hours ago",
        content: "This is a sample post content.",
        image: "post2",
    },
    {
        avatar: "huit_logo",
        username: "Trần Thị Thúy Hằng",
        timePosted: "2 hours ago",
        content: "This is a sample post content.",
        image: "post3",
    },
];

function Home() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("banner-wrapper")}>
                    <img src={images.logo512} alt="Banner" />
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
                    <img src={images.partner} alt="Partner" />
                </div>
                <div className={cx("roadmap-wrapper")}>
                    <p className={cx("title")}>Lộ trình phát triển</p>
                    <img src={images.roadmap} alt="Mentoring Roadmap" />
                </div>
                <div className={cx("posts-wrapper")}>
                    <p className={cx("title")}>Bài viết nổi bật</p>
                    <div className={cx("posts")}>
                        {posts.map((post) => (
                            <div key={post.id} className={cx("post-item")}>
                                <Post
                                    avatar={post.avatar}
                                    username={post.username}
                                    timePosted={post.timePosted}
                                    content={post.content}
                                    image={post.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
