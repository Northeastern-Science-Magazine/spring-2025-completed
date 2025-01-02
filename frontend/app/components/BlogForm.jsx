import React from "react";
import * as Form from "@radix-ui/react-form";

const BlogForm = () => {
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
					className="box-border inline-flex h-[35px] w-full resize-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none"
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
					className="box-border inline-flex w-full resize-none items-center justify-center rounded bg-blackA2 p-2.5 text-[15px] leading-none"
					required
				/>
			</Form.Control>
		</Form.Field>
        <Form.Field className="mb-2.5 grid" name="blog-content">
			<div className="flex items-baseline justify-between">
				<Form.Label className="text-[15px] font-medium leading-[35px]">
					Blog Content
				</Form.Label>
			</div>
			<Form.Control asChild>
				<textarea
					className="box-border inline-flex w-full resize-none items-center justify-center rounded bg-blackA2 p-2.5 text-[15px] leading-none"
					required
				/>
			</Form.Control>
		</Form.Field>
		<Form.Submit asChild>
			<button className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center px-[15px] font-medium leading-none">
				Post Blog
			</button>
		</Form.Submit>
	</Form.Root>
    );
};

export default BlogForm;