import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NutritionPlans from './components/NutritionPlans';
import ExerciseDetail from './components/ExerciseDetail';
import NutritionPlanDetail from './NutritionPlanDetail';
import ExerciseDetailPage from './ExerciseDetailPage';
import ChekiAlma from './ChekiAlma';
import ChekiAlmaDetail from './ChekiAlmaDetail'; 
import Squat from './Squat';
import Squatt from './Squatt';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <h1>Qidalanma təfərrüatları</h1> 
            <NutritionPlans />
            <ChekiAlma />
            <h1>İdman</h1>
            <ExerciseDetail />
            <Squat/>
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
