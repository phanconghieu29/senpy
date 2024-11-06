import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

import styles from "./Home.module.scss";
import Card from "../../components/Card";
import Post from "../../components/Post/Post";
import images from "../../assets/images";
import Button from "../../components/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { PostsData } from '../../Data/PostsData'

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
                <div className={cx("title")}>SENPY - FIND YOUR MENTOR</div>
                <div className={cx("description")}>
                    <p>SenPy - Find Your Mentor là một nền tảng tiên phong giúp kết nối những người đang tìm kiếm sự phát triển cá nhân và chuyên nghiệp với các mentor giàu kinh nghiệm và phù hợp nhất với nhu cầu của họ. Với sứ mệnh giúp đỡ mọi người khai phá tiềm năng và đạt được thành công, SenPy ứng dụng công nghệ phân tích cảm xúc và trí tuệ nhân tạo tiên tiến để xây dựng cầu nối giữa người học và người hướng dẫn.</p>
                    <p>Nền tảng này không chỉ đơn thuần là một công cụ tìm kiếm mà còn là một hệ sinh thái phát triển toàn diện, nơi người dùng có thể chia sẻ mục tiêu, thách thức, và mong muốn cá nhân. Qua việc phân tích cảm xúc và nhận diện phong cách học hỏi từ những chia sẻ của người dùng, SenPy cung cấp các đề xuất mentor được cá nhân hóa, phù hợp không chỉ về chuyên môn mà còn về cách tiếp cận và tính cách. Từ đó, người học sẽ cảm thấy được thấu hiểu và có một hành trình phát triển mượt mà hơn.</p>
                 <p>SenPy đặc biệt hữu ích cho các cá nhân đang tìm kiếm sự định hướng trong sự nghiệp, muốn phát triển các kỹ năng mới, hoặc đang đối mặt với những ngã rẽ quan trọng trong cuộc sống. Bất kể bạn là sinh viên, người đi làm, hay một chuyên gia đang tìm kiếm bước tiến mới, SenPy sẽ là người bạn đồng hành đáng tin cậy, giúp bạn xây dựng lộ trình phát triển cá nhân dài hạn và vượt qua các rào cản.</p>
                    <p>SenPy - Find Your Mentor không chỉ là một nền tảng mà còn là một cộng đồng học hỏi và phát triển bền vững, nơi mỗi thành viên đều được truyền cảm hứng, động lực và hỗ trợ tận tâm từ các mentor tài năng. Hãy cùng SenPy tạo ra hành trình phát triển riêng của bạn và mở ra những cánh cửa mới cho tương lai!</p>
            
                </div>

                <div className={cx("news-wrapper")}>
                    <p className={cx("title")}>TIN TỨC - SỰ KIỆN</p>
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
                
                <div className={cx("roadmap-wrapper")}>
                    <p className={cx("title")}>LỘ TRÌNH PHÁT TRIỂN</p>
                    <img src={images.roadmap} alt="Mentoring Roadmap" />
                </div>
                <div className={cx("posts-wrapper")}>
                    <p className={cx("title")}>BÀI VIẾT NỔI BẬT</p>
                    <div className={cx("posts")}>
                        {PostsData.map((post, id) => {
                            return <Post data={post} id={id} className={cx('post-item')} small isDetailPage={true}/>;
                        })}
                    </div>
                </div>
                <div className={cx("cooperation-wrapper")}>
                    <p className={cx("title")}>ĐƠN VỊ ĐỒNG HÀNH</p>
                    <div className={cx("cooperation-logos")}>
                        <img
                            src={images.huit_logo}
                            alt="Đại học Công thương Tp.HCM"
                            // style={{ marginTop: "20px" }}
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
            </div>
        </div>
    );
}

export default Home;
