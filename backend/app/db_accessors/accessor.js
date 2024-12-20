import Connection from "../db/connection.js";
import Blog from "../models/blog.js";

export default class Accessor {
    static async getAllBlogs() {
        try {
            await Connection.open("teaching_proj");
            const messages = await Message.find({});
            return messages;
        } catch (e) {
            console.log("Something bad will happen");
        }
    }

    static async postBlog(blogInfo) {
        try {
            await Connection.open("teaching-proj");
            const msge = await Blog.create(blogInfo);
            return msge;
        } catch (e) {
            console.log("Failed");
        }
    }

    static async updateBlogById(id, updatedInfo) {
        try {
            await Connection.open("teaching-proj");
            const msge = await Blog.findOneAndUpdate({ _id: id }, { $set: updatedInfo }, { new: true, runValidators: true });
            return msge;
        } catch (e) {
            console.log("Failed due to:", e);
        }
    }

    static async deleteBlogById(id) {
        try {
            await Connection.open("teaching_proj");
            const msge = await Message.findOneAndDelete({ _id: id });
            return msge;
        } catch (e) {
            console.log("Failed due to", e);
        }
    }
}