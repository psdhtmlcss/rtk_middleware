
function logIt(store) {
  return function(nextDispatch) {
    return function(action) {
      console.log(`[${Date()}] - выполнено действие`);
      console.log(action);
      console.log('Текущее состояние:');
      console.log(store.getState());

      nextDispatch(action);
    }
  }
}

export { logIt };