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
      name: "Alice",
      title: "Software Engineer",
      avatar:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73c61ed6-7677-42e3-b668-b9f09f3c6ca3/dgoq7km-2e4742a1-b49d-4629-9722-c323c6f41803.jpg/v1/fit/w_828,h_1104,q_70,strp/asian_beauty_10_by_ladyaly_dgoq7km-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcLzczYzYxZWQ2LTc2NzctNDJlMy1iNjY4LWI5ZjA5ZjNjNmNhM1wvZGdvcTdrbS0yZTQ3NDJhMS1iNDlkLTQ2MjktOTcyMi1jMzIzYzZmNDE4MDMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.T_hLC8b7JMKz_TKPQkvUOy7KRoCFR84bDSvf-sk9_N4",
      pos: "Ban cố vấn",
    },

    {
      name: "Bob",
      title: "Product Manager",
      avatar:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73c61ed6-7677-42e3-b668-b9f09f3c6ca3/dgoq7ld-5b241b53-cbde-4571-a5e0-5d67864c5ff4.jpg/v1/fill/w_894,h_894,q_70,strp/asian_beauty_8_by_ladyaly_dgoq7ld-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzczYzYxZWQ2LTc2NzctNDJlMy1iNjY4LWI5ZjA5ZjNjNmNhM1wvZGdvcTdsZC01YjI0MWI1My1jYmRlLTQ1NzEtYTVlMC01ZDY3ODY0YzVmZjQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.CN2H52H7mS2X56BKJMKPMK3-Ae2G--effFNnKQ32GKs",
      pos: "Ban chủ nhiệm",
    },
    {
      name: "Charlie",
      title: "Designer",
      avatar:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b5916d86-e468-4ec9-bc38-be17b1422503/diq7trh-fc8fde61-ee4c-4aff-9e8e-e2337f68c4dc.png/v1/fill/w_1192,h_670,q_70,strp/winter_mood_by_d0esh_diq7trh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE2MCIsInBhdGgiOiJcL2ZcL2I1OTE2ZDg2LWU0NjgtNGVjOS1iYzM4LWJlMTdiMTQyMjUwM1wvZGlxN3RyaC1mYzhmZGU2MS1lZTRjLTRhZmYtOWU4ZS1lMjMzN2Y2OGM0ZGMucG5nIiwid2lkdGgiOiI8PTM4NDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4rO31zzLGPX-w_4JHq0njttde4-5lXvYlNzCDxDpH3E",
      pos: "Ban mentor",
    },
    {
      name: "David",
      title: "QA Engineer",
      avatar:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f37e2b0c-f783-4f25-9e79-0d06eae9ad5b/difqbaq-3ebea9c3-fc6e-4b19-9dc0-c7ba4d4fd805.jpg/v1/fill/w_1054,h_758,q_70,strp/the_hoard_by_sfamag_difqbaq-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgwMCIsInBhdGgiOiJcL2ZcL2YzN2UyYjBjLWY3ODMtNGYyNS05ZTc5LTBkMDZlYWU5YWQ1YlwvZGlmcWJhcS0zZWJlYTljMy1mYzZlLTRiMTktOWRjMC1jN2JhNGQ0ZmQ4MDUuanBnIiwid2lkdGgiOiI8PTI1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yDR0OrG74hpiG8u-UYexSpJ7qPBRaQnJP4ZdeOumz8w",
      pos: "Ban mentor",
    },
    {
      name: "Eve",
      title: "DevOps",
      avatar:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f37e2b0c-f783-4f25-9e79-0d06eae9ad5b/di8wbtk-09fda961-924d-4914-9f37-dcb38f504b39.jpg/v1/fit/w_828,h_1248,q_70,strp/ediots_by_sfamag_di8wbtk-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzczNyIsInBhdGgiOiJcL2ZcL2YzN2UyYjBjLWY3ODMtNGYyNS05ZTc5LTBkMDZlYWU5YWQ1YlwvZGk4d2J0ay0wOWZkYTk2MS05MjRkLTQ5MTQtOWYzNy1kY2IzOGY1MDRiMzkuanBnIiwid2lkdGgiOiI8PTI0NzkifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gIQ4Kc2vi75lkIhOEl9CVynbjqJG4XTMkqD8k16xgMM",
      pos: "Ban mentor",
    },
    {
      name: "Frank",
      title: "UI/UX Designer",
      avatar:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73c61ed6-7677-42e3-b668-b9f09f3c6ca3/dgoq7mg-f814ef70-e11b-4d25-ab22-7a460e1d2cbe.jpg/v1/fill/w_894,h_894,q_70,strp/asian_beauty_4_by_ladyaly_dgoq7mg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzczYzYxZWQ2LTc2NzctNDJlMy1iNjY4LWI5ZjA5ZjNjNmNhM1wvZGdvcTdtZy1mODE0ZWY3MC1lMTFiLTRkMjUtYWIyMi03YTQ2MGUxZDJjYmUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.7g9qpAI7CRyLrvuaIY-pxam7-9PZgb22NJCY5GeGZQE",
      pos: "Ban mentor",
    },
    {
      name: "Grace",
      title: "Product Designer",
      avatar:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73c61ed6-7677-42e3-b668-b9f09f3c6ca3/dgoq7lo-cc17f7ee-74b3-4f8a-8d6a-f2e44414043a.jpg/v1/fill/w_894,h_894,q_70,strp/asian_beauty_7_by_ladyaly_dgoq7lo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzczYzYxZWQ2LTc2NzctNDJlMy1iNjY4LWI5ZjA5ZjNjNmNhM1wvZGdvcTdsby1jYzE3ZjdlZS03NGIzLTRmOGEtOGQ2YS1mMmU0NDQxNDA0M2EuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.7ydxCNUpdj42D5IwXUcFlP3zQEt5Wr3xzSUf5iZezw4",
      pos: "Ban mentor",
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
              <div className="profiles-page">
                <h1>Danh sách cố vấn</h1>
                <AdvisoryBoard profiles={profiles} />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("wrapper")}>
          <div className={cx("inner")}>
            <div className={cx("card-wrapper")}>
              {/* Hiển thị ProfileList */}
              <div className="profiles-page">
                <h1>Danh sách ban chủ nhiệm</h1>
                <BoardofDirectors profiles={profiles} />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("wrapper")}>
          <div className={cx("inner")}>
            <div className={cx("card-wrapper")}>
              {/* Hiển thị ProfileList */}
              <div className="profiles-page">
                <h1>Danh sách cố vấn</h1>
                <MentorBoard profiles={profiles} />
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
