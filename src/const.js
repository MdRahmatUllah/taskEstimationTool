const STEPS_DATA = [
    { name: 'Background Knowledge', timeRange: '15 min - 1 hr', description: 'Understanding the foundational concepts and context related to the task at hand. This step ensures that you have the necessary background to proceed effectively.' },
    { name: 'R&D', timeRange: '15 min - 1 hr', description: 'Conducting research to identify existing solutions, tools, or methodologies that can be leveraged. This may involve looking for similar packages or strategies that others have used.' },
    { name: 'Analysis', timeRange: '30 min - 1 hr', description: 'Defining the approach to tackle the problem. This includes brainstorming potential solutions, outlining the steps to be taken, and possibly creating visual aids like mind maps to organize thoughts.' },
    { name: 'Implementation', timeRange: 'Variable', description: 'The actual coding and development phase where the planned solutions are put into action. This step may vary significantly in time based on the complexity of the task.' },
    { name: 'Blockers or Risks', timeRange: '15% - 25% of total', description: 'Identifying potential obstacles or risks that could impede progress. This includes assessing unpredictable outcomes and planning for contingencies, such as issues that may arise during implementation.' },
    { name: 'Self Code Review', timeRange: '20 min - 1 hr', description: 'Reviewing your own code for quality, efficiency, and adherence to best practices. This step is crucial for catching errors and improving code quality before external reviews.' },
    { name: 'Merge Request Prepare', timeRange: '20 min+', description: 'Preparing the necessary documentation and code changes for a merge request. This includes writing markdown files that explain the changes made and their implications.' },
    { name: 'Code Review Changes', timeRange: '1 - 2 hr', description: 'Implementing feedback received from code reviews. This step involves making adjustments based on peer reviews to enhance the code quality and functionality.' },
];

export { STEPS_DATA };
