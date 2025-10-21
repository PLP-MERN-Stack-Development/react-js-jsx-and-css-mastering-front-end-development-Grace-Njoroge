import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children, footer, className = '' }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-6 
                  mb-6 transition-transform transform hover:scale-105 animate-fadeIn ${className}`}
    >
      {title && (
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      )}
      <div className="mb-4 text-gray-700 dark:text-gray-300">{children}</div>
      {footer && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">{footer}</div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
