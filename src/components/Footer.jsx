import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-600 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} News App. All rights reserved.
        </p>
        <p className="text-sm mt-1">
          Built with ❤️ using React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
