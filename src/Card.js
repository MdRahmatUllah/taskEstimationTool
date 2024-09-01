import React from 'react';

const Card = ({ title, description, timeRange, errorMessage, estimatedTime, onTimeChange, calculatedTime }) => {
  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
      <p className="mt-1 text-sm text-gray-500">Suggested time: {timeRange}</p>
      <div className="mt-2 flex items-center">
        <input
          type="text"
          className="block w-1/2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
          placeholder="Time (e.g., 3h, 20m)"
          value={estimatedTime || ''}
          onChange={onTimeChange}
        />
        {errorMessage && (
          <span className="text-red-500 ml-4">{errorMessage}</span> // Error message display
        )}
        <div className="ml-4">
          {calculatedTime}
        </div>
      </div>
    </div>
  );
};

export default Card;