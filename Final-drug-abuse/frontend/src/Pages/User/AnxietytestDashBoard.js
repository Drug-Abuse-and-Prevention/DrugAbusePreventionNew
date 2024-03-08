import React from 'react';
import { Link } from 'react-router-dom';

function AnxietytestDashBoard() {
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" >
        <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold text-white mb-4">Take the Anxiety Test</h1>
        <p className="text-white mb-6">Welcome to the Anxiety Test. This test will help you understand your anxiety levels.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
            Get Started
            <Link to="/anxietyquiz" className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-2xl font-semibold">
                
              </Link>
        </button>
    </div>
        </div>
    );
}

export default AnxietytestDashBoard;
