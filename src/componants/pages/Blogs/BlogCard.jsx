import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, author, content, date, image }) => {
  // Truncate content for preview
  const truncatedContent = content.length > 100 ? content.substring(0, 100) + "..." : content;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      {/* Blog Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />
      {/* Card Content */}
      <div className="p-5">
        {/* Blog Title */}
        <h2 className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h2>
        {/* Blog Meta */}
        <p className="text-sm text-gray-500 mt-2">
          By <span className="font-medium">{author}</span> | {new Date(date).toDateString()}
        </p>
        {/* Blog Excerpt */}
        <p className="text-gray-700 mt-4">
          {truncatedContent}
        </p>
        {/* Read More Button */}
        <div className="mt-4">
          <Link
            to={`/blogs/${id}`}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition-all duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
