// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Footer Logo and Text */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold">My Blog</h2>
          <p className="mt-2 text-lg">Your go-to destination for interesting reads and stories</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-300">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors duration-300">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-300">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>

        {/* Footer Links */}
        <div className="">
          <ul className="flex justify-center space-x-6">
            <li><a href="#" className="text-white hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">Terms of Service</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
