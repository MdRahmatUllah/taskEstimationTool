import React, { useState } from 'react';
import { Plus, Minus, Clock } from 'lucide-react';
import Card from './Card'; // Import the Card component
import TotalEstimatedTime from './TotalEstimatedTime'; // Import the new component
import { formatTotalTime, convertToMinutes } from './utils';
import { STEPS_DATA } from './const';

const TaskEstimationApp = () => {
    
const [steps, setSteps] = useState(STEPS_DATA);
  const [totalTime, setTotalTime] = useState(0);

  const handleTimeChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index].estimatedTime = value;
    setSteps(updatedSteps);
    
    if (updatedSteps[index].name === 'Blockers or Risks') {
      const implementationStep = updatedSteps.find(step => step.name === 'Implementation');
      if (!implementationStep || !implementationStep.estimatedTime) {
        updatedSteps[index].errorMessage = 'Implementation time is required.'; // Set error message
        updatedSteps[index].calculatedTime = ''; // Clear calculated time
      } else {
        updatedSteps[index].errorMessage = ''; // Clear error message
        const implementationTime = convertToMinutes(implementationStep.estimatedTime) || 0;
        const percentage = parseFloat(value) || 0;
        const calculatedTime = implementationTime * (percentage / 100);
        updatedSteps[index].calculatedTime = formatTotalTime(calculatedTime); // Format calculated time
      }
    }
    
    setSteps(updatedSteps);
    calculateTotalTime(updatedSteps);
  };

  const calculateTotalTime = (updatedSteps) => {
    // Calculate implementation time based on the "Implementation" step
    const implementationStep = updatedSteps.find(step => step.name === 'Implementation');
    const implementationTime = convertToMinutes(implementationStep.estimatedTime) || 0; // Get implementation time

    const total = updatedSteps.reduce((sum, step) => {
      return sum + convertToMinutes(step.estimatedTime || '0m'); // Sum all estimated times
    }, 0);
    
    // Calculate Blockers or Risks percentage based on Implementation time
    const blockersStep = updatedSteps.find(step => step.name === 'Blockers or Risks');
    const blockersPercentage = parseFloat(blockersStep.estimatedTime) || 0;
    const calculatedBlockersTime = (implementationTime * (blockersPercentage / 100)) || 0; // Calculate based on percentage

    setTotalTime(total + calculatedBlockersTime); // Include calculated time
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Task Estimation Tool</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                title={step.name}
                description={step.description}
                timeRange={step.timeRange}
                errorMessage={step.errorMessage}
                estimatedTime={step.estimatedTime}
                onTimeChange={(e) => handleTimeChange(index, e.target.value)} // Pass the time change handler
                calculatedTime={step.name === 'Blockers or Risks' ? step.calculatedTime : step.estimatedTime && formatTotalTime(convertToMinutes(step.estimatedTime))}
              />
            ))}
          </div>
        </div>
        <TotalEstimatedTime totalTime={totalTime} /> 
      </div>
    </div>
  );
};

export default TaskEstimationApp;