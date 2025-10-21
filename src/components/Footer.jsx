import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 dark:text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://github.com/YourUsername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            LinkedIn
          </a>
          <a href="https://twitter.com/YourHandle" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
