"use client";
import React, { ChangeEvent, useState } from "react";
import { Card } from "@radix-ui/themes";

/*
This file represents the display of one unique blog.
There are two buttons as well (edit and delete), which execute those backend routes.
*/
export interface Blog {
  _id: string;
  title: string;
  author: string;
  content: string;
}

export interface BlogCardProps extends Blog {
  onDelete: (_id: string) => void;
}

export default function BlogCard({
  _id,
  title,
  author,
  content,
  onDelete,
}: BlogCardProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [stateContent, setStateContent] = useState(content);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStateContent(event.target.value);
  };

  const saveBlog = async () => {
    await fetch(`http://localhost:8001/update-blog/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: stateContent }),
    });

    setIsEditMode(false);
  };

  const editBlog = () => {
    setIsEditMode(true);
  };

  const deleteBlog = async () => {
    await fetch(`http://localhost:8001/delete-blog/${_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    onDelete(_id);
  };

  return (
    <Card size="3">
      <p className="text-blue-300">{title}</p>
      <p>By: {author}</p>
      {isEditMode ? (
        <>
          <input type="text" value={stateContent} onChange={handleChange} />
          <button onClick={saveBlog}>Save</button>
        </>
      ) : (
        <>
          <p>{stateContent}</p>
          <button onClick={editBlog}>Edit</button>
        </>
      )}

      <br></br>
      <button onClick={deleteBlog}>Delete</button>
    </Card>
  );
}
