function counter(state = 0, action) {
  const step = {
    INCREMENT: 1,
    DECREMENT: -1,
  };
  return state + (step[action.type] ?? 0);
}
