import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 

function ChekiAlma() {
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
        setPlans(data.nutritionPlanss);
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
    
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <Link to={`/nutrition-plans/${plan.id}`}>{plan.title}</Link> - {plan.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChekiAlma;
