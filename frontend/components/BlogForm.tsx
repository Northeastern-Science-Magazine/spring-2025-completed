import React, { ChangeEvent, useState } from "react";
import * as Form from "@radix-ui/react-form";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:8001/create-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  };

  return (
    <Form.Root className="w-[260px]">
      <Form.Field className="mb-2.5 grid" name="title">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px]">
            Title
          </Form.Label>
        </div>
        <Form.Control asChild>
          <textarea
            className="box-border border-black inline-flex h-[35px] w-full resize-none items-center justify-center rounded px-2.5 text-[15px] leading-none"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="mb-2.5 grid" name="author">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px]">
            Author
          </Form.Label>
        </div>
        <Form.Control asChild>
          <textarea
            className="box-border border-black inline-flex w-full resize-none text-green-500 items-center justify-center rounded p-2.5 text-[15px] leading-none"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="mb-2.5 grid" name="content">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px]">
            Blog Content
          </Form.Label>
        </div>
        <Form.Control asChild>
          <textarea
            className="box-border border-black inline-flex w-full resize-none items-center justify-center rounded p-2.5 text-[15px] leading-none"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button
          onClick={handleSubmit}
          className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center px-[15px] font-medium leading-none outline-black"
        >
          Post Blog
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default BlogForm;
