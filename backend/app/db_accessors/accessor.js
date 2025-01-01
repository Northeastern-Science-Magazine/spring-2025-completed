/* This is the accessor file. It connects to the database and 
retrieves the requested information from the database. This is 
done using MongoDB functions. */

import Connection from "../db/connection.js";
import Blog from "../models/blog.js";

export default class Accessor {
  /* Function to get every single blog. */
  static async getAllBlogs() {
    await Connection.open();
    const blogs = await Blog.find({});
    return blogs;
  }

  /* Function to add a new blog to the database */
  static async postBlog(blogInfo) {
    await Connection.open();
    const blog = await Blog.create(blogInfo);
    return blog;
  }

  /* Function to find a blog by its id and then replace its content body. */
  static async updateBlogById(id, updatedContent) {
    await Connection.open();
    // ensure that the update still matches the schema and return the updated blog instead of the original
    const blog = await Blog.findByIdAndUpdate(id, { content: updatedContent }, { runValidators: true, returnDocument: "after" });
    return blog;
  }

  /* Function to find a blog by its id and then delete it. */
  static async deleteBlogById(id) {
    await Connection.open();
    const blog = await Blog.findByIdAndDelete(id);
    return blog;
  }
}
