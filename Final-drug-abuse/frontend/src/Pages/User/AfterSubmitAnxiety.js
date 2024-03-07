import React from 'react'
import { useLocation } from 'react-router-dom';

function AfterSubmitAnxiety() {
  const location = useLocation();
//   if (!location.state) {
//     return <div>Loading...</div>;
// }
  const {score , anxietyLevel} = location.state;
 console.log(location.state)
    return (
    <>
    <h1>AfterSubmitAnxiety page</h1> 
    <h1>Score: {score}</h1>
    <h1>level: {anxietyLevel} 
    </h1>
    
    </>
  )
}

export default AfterSubmitAnxiety