import React from 'react';
import Layout from '../components/Layout';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';

const Tasks = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Card title="My Tasks">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Add, manage, and track your daily tasks with ease.
          </p>
          <TaskManager />
        </Card>
      </div>
    </Layout>
  );
};

export default Tasks;
