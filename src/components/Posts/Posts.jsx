import React, { useState, useEffect } from "react";
import "./Posts.css";
import Post from "../Post/Post";
import axios from "axios";

const Posts = () => {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:2903/api/reports");
        // Lọc các bài viết có status là "Đã duyệt"
        const approvedPosts = response.data.filter(
          (post) => post.status === "Đã duyệt"
        );
        setPostsData(approvedPosts); // Đặt dữ liệu đã lọc vào state
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!postsData || postsData.length === 0) {
    return <div>No posts available</div>; // Trường hợp không có bài viết
  }

  return (
    <div className="Posts">
      {postsData.map((post, id) => (
        <Post key={id} data={post} />
      ))}
    </div>
  );
};

export default Posts;
