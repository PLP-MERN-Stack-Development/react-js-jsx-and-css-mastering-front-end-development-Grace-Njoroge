import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import axios from 'axios';

const ApiData = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch API data
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Filter data based on search
  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.body.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page on new search
  }, [search, data]);

  // Pagination calculation
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Card title="API Data">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Browse data fetched from JSONPlaceholder. Use the search bar or pagination to navigate.
          </p>

          {/* Search Input */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />

          {/* Loading/Error states */}
          {loading && <p className="text-gray-500 dark:text-gray-400">Loading...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}

          {/* API Data List */}
          <ul className="space-y-4">
            {currentItems.length === 0 && !loading ? (
              <li className="text-gray-500 dark:text-gray-400 text-center py-4">
                No results found
              </li>
            ) : (
              currentItems.map((item) => (
                <li
                  key={item.id}
                  className="p-4 border rounded-lg bg-white dark:bg-gray-700 shadow hover:shadow-md transition-shadow"
                >
                  <h2 className="font-semibold text-lg mb-1">{item.title}</h2>
                  <p className="text-gray-700 dark:text-gray-300">{item.body}</p>
                </li>
              ))
            )}
          </ul>

          {/* Pagination Controls */}
          {filteredData.length > itemsPerPage && (
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-gray-700 dark:text-gray-300">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default ApiData;
