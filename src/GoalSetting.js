import React, { useState } from 'react';

const GoalSetting = () => {
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Məqsəd: ${goal}, Son Tarix: ${deadline}`);
  };

  return (
    <div className="goal-setting-form">
      <h2>Məqsəd Müəyyənləşdirmə</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Məqsədiniz:
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </label>
        <label>
          Son Tarix:
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </label>
        <button type="submit">Məqsədi Yadda Saxla</button>
      </form>
    </div>
  );
};

export default GoalSetting;
