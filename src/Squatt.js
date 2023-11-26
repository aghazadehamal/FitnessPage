import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PushUp from './Squat';

function Squatt() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPlans(data.squatt);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  if (plans.length === 0) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <h1>Push-Up Planları</h1>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <h2>{plan.name}</h2>
            <p>{plan.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Squatt;
