import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 

function Squat() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setExercises(data.squat);
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
      });
  }, []);

  if (exercises.length === 0) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
   
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <Link to={`/squatt/${exercise.id}`}>{exercise.name}</Link> - {exercise.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Squat;
