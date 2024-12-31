// About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header Section */}
        <h2 className="text-5xl font-bold text-gray-800 mb-6">About My Blog</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Welcome to my blog! Here I share my journey, experiences, and insights on various topics including web development, technology, and personal growth. I hope you find my posts inspiring and helpful!
        </p>
        
        {/* Author Bio Section */}
        <div className="flex justify-center mb-12">
          <img
            src="https://via.placeholder.com/150"
            alt="Author Avatar"
            className="rounded-full w-40 h-40 border-4 border-white shadow-xl"
          />
        </div>

        <div className="max-w-xl mx-auto text-center mb-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Hi, I'm Vijay Kumar</h3>
          <p className="text-gray-600 mb-6">
            I'm a web developer focusing on the MERN stack, and I believe in the power of continuous learning. Through this blog, I share my knowledge and experiences to help others grow in the world of web development and technology.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="border-l-4 border-gray-300 pl-6">
            {/* Timeline Event 1 */}
            <div className="mb-8 relative">
              <div className="absolute left-[-12px] top-[-5px] w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg"></div>
              <h4 className="text-xl font-bold text-gray-800">Started Learning Web Development</h4>
              <p className="text-gray-600 mt-2">I began my journey into web development by learning the fundamentals of HTML, CSS, and JavaScript.</p>
              <p className="text-sm text-gray-400 mt-2">Jan 2020 - Mar 2020</p>
            </div>

            {/* Timeline Event 2 */}
            <div className="mb-8 relative">
              <div className="absolute left-[-12px] top-[-5px] w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-lg"></div>
              <h4 className="text-xl font-bold text-gray-800">Joined a Bootcamp</h4>
              <p className="text-gray-600 mt-2">I joined an online coding bootcamp where I deep-dived into full-stack development, focusing on JavaScript and React.js.</p>
              <p className="text-sm text-gray-400 mt-2">Apr 2020 - Sep 2020</p>
            </div>

            {/* Timeline Event 3 */}
            <div className="mb-8 relative">
              <div className="absolute left-[-12px] top-[-5px] w-6 h-6 rounded-full bg-yellow-500 border-4 border-white shadow-lg"></div>
              <h4 className="text-xl font-bold text-gray-800">Started Freelance Web Development</h4>
              <p className="text-gray-600 mt-2">I took on my first freelance web development project, building websites and web apps using React and Node.js.</p>
              <p className="text-sm text-gray-400 mt-2">Oct 2020 - Present</p>
            </div>

            {/* Timeline Event 4 */}
            <div className="mb-8 relative">
              <div className="absolute left-[-12px] top-[-5px] w-6 h-6 rounded-full bg-red-500 border-4 border-white shadow-lg"></div>
              <h4 className="text-xl font-bold text-gray-800">Joined Zymsi as a React Developer</h4>
              <p className="text-gray-600 mt-2">I joined Zymsi as a full-time React.js developer where I work on building modern web applications.</p>
              <p className="text-sm text-gray-400 mt-2">Apr 2023 - Present</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-12">
          <a href="#contact" className="inline-block px-8 py-4 bg-yellow-500 text-gray-800 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-110 hover:bg-yellow-400">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
