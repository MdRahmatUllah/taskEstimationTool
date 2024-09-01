import React from 'react';
import { Clock } from 'lucide-react';
import { formatTotalTime } from './utils'; // Adjust the import based on your project structure

const TotalEstimatedTime = ({ totalTime }) => {
  return (
    <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg fixed bottom-0 left-0 right-0"> 
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Total Estimated Time</h3>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-2xl font-bold text-indigo-600">{formatTotalTime(totalTime)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalEstimatedTime;