export default function BlogCard({_id, title, author, content}) {
    return (
        <div>
            <p>{_id}</p>
            <p>{title}</p>
            <p>By: {author}</p>
            <p>{content}</p>
        </div>   
    )
}