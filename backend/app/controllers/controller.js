import Accessor from "../db_accessors/accessor.js";

export default class Controller {
    static async getBlogs(req, res) {
        try {
            const messages = await Accessor.getAllBlogs();
            res.json(messages);
            return messages;
        } catch (e) {
            console.log("Something bad happened due to:", e);
        }
    }

    static async postBlog(req, res) {
        try {
            await Accessor.postBlog(req.body);
            res.redirect("/");
        } catch (e) {
            console.log("Failed due to: ", e);
        }
    }

    static async updateBlog(req, res) {
        try {
            const id = req.params._id;
            const updated_val = req.body;
            const updated_blog = await Accessor.updateBlogById(id, updated_val);
            res.json(updated_blog);
        } catch (e) {
            console.log("Failed due to:", e);
        }
    }

    static async deleteBlog(req, res) {
        try {
            const id = req.params._id;
            const deletedBlog = await Accessor.deleteBlogById(id);
            res.redirect("/");
        } catch (e) {
            console.log("Failed due to:", e);
        }
    }
}