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
import TrainVideos from './TrainVideos';

import './App.css';

function App() {
  return (
    
   <div >
     <Router>
      <Routes>
        <Route path="/" element={
          <>
            <MyCalendar/>
           <div className="backgroundImage">
           <h1 style={{ color: "green", padding: "10px", backgroundColor: "white", marginTop: "80px"}} >Qidalanma təfərrüatları</h1> 
            <NutritionPlans />
            <ChekiAlma />
            <h1 style={{ color: "green", padding: "10px", backgroundColor: "white"}}>İdman</h1>
            <ExerciseDetail />
            <Squat/>
           <div style={{display: "flex", justifyContent: "space-around", marginTop: "20px"}}>
             <GoalSetting/>
            <NutritionAndWaterTracker/>
            <TrainVideos/>
           </div>
           
           </div>
           
          </>
        } />
        <Route path="/nutrition-plan/:id" element={<NutritionPlanDetail />} />
        <Route path="/exercise/:id" element={<ExerciseDetailPage />} />
        <Route path="/nutrition-plans/:id" element={<ChekiAlmaDetail />} />
        <Route path="/squatt/:id" element={<Squatt />} /> 
        <Route path="education" element={<EducationalVideo />} /> 
      </Routes>
    </Router>
   </div>
  );
}

export default App;
