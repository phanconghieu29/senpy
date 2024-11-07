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
    const [filteredMentors, setFilteredMentors] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchMentors = async (query = "") => {
        try {
            const response = await axios.get("http://localhost:2903/api/mentors/get-mentors");
            const result = response.data.filter((mentor) =>
                mentor.name.toLowerCase().includes(query.toLowerCase()) && mentor.status === "active"
            );
            setFilteredMentors(result);
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu mentor:", error);
        }
    };

    const handleSearch = () => {
        fetchMentors(searchQuery);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentMentors = filteredMentors.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    useEffect(() => {
        fetchMentors();
    }, []);

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
