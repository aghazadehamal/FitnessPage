import React, { useState } from 'react';
import { BiNews } from 'react-icons/bi';


const GoalSetting = () => {
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Məqsəd: ${goal}, Son Tarix: ${deadline}`);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <div  className="goal-setting-form">
      <button onClick={toggleFormVisibility} >
        <i >
          <BiNews />
        </i>
        <span className="ml-5" >
          {" "}
          Məqsəd Müəyyənləşdirmə
        </span>
      </button>
      {isFormVisible && (
        <>
          <h2>Məqsəd Müəyyənləşdirmə</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Məqsədiniz:
              <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} />
            </label>
            <label>
              Son Tarix:
              <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
            </label>
            <button type="submit">Məqsədi Yadda Saxla</button>
          </form>
        </>
      )}
    </div>
  );
};

export default GoalSetting;
