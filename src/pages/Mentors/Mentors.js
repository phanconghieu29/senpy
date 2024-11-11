// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import classNames from "classnames/bind";
// import styles from "./Mentors.module.scss";
// import MentorCard from "../../components/Card/MentorCard/MentorCard";
// import SearchBar from "../../components/SearchBar/SearchBar";
// import NotificationModal from "../../components/NotificationModal/NotificationModal";
// import axios from "axios";

// const cx = classNames.bind(styles);

// const ITEMS_PER_PAGE = 16;

// function Mentors() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredMentors, setFilteredMentors] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const fetchMentors = async (query = "") => {
//     try {
//       const response = await axios.get(
//         "http://localhost:2903/api/mentors/get-mentors"
//       );
//       const result = response.data.filter(
//         (mentor) =>
//           mentor.name.toLowerCase().includes(query.toLowerCase()) &&
//           mentor.status === "active"
//       );
//       setFilteredMentors(result);
//     } catch (error) {
//       console.error("Lỗi khi lấy dữ liệu mentor:", error);
//     }
//   };

//   const handleSearch = () => {
//     setCurrentPage(1);
//     fetchMentors(searchQuery);
//   };

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentMentors = filteredMentors.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );

//   useEffect(() => {
//     fetchMentors();
//   }, []);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const navigate = useNavigate();

//   const handleOpenConnectPage = (mentor) => {
//     const userRole = localStorage.getItem("role");

//     if (userRole === "mentee") {
//       navigate("/connect-mentor", { state: { mentor } });
//     } else {
//       setIsModalOpen(true);
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className={cx("wrapper")}>
//       <div className={cx("search-container")}>
//         <div className={cx("title")}>
//           <span className={cx("find-your")}>FIND YOUR</span>
//           <span className={cx("mentor")}>MENTOR</span>
//         </div>
//         <SearchBar onSearch={setSearchQuery} handleSearch={handleSearch} />
//       </div>

//       <div className={cx("mentors-container")}>
//         <div className={cx("mentor-list")}>
//           {currentMentors.length > 0 ? (
//             currentMentors.map((mentor) => (
//               <MentorCard
//                 key={mentor.id}
//                 id={mentor.id}
//                 name={mentor.name}
//                 expertise={mentor.expertise}
//                 onConnect={() => handleOpenConnectPage(mentor)}
//               />
//             ))
//           ) : (
//             <p className={cx("no-results")}>Không tìm thấy mentor nào.</p>
//           )}
//         </div>
//         <div className={cx("pagination")}>
//           {Array.from(
//             { length: Math.ceil(filteredMentors.length / ITEMS_PER_PAGE) },
//             (_, i) => (
//               <button
//                 key={i}
//                 onClick={() => handlePageChange(i + 1)}
//                 className={cx({ active: i + 1 === currentPage })}
//               >
//                 {i + 1}
//               </button>
//             )
//           )}
//         </div>
//       </div>

//       <NotificationModal
//         message="Đăng ký trở thành Mentee ngay để được kết nối với Mentor."
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//       />
//     </div>
//   );
// }

// export default Mentors;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Mentors.module.scss";
import MentorCard from "../../components/Card/MentorCard/MentorCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotificationModal from "../../components/NotificationModal/NotificationModal";
import axios from "axios";

const cx = classNames.bind(styles);

const ITEMS_PER_PAGE = 16;

