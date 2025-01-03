"use client";
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard.jsx';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8001/home', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => setBlogs(data))
            .catch((error) => console.error('Error fetching message:', error));
    }, []);

  return (
    <div>
        <h1>Blogs</h1>
        <div>
            {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                    <div key={index}>
                        <BlogCard {...blog}/>
                        <hr/>
                    </div>
                ))
            ) : (
                <p>No blogs available.</p>
            )}
        </div>
    </div>
  );
};

export default Blogs;