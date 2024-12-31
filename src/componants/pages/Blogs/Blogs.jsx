import BlogCard from "./BlogCard";
const BlogList = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-20 px-10">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          author={blog.author}
          image={blog.image}
          content={blog.content}
          date={blog.date}
        />
      ))}
    </div>
  );
};

export default BlogList;