function Mentors() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [expertise, setExpertise] = useState("");
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchMentors = async (query = "", selectedExpertise = "") => {
    try {
      const response = await axios.get(
        "http://localhost:2903/api/mentors/get-mentors"
      );
      const result = response.data.filter(
        (mentor) =>
          mentor.name.toLowerCase().includes(query.toLowerCase()) &&
          (selectedExpertise === "" ||
            mentor.expertise === selectedExpertise) &&
          mentor.status === "active"
      );

      // Kiểm tra số trang tối đa và đặt lại currentPage nếu cần
      const maxPages = Math.ceil(result.length / ITEMS_PER_PAGE);
      if (currentPage > maxPages) {
        setCurrentPage(maxPages); // Nếu trang hiện tại lớn hơn số trang tối đa, chuyển về trang cuối
      }

      setFilteredMentors(result);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu mentor:", error);
    }
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchMentors(searchQuery, expertise);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMentors = filteredMentors.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    fetchMentors(searchQuery, expertise);
  }, [searchQuery, expertise]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const navigate = useNavigate();

  const handleOpenConnectPage = (mentor) => {
    const userRole = localStorage.getItem("role");

    if (userRole === "mentee") {
      navigate("/connect-mentor", { state: { mentor } });
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("search-container")}>
        <div className={cx("title")}>
          <span className={cx("find-your")}>FIND YOUR</span>
          <span className={cx("mentor")}>MENTOR</span>
        </div>

        <div className={cx("filter-container")}>
          <label htmlFor="expertise-filter">Lọc theo chuyên môn:</label>
          <select
            id="expertise-filter"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
          >
            <option value="">Tất cả</option>
            <option value="Đảm bảo chất lượng và an toàn thực phẩm">
              Đảm bảo chất lượng và an toàn thực phẩm
            </option>
            <option value="Công nghệ chế biến thuỷ sản">
              Công nghệ chế biến thuỷ sản
            </option>
            <option value="Kế toán">Kế toán</option>
            <option value="Tài chính - Ngân hàng">Tài chính - Ngân hàng</option>
            <option value="Quản trị kinh doanh">Quản trị kinh doanh</option>
            <option value="Kinh doanh quốc tế">Kinh doanh quốc tế</option>
            <option value="Luật kinh tế">Luật kinh tế</option>
            <option value="Khoa học dinh dưỡng và ẩm thực">
              Khoa học dinh dưỡng và ẩm thực
            </option>
            <option value="Khoa học chế biến món ăn">
              Khoa học chế biến món ăn
            </option>
            <option value="Quản trị dịch vụ du lịch và lữ hành">
              Quản trị dịch vụ du lịch và lữ hành
            </option>
            <option value="Quản trị nhà hàng và dịch vụ ăn uống">
              Quản trị nhà hàng và dịch vụ ăn uống
            </option>
            <option value="Quản trị khách sạn">Quản trị khách sạn</option>
            <option value="Ngôn ngữ Anh">Ngôn ngữ Anh</option>
            <option value="Ngôn ngữ Trung Quốc">Ngôn ngữ Trung Quốc</option>
            <option value="Công nghệ thông tin">Công nghệ thông tin</option>
            <option value="An toàn thông tin">An toàn thông tin</option>
            <option value="Công nghệ chế tạo máy">Công nghệ chế tạo máy</option>
            <option value="Công nghệ kỹ thuật điện, điện tử">
              Công nghệ kỹ thuật điện, điện tử
            </option>
            <option value="Công nghệ kỹ thuật cơ điện tử">
              Công nghệ kỹ thuật cơ điện tử
            </option>
            <option value="Công nghệ kỹ thuật điều khiển và tự động hóa">
              Công nghệ kỹ thuật điều khiển và tự động hóa
            </option>
            <option value="Công nghệ kỹ thuật hóa học">
              Công nghệ kỹ thuật hóa học
            </option>
            <option value="Công nghệ vật liệu">Công nghệ vật liệu</option>
            <option value="Công nghệ dệt, may">Công nghệ dệt, may</option>
            <option value="Công nghệ kỹ thuật môi trường">
              Công nghệ kỹ thuật môi trường
            </option>
            <option value="Quản lý tài nguyên và môi trường">
              Quản lý tài nguyên và môi trường
            </option>
            <option value="Công nghệ sinh học">Công nghệ sinh học</option>
            <option value="Kinh doanh thời trang và dệt may">
              Kinh doanh thời trang và dệt may
            </option>
            <option value="Quản trị kinh doanh thực phẩm">
              Quản trị kinh doanh thực phẩm
            </option>
            <option value="Marketing">Marketing</option>
            <option value="Kỹ thuật nhiệt">Kỹ thuật nhiệt</option>
            <option value="Công nghệ tài chính">Công nghệ tài chính</option>
            <option value="Khoa học dữ liệu">Khoa học dữ liệu</option>
            <option value="Thương mại điện tử">Thương mại điện tử</option>
            <option value="Logistics và quản lý chuỗi cung ứng">
              Logistics và quản lý chuỗi cung ứng
            </option>

            {/* Thêm các tùy chọn chuyên môn khác nếu cần */}
          </select>
        </div>

        <SearchBar onSearch={setSearchQuery} handleSearch={handleSearch} />
      </div>

      <div className={cx("mentors-container")}>
        <div className={cx("mentor-list")}>
          {currentMentors.length > 0 ? (
            currentMentors.map((mentor) => (
              <MentorCard
                key={mentor.id}
                id={mentor.id}
                name={mentor.name}
                expertise={mentor.expertise}
                onConnect={() => handleOpenConnectPage(mentor)}
              />
            ))
          ) : (
            <p className={cx("no-results")}>Không tìm thấy mentor nào.</p>
          )}
        </div>
        <div className={cx("pagination")}>
          {Array.from(
            { length: Math.ceil(filteredMentors.length / ITEMS_PER_PAGE) },
            (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={cx({ active: i + 1 === currentPage })}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>

      <NotificationModal
        message="Đăng ký trở thành Mentee ngay để được kết nối với Mentor."
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Mentors;
