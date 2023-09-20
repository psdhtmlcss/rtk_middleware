import { createAction } from '@reduxjs/toolkit';

export const Action = {
  ADD: 'ADD',
  MINUS: 'MINUS',
  RESET: 'RESET',
  ADD_VALUE: 'ADD_VALUE'
};

export const addAction = createAction(Action.ADD);
export const minusAction = createAction(Action.MINUS);
export const resetAction = createAction(Action.RESET);
export const addValueAction = createAction(Action.ADD_VALUE, (value) => {
  return {
    payload: value
  }
});