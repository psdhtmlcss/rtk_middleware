
import { createReducer } from '@reduxjs/toolkit';
import { Action } from './action';

const initialState = {
  count: 0
};

const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(Action.ADD, (state) => { state.count += 1 })
    .addCase(Action.MINUS, (state) => { state.count -= 1 })
    .addCase(Action.RESET, (state) => { state.count = 0 })
    .addCase(Action.ADD_VALUE, (state, action) => { state.count += action.payload })
})

export { updateStore };