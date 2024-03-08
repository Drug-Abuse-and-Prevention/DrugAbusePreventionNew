import React from "react";

function AnxietyResultPage({ location }) {
  const { score, anxietyLevel } = location.state;

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Anxiety Quiz Result
        </h1>
        <p>Total Score: {score}</p>
        <p>Anxiety Level: {anxietyLevel}</p>
      </div>
    </div>
  );
}

export default AnxietyResultPage;
