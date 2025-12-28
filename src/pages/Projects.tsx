
import React from 'react';
import Navbar from '@/components/layout/Navbar';

const Projects = () => {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-black mb-4">Our Projects</h1>
          <p className="text-xl text-gray-700">Showcase of our successful electrical projects.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
