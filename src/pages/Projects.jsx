import React from 'react';
import Project from './Project'; // Assuming Project component is in the same folder

const Projects = () => {
  return (
    <div className="p-8 bg-cream-500 rounded-lg">
      <h3 className="text-3xl font-bold mb-6 text-black">My Projects</h3>
      <div className="project-list"></div>
      {/* Example of using the Project component with data */}
      
      <Project
  title="Ryan's Future Successful Project"
  description="A placeholder for one of my future successful projects."
  link="https://example.com/future-project"  // Update with your future link
/>

 {/* Add more Project components as needed */}
    </div>
  );
};

export default Projects;
