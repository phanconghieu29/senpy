import classNames from "classnames/bind";
import AdvisoryBoard from "../../components/AdvisoryBoard/AdvisoryBoard";
import MentorBoard from "../../components/MentorBoard/MentorBoard";
import BoardofDirectors from "../../components/BoardofDirectors/BoardofDirectors";
import styles from "./About.module.scss";
import images from "../../assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function About() {
  const profiles = [
    {
      name: "TS.Thái Doãn Thanh",
      title: "Phó Hiệu trưởng Nhà trường",
      avatar: "z6212253112188_cf63f35f7c4c3516c5f8dfea84a158a8.jpg",
      pos: "Ban cố vấn",
    },

    {
      name: "ThS.Hoàng Thị Thoa",
      title: "Giám đốc TT ĐMST&KN",
      avatar: "z6212253112189_5dc56e2bd490f0b035709e51758bf2c1.jpg",
      pos: "Ban cố vấn",
    },

    {
      name: "ThS. Trần Đức Thảo",
      title: "Giảng viên khoa Sinh học & Môi trường HUIT",
      avatar: "z6212367809897_af6a5eff6d8d677d9a5b9af2c42cde7f.jpg",
      pos: "Ban chủ nhiệm",
    },

    {
      name: "Bà Bùi Hồng Ngọc",
      title: "Chuyên viên TT ĐMST&KN",
      avatar: "z6212367809898_1e93722baf2641fa9c8750c7abdda842.jpg",
      pos: "Ban chủ nhiệm",
    },

    {
      name: "Ông Đặng Xuân Dương",
      title: "Chuyên viên TT TS&TT",
      avatar: "z6212367809899_27beb3fa5d50479aaa4978df1e892158.jpg",
      pos: "Ban chủ nhiệm",
    },

    {
      name: "Bà Nguyễn Thanh Phương",
      title: "Chuyên viên TT TS&TT",
      avatar: "z6212367842372_4aca3f7bf9ec6652247a712568df4583.jpg",
      pos: "Ban chủ nhiệm",
    },

    {
      name: "Ông Nguyễn Anh Tuấn",
      title: "Chuyên viên TT TS&TT",
      avatar: "z6212367842373_b99040d65b84f919935fd4ad17cea469.jpg",
      pos: "Ban chủ nhiệm",
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("banner-wrapper")}>
          <img src={images.aboutBanner} alt="Banner" />
        </div>
        <div className={cx("about-wrapper")}>
          <p className={cx("title")}>Về chúng tôi</p>
          <p>
            Sản phẩm của dự án chúng tôi là <b>SENPY - MENTOR HUB</b>, giúp cho
            các câu lạc bộ mentoring đang vận hành, những trường học đang muốn
            xây dựng và mở rộng mô hình mentoring bằng cách quản trị thông minh,
            có ứng dụng các mô hình trí tuệ nhân tạo để phục vụ cho việc tự động
            hóa thông minh, tương tác và phân tích người dùng.
          </p>
          <br></br>
          <p>
            Ngoài ra nhóm dự án còn đang phát triển ứng dụng di động để kết nối
            mentor và mentee góp phần xây dựng hệ sinh thái mentoring trong các
            trường đại học trên địa bàn thành phố Hồ Chí Minh nói riêng và nói
            rộng ra là cả nước Việt Nam nói chung, đặc biệt chú trọng các bạn
            sinh viên ở các trường đại học, cao đẳng có nhu cầu cần sự tư vấn,
            tìm giải pháp từ các mentor.
          </p>
          <br></br>
          <p>
            Sản phẩm của nhóm dự án không chỉ là một kênh kết nối thông thường,
            mà còn có thể tạo ra một mentor ảo thông minh, sử dụng công nghệ trí
            tuệ nhân tạo (AI) để tạo ra mentor ảo, giúp hướng dẫn mentee trong
            việc học ngoại ngữ (như các kỹ năng cần có trong kỳ thi IELTS). Điểm
            đặc biệt của sản phẩm nhóm dự án chúng tôi đó chính là khả năng lọc
            nội dung tiêu cực thông qua công nghệ AI, gửi cảnh báo tự động với
            các nội dung trái với tiêu chuẩn cộng đồng nhằm đảm bảo môi trường
            học tập tích cực và an toàn cho người dùng.
          </p>
          <br></br>
          <p>
            Không những thế, trong ứng dụng mentoring không chỉ kết nối mentor
            và mentee mà còn giúp mentor có thể đồng hành cùng mentee để tạo ra
            một dự án, hoặc tạo điều kiện để mentor thực tập trong một dự án có
            sẵn của mentee và hợp đồng điện tử và được lưu trữ trên nền tảng
            blockchain sử dụng chữ ký điện tử để xác thực.
          </p>
          <br></br>
          <p>
            Với mục tiêu thúc đẩy tinh thần học đi đôi với hành nên mentor có
            thể hỗ trợ mentee để cho các mentee có kinh nghiệm thực chiến thử
            sức với những gì mình học được trong khi ngồi trên ghế nhà trường,
            kết quả được ghi nhận từ phía mentor, ban điều hành có thể sử dụng
            để viết thêm vào CV của mình. Ngoài ra, chúng tôi cũng đang phát
            triển bộ tiêu chuẩn cộng đồng để đánh giá và kiểm soát nội dung đăng
            tải, nhằm tạo ra một cộng đồng học tập lành mạnh và thân thiện.
            SENPY không chỉ là một sản phẩm công nghệ, mà còn là một người bạn
            đồng hành tin cậy trong hành trình học tập của sinh viên{" "}
          </p>
        </div>
        <div className={cx("card-wrapper")}>
          <div className={cx("card")}>
            <div className={cx("card-title")}>
              <p>TẦM NHÌN & SỨ MỆNH</p>
            </div>
            <div className={cx("card-content")}>
              <p>
                Chúng tôi cam kết xây dựng một tương lai bền vững thông qua sự
                sáng tạo và đổi mới không ngừng. Sứ mệnh của chúng tôi là trở
                thành một đối tác đáng tin cậy, mang đến giá trị vượt trội cho
                khách hàng và cộng đồng.
              </p>
            </div>
            <div className={cx("card-button")}>
              <Link to="/">
                <p>Xem chi tiết</p>
              </Link>
            </div>
          </div>
          <div className={cx("card")}>
            <div className={cx("card-title")}>
              <p>ĐỘI NGŨ NHÂN SỰ</p>
            </div>
            <div className={cx("card-content")}>
              <p>
                Đội ngũ của chúng tôi gồm những chuyên gia hàng đầu trong các
                lĩnh vực khác nhau, luôn sẵn sàng đáp ứng mọi nhu cầu của khách
                hàng. Chúng tôi tự hào về sự chuyên nghiệp, sáng tạo và tinh
                thần hợp tác của mình.
              </p>
            </div>
            <div className={cx("card-button")}>
              <Link to="/">
                <p>Xem chi tiết</p>
              </Link>
            </div>
          </div>
          <div className={cx("card")}>
            <div className={cx("card-title")}>
              <p>LĨNH VỰC HOẠT ĐỘNG</p>
            </div>
            <div className={cx("card-content")}>
              <p>
                Chúng tôi hoạt động trong nhiều lĩnh vực bao gồm công nghệ, giáo
                dục, y tế và môi trường. Mục tiêu của chúng tôi là mang lại
                những giải pháp toàn diện và bền vững cho mọi thách thức mà xã
                hội đang phải đối mặt.
              </p>
            </div>
            <div className={cx("card-button")}>
              <Link to="/">
                <p>Xem chi tiết</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={cx("wrapper")}>
          <div className={cx("inner")}>
            <div className={cx("card-wrapper")}>
              {/* Hiển thị ProfileList */}
              <div className={cx("profiles-page")}>
                <h1>BAN CỐ VẤN</h1>
                <AdvisoryBoard profiles={profiles} />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("wrapper")}>
          <div className={cx("inner")}>
            <div className={cx("card-wrapper")}>
              {/* Hiển thị ProfileList */}
              <div className={cx("profiles-page")}>
                <h1>BAN CHỦ NHIỆM</h1>
                <BoardofDirectors profiles={profiles} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className={cx("vision-wrapper")}>
                    <p className={cx("title")}>Tầm nhìn</p>
                    <ul>
                        <li>- SENPY mong muốn trở thành người bạn đồng hành tin cậy của sinh viên trong hành trình học tập và phát triển cá nhân.</li>
                        <li>- Chúng tôi hướng đến việc xây dựng một cộng đồng mentoring đa dạng, nơi mọi người có thể học hỏi và chia sẻ kiến thức.</li>
                    </ul>
                </div>
                <div className={cx("mission-wrapper")}>
                    <p className={cx("title")}>Sứ mệnh</p>
                    <ul>
                        <li><b>- Kết nối và hỗ trợ: </b>SENPY tạo ra một môi trường kết nối thông minh giữa mentor và mentee. Chúng tôi cam kết hỗ trợ sinh viên trong việc tìm kiếm tư vấn, chia sẻ kinh nghiệm và giải pháp từ các mentor có kinh nghiệm.</li>
                        <li><b>- Bảo vệ môi trường học tập: </b>Ứng dụng lọc nội dung tiêu cực, đảm bảo môi trường học tập lành mạnh và an toàn.</li>
                    </ul>
                </div>
                <div className={cx("core-value-wrapper")}>
                    <p className={cx("title")}>Giá trị cốt lõi</p>
                    <ul>
                        <li><b>- Kết nối thông minh: </b>SENPY tạo cầu nối giữa mentor và mentee, giúp họ tương tác và học hỏi từ nhau.</li>
                        <li><b>- Học hành tích cực: </b>Chúng tôi khuyến khích mentee áp dụng kiến thức học được vào thực tế và ghi nhận kết quả từ mentor.</li>
                        <li><b>- An toàn và đáng tin cậy: </b>SENPY đảm bảo môi trường học tập lành mạnh và lọc nội dung không phù hợp.</li>
                        <li><b>- Sáng tạo và phát triển: </b>SENPY tạo ra mentor ảo thông minh và khuyến khích hợp tác trong việc tạo dự án.</li>
                    </ul>
                </div> */}
      </div>
    </div>
  );
}

export default About;
