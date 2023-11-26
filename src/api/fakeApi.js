// src/api/fakeApi.js
import { exercisesData, nutritionData } from '../data/data';

export const fetchExercises = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(exercisesData), 500); // 500ms gecikme ile veri döndür
    });
};

export const fetchNutritionPlans = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(nutritionData), 500);
    });
};
