import React, { useState, useEffect } from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export const DetailsPages = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    // Fetch the news details from the API using the news ID
    const fetchNewsDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:2903/api/news/${id}`);
        console.log(response.data)
        setNews(response.data);
      } catch (error) {
        console.error("Failed to fetch news details:", error);
      }
    };
    
    fetchNewsDetails();
  }, [id]);

  return (
    <>
      {news ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={`http://localhost:2903${news.image_url}`} alt='News Cover' />
            </div>
            <div className='right'>
              <h1>{news.title}</h1>
              <p>{news.content}</p>
              <p>Author: {news.author_name}</p>
              <p>Posted on: {new Date(news.post_date).toLocaleDateString()}</p>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
