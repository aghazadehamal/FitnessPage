import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Link bileşenini içe aktar

function NutritionPlans() {
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
        setPlans(data.nutritionPlans);
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
            <Link to={`/nutrition-plan/${plan.id}`}>{plan.title}</Link> - {plan.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NutritionPlans;
