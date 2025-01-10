import classNames from "classnames/bind";

import styles from "./About.module.scss";
import images from "../../assets/images";
// import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function About() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("banner-wrapper")}>
          <img src={images.aboutBanner} alt="Banner" />
        </div>

        <div className={cx("about-wrapper")}>
          <br></br>
          <p className={cx("title")}>Tổng quan</p>
          <h4>Mentoring: Hành Trình Đồng Hành và Phát Triển</h4>
          <p>
            Mentoring là một quá trình thực hành hỗ trợ và tư vấn, nơi mà một
            người giàu kinh nghiệm (Mentor) đồng hành cùng một người ít kinh
            nghiệm hơn (Mentee) trong một khoảng thời gian nhất định. Quá trình
            này không chỉ dừng lại ở việc truyền đạt kiến thức mà còn là sự
            hướng dẫn, định hướng và hỗ trợ toàn diện để Mentee phát triển tối
            đa tiềm năng của mình.
          </p>
          <br></br>
          <h4>Vai trò của mentor</h4>
          <p>
            Mentor đóng vai trò là người cố vấn tận tâm, người định hướng sáng
            suốt và người hỗ trợ đắc lực cho Mentee. Họ chia sẻ kinh nghiệm,
            kiến thức và kỹ năng tích lũy được qua thời gian để giúp Mentee vượt
            qua những thử thách, định hình con đường phát triển, và đạt được mục
            tiêu nghề nghiệp hay học tập. Vai trò của Mentor không chỉ là cung
            cấp câu trả lời mà còn là khuyến khích tư duy độc lập và phát triển
            sự tự tin cho Mentee.
          </p>
          <br></br>
          <h4>Sứ mệnh của centee</h4>
          <p>
            Mentee là những người trẻ đầy đam mê, lý tưởng và hoài bão. Họ có
            những dự án và ước mơ cho bản thân nhưng lại thiếu kinh nghiệm và
            các nguồn lực cần thiết để hiện thực hóa những dự án đó. Thông qua
            mentoring, Mentee nhận được sự hỗ trợ, định hướng và nguồn cảm hứng
            để phát triển kỹ năng, mở rộng tầm nhìn và tiến gần hơn đến việc
            biến những ý tưởng thành hiện thực.
          </p>
          <br></br>
          <h4>Kết Nối sự thành công</h4>
          <p>
            Quá trình mentoring là cầu nối giúp hai thế hệ trao đổi và học hỏi
            lẫn nhau, góp phần xây dựng một cộng đồng tri thức vững mạnh và phát
            triển bền vững. Mentoring không chỉ giúp cá nhân thăng tiến mà còn
            đóng góp tích cực vào sự phát triển chung của xã hội.
          </p>
        </div>

        <div className={cx("card-wrapper")}>
          <div className={cx("card")}>
            <div className={cx("card-title")}>
              <p>TẦM NHÌN</p>
            </div>
            <div className={cx("card-content")}>
              <p>
                Trở thành một câu lạc bộ Mentoring hàng đầu trong các trường Đại
                học tại Việt Nam
              </p>
            </div>
            <div className={cx("card-button")}>
              {/* <Link to="/">
                <p>Xem chi tiết</p>
              </Link> */}
            </div>
          </div>
          <div className={cx("card")}>
            <div className={cx("card-title")}>
              <p>SỨ MỆNH</p>
            </div>
            <div className={cx("card-content")}>
              <p>
                Đồng hành cùng sinh viên ĐH Công Thương TP.HCM thực hiện những
                mục tiêu cao và cao hơn
              </p>
            </div>
            <div className={cx("card-button")}>
              {/* <Link to="/">
                <p>Xem chi tiết</p>
              </Link> */}
            </div>
          </div>
          <div className={cx("card")}>
            <div className={cx("card-title")}>
              <p>GIÁ TRỊ CỐT LÕI</p>
            </div>
            <div className={cx("card-content")}>
              <p>
                Hỗ trợ sinh viên trên hành trình lập nghiệp, hành động cùng sinh
                viên chinh phục thử thách, thấp sáng nghĩa cử tự hào hiệp cho đi
                và chia sẻ
              </p>
            </div>
            <div className={cx("card-button")}>
              {/* <Link to="/">
                <p>Xem chi tiết</p>
              </Link> */}
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
