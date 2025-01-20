import React, { useState } from "react";
import newsImage from "../images/news.png";

const Navbar = ({ fetchNews }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State for toggling menu
  const categories = ["Cricket", "India", "Technology", "Politics"];

  const handleSearch = () => {
    if (!query || !isNaN(query)) {
      alert("Please enter a valid topic.");
    } else {
      fetchNews(query);
    }
  };
  

  const handleCategoryClick = (category) => {
    fetchNews(category.toLowerCase());
    setIsOpen(false); // Close the menu on selection
  };
  

  return (
    <nav className="bg-blue-50 fixed top-0 left-0 right-0 shadow-md z-30">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={newsImage} alt="logo" className="w-10" />
        </a>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {/* Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-4 lg:items-center bg-blue-50 lg:bg-transparent absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto flex flex-col lg:flex-row items-center p-4 lg:p-0 z-20`}
        >
          {categories.map((category) => (
            <li
              key={category}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => fetchNews(category.toLowerCase())}
            >
              {category}
            </li>
          ))}
          {/* Mobile Search */}
          {isOpen && (
            <div className="mt-4 w-full lg:hidden">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border rounded px-4 py-2 w-full mb-2"
                placeholder="e.g. Science"
                pattern="[A-Za-z ]*"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          )}
        </ul>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center space-x-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded px-4 py-2"
            placeholder="e.g. Science"
            pattern="[A-Za-z ]*"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
