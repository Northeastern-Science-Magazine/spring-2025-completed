"use client";
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard.jsx';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        console.log("hi");
        fetch('http://localhost:8001/all-blogs', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => setBlogs(data))
            .catch((error) => console.error('Error fetching message:', error));
    }, []);

    const editBlog = (event) => {};

    const onDelete = async (_id) => {
        setBlogs(blogs.filter(blog => blog._id != _id));
    }


  return (
    <div>
        <h1>Blogs</h1>
        <div>
            {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                    <div key={index}>
                        <BlogCard {...blog} onEdit={ editBlog } onDelete={ onDelete }/>
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