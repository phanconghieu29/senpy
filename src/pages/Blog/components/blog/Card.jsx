import React, { useState, useEffect } from "react";
import "./blog.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

export const Card = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get("http://localhost:2903/api/news/all");
        const data = response.data;
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <div className="blog-section">
      <section className="blog">
        <div className="container grid3">
          {blogData.map((item) => (
            <div className="box boxItems" key={item.news_id}>
              <div className="img">
                <img src={`http://localhost:2903${item.image_url}`} alt={item.title} />
              </div>
              <div className="details">
                <div className="tag">
                  <a href="/">@{item.author_name}</a>
                </div>
                <Link to={`/news/${item.news_id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.content.slice(0, 180)}...</p>
                <div className="date">
                  <AiOutlineClockCircle className="icon" />
                  <label>{new Date(item.post_date).toLocaleDateString("en-GB")}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
  
};
