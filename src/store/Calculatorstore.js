// store/Calculatorstore.js
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
    {
        origin: "",
        delivery: "",
        service: "",
        weight: "",
        height: "",
        width: "",
        length: "",
        id: uuidv4(),
    },
]

const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        addForm(state) {
            if (state.length < 5) {
                return [...state, {
                    origin: "",
                    delivery: "",
                    service: "",
                    weight: "",
                    height: "",
                    width: "",
                    length: "",
                    id: uuidv4(),
                }]
            }
        },
        removeForm(state, action) {
            console.log(action.payload)
            return state = state.filter((form) => form.id !== action.payload);
        },
        updateForm(state, action) {
            const { id, name, value } = action.payload;
            return state.map((form) => {
                if (form.id === id) {
                    return { ...form, [name]: value }
                }
                return form
            });

        },
    },
});

export const { addForm, removeForm, updateForm } = calculatorSlice.actions;

export default calculatorSlice.reducer;
