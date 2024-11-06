import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./MenteeRegistration.module.scss";

const cx = classNames.bind(styles);

const MenteeRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    facebook_link: "",
    year: "",
    major: "",
    strengths: "",
    weaknesses: "",
    goals: "",
    mentoring_expectations: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:2903/api/mentees/register",
        formData
      );
      if (response.status === 200) {
        alert("Đăng ký thành công!");
        setFormData({
          name: "",
          gender: "",
          email: "",
          phone: "",
          facebook_link: "",
          year: "",
          major: "",
          strengths: "",
          weaknesses: "",
          goals: "",
          mentoring_expectations: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi đăng ký:", error);
      alert("Đăng ký không thành công. Vui lòng thử lại.");
    }
  };

  return (
    <div className={cx("form-wrapper")}>
      <h2 className={cx("form-title")}>Đăng Ký Mentee</h2>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <div className={cx("form-group")}>
          <label className={cx("label")}>Họ tên:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={cx("input")}
            required
          />
        </div>

        <div className={cx("form-group")}>
          <label className={cx("label")}>Giới tính:</label>
          <div className={cx("radio-group")}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Nam"
                onChange={handleChange}
                required
              />{" "}
              Nam
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Nữ"
                onChange={handleChange}
                required
              />{" "}
              Nữ
            </label>
          </div>
        </div>

        <div className={cx("form-group")}>
          <label className={cx("label")}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cx("input")}
            required
          />
        </div>

        <div className={cx("form-group")}>
          <label className={cx("label")}>Số điện thoại:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={cx("input")}
            required
          />
        </div>

        <div className={cx("form-group")}>
          <label className={cx("label")}>Link Facebook:</label>
          <input
            type="text"
            name="facebook_link"
            value={formData.facebook_link}
            onChange={handleChange}
            className={cx("input")}
            required
          />
        </div>

        <div className={cx("form-group")}>
          <label className={cx("label")}>Năm học:</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className={cx("select")}
            required
          >
            <option disabled value="">
              Chọn năm học của bạn
            </option>
            <option>Năm nhất</option>
            <option>Năm hai</option>
            <option>Năm ba</option>
            <option>Năm bốn</option>
            <option>Đã tốt nghiệp</option>
            <option>Khác</option>
          </select>
        </div>

        <div className={cx("form-group")}>
          <label className={cx("label")}>Ngành học:</label>
          <select
            name="major"
            value={formData.major}
            onChange={handleChange}
            className={cx("select")}
            required
          >
            <option disabled value="">
              Chọn ngành học của bạn
            </option>
            <option>Đảm bảo chất lượng và an toàn thực phẩm</option>
            <option>Công nghệ chế biến thuỷ sản</option>
            <option>Kế toán</option>
            <option>Tài chính - Ngân hàng</option>
            <option>Quản trị kinh doanh</option>
            <option>Kinh doanh quốc tế</option>
            <option>Luật kinh tế</option>
            <option>Khoa học dinh dưỡng và ẩm thực</option>
            <option>Khoa học chế biến món ăn</option>
            <option>Quản trị dịch vụ du lịch và lữ hành</option>
            <option>Quản trị nhà hàng và dịch vụ ăn uống</option>
            <option>Quản trị khách sạn</option>
            <option>Ngôn ngữ Anh</option>
            <option>Ngôn ngữ Trung Quốc</option>
            <option>Công nghệ thông tin</option>
            <option>An toàn thông tin</option>
            <option>Công nghệ chế tạo máy</option>
            <option>Công nghệ kỹ thuật điện, điện tử</option>
            <option>Công nghệ kỹ thuật cơ điện tử</option>
            <option>Công nghệ kỹ thuật điều khiển và tự động hóa</option>
            <option>Công nghệ kỹ thuật hóa học</option>
            <option>Công nghệ vật liệu</option>
            <option>Công nghệ dệt, may</option>
            <option>Công nghệ kỹ thuật môi trường</option>
            <option>Quản lý tài nguyên và môi trường</option>
            <option>Công nghệ sinh học</option>
            <option>Kinh doanh thời trang và dệt may</option>
            <option>Quản trị kinh doanh thực phẩm</option>
            <option>Marketing</option>
            <option>Kỹ thuật nhiệt</option>
            <option>Công nghệ tài chính</option>
            <option>Khoa học dữ liệu</option>
            <option>Thương mại điện tử</option>
            <option>Logistics và quản lý chuỗi cung ứng</option>
          </select>
        </div>

        <div className={cx("form-group")}>
          <label className={cx("label")}>Điểm mạnh:</label>
          <textarea
            name="strengths"
            value={formData.strengths}
            onChange={handleChange}
            className={cx("textarea")}
            required
          />
        </div>

        <div className={cx("form-group")}>
          <label className={cx("label")}>Điểm yếu:</label>
          <textarea
            name="weaknesses"
            value={formData.weaknesses}
            onChange={handleChange}
            className={cx("textarea")}
            required
          />
        </div>

        <div className={cx("form-group")}>
          <label className={cx("label")}>Mục tiêu cá nhân:</label>
          <textarea
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            className={cx("textarea")}
            required
          />
        </div>

        <div className={cx("form-group")}>
          <label className={cx("label")}>
            Mong muốn từ hoạt động mentoring:
          </label>
          <textarea
            name="mentoring_expectations"
            value={formData.mentoring_expectations}
            onChange={handleChange}
            className={cx("textarea")}
            required
          />
        </div>

        <button type="submit" className={cx("submit-button")}>
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default MenteeRegister;
