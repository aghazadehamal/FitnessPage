import React, { useState } from 'react';
import { BiNews } from 'react-icons/bi';

const NutritionAndWaterTracker = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [foodEntry, setFoodEntry] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleWaterChange = (e) => {
    setWaterIntake(e.target.value);
  };

  const handleFoodChange = (e) => {
    setFoodEntry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Su: ${waterIntake}L, Yemek: ${foodEntry}`);
  };
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div  className='nutrition-water-tracker'>
       <button onClick={toggleFormVisibility} >
        <i>
          <BiNews />
        </i>
        <span className="ml-5" >
          {" "}
          Su və Qida İzləmə
        </span>
      </button>
      {isFormVisible && (
        <>
      <h2>Su və Qida İzləmə</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Bu gün içdiyiniz su miqdarı (litre):
          <input
            type="number"
            value={waterIntake}
            onChange={handleWaterChange}
          />
        </label>
        <label>
          Bu gün nə yediniz?:
          <textarea
            value={foodEntry}
            onChange={handleFoodChange}
          />
        </label>
        <button type="submit">Yadda saxla</button>
      </form>
      </>
      )}
    </div>
    
  );
};

export default NutritionAndWaterTracker;
