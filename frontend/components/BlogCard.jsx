"use client";
import React from "react";

/*
This file represents the display of one unique blog.
There are two buttons as well (edit and delete), which execute those backend routes.
*/
export default function BlogCard({_id, title, author, content, editBlog, onDelete}) {

    const deleteBlog = async (event) => {
        const response = await fetch(`http://localhost:8001/delete-blog/${_id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        onDelete(_id);
    }

    return (
        <div>
            <p>{title}</p>
            <p>By: {author}</p>
            <p>{content}</p>
            <button onClick={editBlog}>Edit</button>
            <br></br>
            <button onClick={deleteBlog}>Delete</button>
        </div>   
    )
}