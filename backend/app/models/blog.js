import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BlogSchema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        content: { type: String, required: true }
    },
    {
        collection: 'proj_collection'
    }
);

const db = mongoose.connection.useDb("teaching_proj");
const Blog = db.model("Blog", BlogSchema);

export default Blog; 