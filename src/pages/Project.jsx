import React from 'react';

const Project = ({ title, description, link }) => {
  return (
    <div className="p-4 bg-purple-700 rounded-lg mb-6">
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
        View Project
      </a>
    </div>
  );
};

export default Project;
