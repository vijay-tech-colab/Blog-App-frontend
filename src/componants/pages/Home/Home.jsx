import React from 'react'

function Home() {
  return (
   <>
    <section className="bg-cover bg-center text-white h-96 flex justify-center items-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x900)' }}>
    <div className="text-center px-4 md:px-8">
      <h2 className="text-5xl font-bold leading-tight">Welcome to My Blog</h2>
      <p className="mt-4 text-lg md:text-xl">Exploring ideas, sharing insights, and telling stories</p>
      <button className="mt-6 px-6 py-3 bg-yellow-500 text-gray-800 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-400">
        Explore Now
      </button>
    </div>
  </section>

  {/* Featured Posts Section */}
  <section className="py-16 bg-gray-50" id="featured">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Featured Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Post 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/1200x500.png?text=Explore+My+Latest+Posts" alt="Blog post" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Understanding Tailwind CSS</h3>
            <p className="text-gray-600 mt-2">A beginner's guide to using Tailwind CSS in web development.</p>
            <a href="#" className="mt-4 inline-block text-yellow-500 hover:text-yellow-400">Read more</a>
          </div>
        </div>
        {/* Post 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/500x300" alt="Blog post" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">React Basics: Understanding JSX</h3>
            <p className="text-gray-600 mt-2">An introduction to JSX and its role in building React components.</p>
            <a href="#" className="mt-4 inline-block text-yellow-500 hover:text-yellow-400">Read more</a>
          </div>
        </div>
        {/* Post 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/500x300" alt="Blog post" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Mastering JavaScript Arrays</h3>
            <p className="text-gray-600 mt-2">A guide to working with arrays in JavaScript.</p>
            <a href="#" className="mt-4 inline-block text-yellow-500 hover:text-yellow-400">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </> )
}
export default Home