"use client";
import React, { useState } from "react";

/*
This file represents the display of one unique blog.
There are two buttons as well (edit and delete), which execute those backend routes.
*/
export default function BlogCard({ _id, title, author, content, onDelete }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newContent, setNewContent] = useState(content);

  const handleChange = (event) => {
    setNewContent(event.target.value);
  };

  const saveBlog = async (event) => {
    await fetch(`http://localhost:8001/update-blog/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newContent }),
    });

    setIsEditMode(false);
  };

  const onEdit = (event) => {
    setIsEditMode(true);
  };

  const deleteBlog = async (event) => {
    await fetch(`http://localhost:8001/delete-blog/${_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    onDelete(_id);
  };

  return (
    <div>
      <p>{title}</p>
      <p>By: {author}</p>
      {isEditMode ? (
        <>
          <input type="text" value={newContent} onChange={handleChange} />
          <button onClick={saveBlog}>Save</button>
        </>
      ) : (
        <>
          <p>{newContent}</p>
          <button onClick={onEdit}>Edit</button>
        </>
      )}

      <br></br>
      <button onClick={deleteBlog}>Delete</button>
    </div>
  );
}
