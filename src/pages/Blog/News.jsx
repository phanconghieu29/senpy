import React from "react";
import classNames from "classnames/bind";
import { Card } from "./components/blog/Card";
// import { Category } from "../../pages/Blog/components/category/Category"
import styles from "./News.module.scss";

const cx = classNames.bind(styles);

function News() {
  return (
    <>
      <div className={cx("container")}>
        {/* <Category /> */}
        <div className={cx("grid")}>
        <Card />
      </div>
      </div>
    </>
  );
}

export default News;
