import React, { useState } from "react";

const Navbar = ({ fetchNews }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State for toggling menu
  const categories = ["Cricket", "India", "Technology", "Politics"];
  const [activeCategory, setActiveCategory] = useState("");

  const handleSearch = () => {
    if (query) {
      fetchNews(query);
      setActiveCategory("");
    }
  };

  const handleCategoryClick = (category) => {
    fetchNews(category.toLowerCase());
    setActiveCategory(category);
    setIsOpen(false); // Close the menu on selection
  };

  return (
    <nav className="bg-blue-50 fixed top-0 left-0 right-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src="./images/logo.png" alt="logo" className="w-32" />
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
          } absolute lg:relative bg-blue-50 lg:bg-transparent top-16 lg:top-0 left-0 w-full lg:w-auto flex flex-col lg:flex-row lg:space-x-4 lg:items-center lg:flex p-4 lg:p-0 z-10`}
        >
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer hover:text-blue-500 ${
                activeCategory === category ? "text-blue-500" : "text-gray-700"
              } py-2 lg:py-0`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center space-x-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded px-4 py-2"
            placeholder="e.g. Science"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
          <button
  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  onClick={() => fetchNews("dance")}
>
  Dance Search
</button>

  </div>
      </div>

      {/* Mobile Search */}
      {isOpen && (
        <div className="block lg:hidden px-4 py-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded px-4 py-2 w-full mb-2"
            placeholder="e.g. Science"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
