import React from "react"
import classNames from "classnames/bind"
import { Card } from "../../pages/Blog/components/blog/Card"
import { Category } from "../../pages/Blog/components/category/Category"
import styles from "./Blog.module.scss"

const cx = classNames.bind(styles)

function Blog(){
  return (
    <>
      <div className={cx('container')}>
        <Category />
        <Card />
      </div>
    </>
  )
}

export default Blog;
