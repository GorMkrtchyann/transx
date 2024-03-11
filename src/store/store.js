import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './Calculatorstore';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});