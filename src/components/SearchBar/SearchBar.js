import React from "react";

import classNames from "classnames/bind";
import styles from "./SearchBar.module.scss";

const cx = classNames.bind(styles);

const SearchBar = ({ onSearch, handleSearch }) => {
    return (
        <div className={cx("search-bar")}>
            <input
                type="text"
                placeholder="Nhập tên mentor..."
                onChange={(e) => onSearch(e.target.value)}
                className={cx("search-input")}
            />
            <button onClick={handleSearch} className={cx("search-button")}>
                Tìm Kiếm
            </button>
        </div>
    );
};

export default SearchBar;
