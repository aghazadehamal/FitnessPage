import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function NutritionPlanDetail() {
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
        setPlans(data.NutritionPlanDetail);
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
      <h1>Beslenme Planları</h1>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <h2>{plan.title}</h2>
            <p>{plan.description}</p>
            {plan.meals && plan.meals.map((meal, index) => (
              <div key={index}>
                <h3>{meal.mealType}</h3>
                <ul>
                  {meal.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NutritionPlanDetail;
