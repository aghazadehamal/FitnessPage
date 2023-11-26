// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyCalendar from './MyCalendar';
import NutritionPlans from './components/NutritionPlans';
import ChekiAlma from './ChekiAlma';
import ExerciseDetail from './components/ExerciseDetail';
import Squat from './Squat';
import GoalSetting from './GoalSetting';
import NutritionAndWaterTracker from './NutritionAndWaterTracker';
import EducationalVideo from './EducationalVideo';
import NutritionPlanDetail from './NutritionPlanDetail';
import ExerciseDetailPage from './ExerciseDetailPage';
import ChekiAlmaDetail from './ChekiAlmaDetail'; 
import Squatt from './Squatt';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <MyCalendar/>
            <h1>Qidalanma təfərrüatları</h1> 
            <NutritionPlans />
            <ChekiAlma />
            <h1>İdman</h1>
            <ExerciseDetail />
            <Squat/>
            <GoalSetting/>
            <NutritionAndWaterTracker/>
            <EducationalVideo /> 
          </>
        } />
        <Route path="/nutrition-plan/:id" element={<NutritionPlanDetail />} />
        <Route path="/exercise/:id" element={<ExerciseDetailPage />} />
        <Route path="/nutrition-plans/:id" element={<ChekiAlmaDetail />} />
        <Route path="/squatt/:id" element={<Squatt />} /> 
      </Routes>
    </Router>
  );
}

export default App;
