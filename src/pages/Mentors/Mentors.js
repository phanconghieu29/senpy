import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Mentors.module.scss";
import MentorCard from "../../components/Card/MentorCard/MentorCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { mockDataMentor } from "../../Data/mockData";

const cx = classNames.bind(styles);

const ITEMS_PER_PAGE = 16;

function Mentors() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredMentors, setFilteredMentors] = useState([]);

    const fetchMentors = async (query = "") => {
        try {
            // Nếu dùng API, thay thế mockDataMentor bằng hàm fetch từ server
            const data = mockDataMentor; // Tạm thời sử dụng mockDataMentor
            const result = data.filter((mentor) =>
                mentor.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredMentors(result);
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu mentor:", error);
        }
    };

    // Thực hiện tìm kiếm khi nhấn nút
    const handleSearch = () => {
        fetchMentors(searchQuery);
    };

    // Phân trang
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentMentors = filteredMentors.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    useEffect(() => {
        // Gọi fetchMentors() khi lần đầu load component
        fetchMentors();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const navigate = useNavigate();

    const handleOpenConnectPage = (mentor) => {
        navigate("/connect-mentor", { state: { mentor } });
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("search-container")}>
                <div className={cx("title")}>
                    <span className={cx("find-your")}>FIND YOUR</span>
                    <span className={cx("mentor")}>MENTOR</span>
                </div>
                <SearchBar
                    onSearch={setSearchQuery}
                    handleSearch={handleSearch}
                />
            </div>

            <div className={cx("mentors-container")}>
                <div className={cx("mentor-list")}>
                    {currentMentors.length > 0 ? (
                        currentMentors.map((mentor) => (
                            <MentorCard
                                key={mentor.id}
                                id={mentor.id}
                                name={mentor.name}
                                expertise={mentor.major}
                                onConnect={() => handleOpenConnectPage(mentor)}
                            />
                        ))
                    ) : (
                        <p className={cx("no-results")}>
                            Không tìm thấy mentor nào.
                        </p>
                    )}
                </div>
                <div className={cx("pagination")}>
                    {Array.from(
                        {
                            length: Math.ceil(
                                filteredMentors.length / ITEMS_PER_PAGE
                            ),
                        },
                        (_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={cx({
                                    active: i + 1 === currentPage,
                                })}
                            >
                                {i + 1}
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Mentors;
