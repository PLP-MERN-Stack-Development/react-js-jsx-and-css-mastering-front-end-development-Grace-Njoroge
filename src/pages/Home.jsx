import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section with fade-in */}
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl font-bold uppercase text-gray-900 dark:text-gray-100">
          Welcome to Task Manager
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg">
          your all-in-one stop solution for task management and productivity
        </p>
      </div>

      {/* Grid layout for cards with staggered fade-in */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Task Management" className="animate-fadeIn delay-100">
          <p className="text-gray-600 dark:text-gray-300">
            Manage your tasks efficiently, track your progress, and explore API data all in one place.
          </p>
        </Card>

        <Card title="Data Insights" className="animate-fadeIn delay-200">
          <p className="text-gray-600 dark:text-gray-300">
            Explore and analyze API data with real-time search and pagination to make informed decisions.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Home;
