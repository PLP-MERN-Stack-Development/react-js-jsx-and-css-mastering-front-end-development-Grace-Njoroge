import { useState, useEffect } from 'react';

/**
 * Custom hook to store state in localStorage
 * @param {string} key - The localStorage key
 * @param {any} initialValue - Initial state value
 */
export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage key:', key, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage key:', key, error);
    }
  }, [key, value]);

  return [value, setValue];
};
