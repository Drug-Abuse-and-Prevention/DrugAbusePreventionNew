import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useAsyncError, useNavigate  } from "react-router-dom";
import AnxietyResultPage from "./AnxietyResultPage"; // Import the result page component

function AnxietyQuiz() {

    const questions = [
        "Numbness or tingling",
        "Feeling hot",
        "Wobbliness in legs",
        "Unable to relax",
        "Fear of worst happening",
        "Dizzy or lightheaded",
        "Heart pounding/racing",
        "Unsteady",
        "Terrified or afraid",
        "Nervous",
        "Feeling of choking",
        "Hands trembling",
        "Shaky / unsteady",
        "Fear of losing control",
        "Difficulty in breathing",
        "Fear of dying",
        "Scared",
        "Indigestion",
        "Faint / lightheaded",
        "Face flushed",
        "Hot/cold sweats"
    ];

const [currentQuestion, setCurrentQuestion] = useState(0);
const [responses, setResponses] = useState(new Array(21).fill(null));
const [totalScore, setTotalScore] = useState(0);
const [anxietyLevel, setAnxietyLevel] = useState("low");
const [submit, setSubmit] = useState(false);
const [token, setToken] = useState("");
const [userName, setUserName] = useState("");
const navigate = useNavigate();

useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
        setToken(token);
        fetchUserName(token); // Call fetchUserName when token changes
    }
  }, []);
  useEffect(() => {
    if (token) {
        fetchUserName(token); // Call fetchUserName when token changes
    }
  }, [token]);

  const fetchUserName = async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/getUserName",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        // console.log(response.data);
        setUserName(response.data.name);
        // setUserId(response.data.userId);
        // console.log(userId)
        return response.data;
        // setEmail(response.data.email);

      } else {
        console.error("Failed to fetch user name");
        return null;
    }
    } catch (error) {
      console.error("Error fetching user name:", error);
      return null;
    }
  };
// console.log(userName);
const handleResponseChange = (value) => {
    const newResponses = [...responses];
    newResponses[currentQuestion] = value;
    setResponses(newResponses);
};

const handleResponseSubmit =(index, value) =>{
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
};

const handleNext =() =>{
    if(currentQuestion < questions.length -1){
        setCurrentQuestion(currentQuestion + 1);
    }
};

const handlePrevious = () =>{
    if(currentQuestion > 0){
        setCurrentQuestion(currentQuestion -1)
    }
};

const handleSubmit = async () =>{
    const token = Cookies.get("token");
    if (!token) {
        console.error("Token not found");
        return;
    }
    const score = responses.reduce((acc, val) => acc + val, 0);
    setTotalScore(score);
    let level;

    if (score >= 36) {
        level = 'potentially concerning levels of anxiety';
    } else if (score >= 22) {
        level = 'moderate anxiety';
    } else {
        level = 'low anxiety';
    }
    setAnxietyLevel(level);

    try {
        const Data = await fetchUserName(token);
        const username = Data.name;
        const userId = Data.userId;
        const email = Data.email;
        console.log(typeof(email));
        if (!Data) {
            console.error("User details not found");
            return;
        }
        const postData = {
            userId: userId, // Use the extracted userId
            username:username,
            email: email,
            score: score,
            level: level
        };

        const response = await axios.post(
            `http://localhost:3001/api/anxietyTestResults`, // Update the endpoint accordingly
            postData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(response.status);
        if (response.status === 201) {
            console.log('Anxiety test result stored successfully');
        } else {
            console.error('Failed to store anxiety test result');
         }
    } catch (error) {
        console.error('Error storing anxiety test result:', error);
    }
};



return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        
    <div className="bg-white p-8 rounded-lg shadow-lg">
    <h1>Question Numner: {currentQuestion+1} / {21}</h1>
           
    <h1 className="text-3xl font-semibold text-gray-800 mb-4">{questions[currentQuestion]}</h1>
            <div className="space-y-4">
                <label className="block">
                    <input
                        type="radio"
                        value={0}
                        checked={responses[currentQuestion] === 0}
                        onChange={() => handleResponseChange(0)}
                    />
                    <span className="ml-2 text-gray-800">Not At All</span>
                </label>
                <label className="block">
                    <input
                        type="radio"
                        value={1}
                        checked={responses[currentQuestion] === 1}
                        onChange={() => handleResponseChange(1)}
                    />
                    <span className="ml-2 text-gray-800">Mildly but it didn’t bother me much</span>
                </label>
                <label className="block">
                    <input
                        type="radio"
                        value={2}
                        checked={responses[currentQuestion] === 2}
                        onChange={() => handleResponseChange(2)}
                    />
                    <span className="ml-2 text-gray-800">Moderately - it wasn’t pleasant at times</span>
                </label>
                <label className="block">
                    <input
                        type="radio"
                        value={3}
                        checked={responses[currentQuestion] === 3}
                        onChange={() => handleResponseChange(3)}
                    />
                    <span className="ml-2 text-gray-800">Severely – it bothered me a lot</span>
                </label>
            </div>
            <div className="flex justify-between mt-6">
                <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg" onClick={handlePrevious} disabled={currentQuestion === 0}>Previous</button>
                {currentQuestion < questions.length - 1 && (
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg" onClick={handleNext}>Next</button>
                )}
                {currentQuestion === questions.length - 1 && (
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg" 
                    onClick={() => {
                        handleSubmit();
                        setSubmit(true);
                    }}>Submit</button>
                    )}
            </div>
            {totalScore > 0 && (
                <>
                <p className="mt-6 text-center text-gray-800">Total Score: {totalScore}
                </p>
                <p className="mt-6 text-center text-gray-800">result : {anxietyLevel}
                </p>
                
                </>
                ) 
                
            }
        </div> 
        
    </div>
    
   
);
}

export default AnxietyQuiz;