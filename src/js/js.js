
import { configureStore } from '@reduxjs/toolkit';
import { updateStore } from './reducer';
import { addAction, minusAction, resetAction, addValueAction } from './action';
import { logIt } from './middleware';

const addButton = document.querySelector('.js-add-button');
const minusButton = document.querySelector('.js-minus-button');
const resetButton = document.querySelector('.js-reset-button');
const currentValue = document.querySelector('.js-current-value');
const input = document.querySelector('.js-input-number');
const addValueButton = document.querySelector('.js-add-value-button');

const store = configureStore({
  reducer: updateStore,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logIt),
});


const updateCurrentValue = (state) => {
  currentValue.textContent = state.count;
};

const onAddButtonClick = (evt) => {
  evt.preventDefault();
  store.dispatch(addAction());
  updateCurrentValue(store.getState());
};

const onMinusButtonClick = (evt) => {
  evt.preventDefault();
  store.dispatch(minusAction());
  updateCurrentValue(store.getState());
};

const onResetButtonClick = (evt) => {
  evt.preventDefault();
  store.dispatch(resetAction());
  updateCurrentValue(store.getState());
};

const onAddValueButtonClick = (evt) => {
  evt.preventDefault();
  if (!input.value.length) {
    return;
  }
  const value = Number(input.value);
  store.dispatch(addValueAction(value));
  updateCurrentValue(store.getState());
};

addButton.addEventListener('click', onAddButtonClick);
minusButton.addEventListener('click', onMinusButtonClick);
resetButton.addEventListener('click', onResetButtonClick);
addValueButton.addEventListener('click', onAddValueButtonClick);
