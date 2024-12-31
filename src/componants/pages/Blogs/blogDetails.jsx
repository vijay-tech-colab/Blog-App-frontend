import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="text-center text-xl text-red-600">Blog not found!</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 pt-10">
      <div className="max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />
        {/* Blog Content */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500 text-center">
            By <span className="font-medium">{blog.author}</span> |{" "}
            {new Date(blog.date).toDateString()}
          </p>
          <hr className="my-6 border-gray-300" />
          <p className="text-lg text-gray-700 leading-relaxed">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
