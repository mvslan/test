const createStore = function (reducer, preloadedState, enhancer) {
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw Error("Expected the enhancer to be a function.");
    }
    return enhancer(createStore)(reducer, preloadedState);
  }

  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = [];
  let nextListeners = currentListeners;
  let isDispatching = false;

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    let isSubscribed = true;

    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      isSubscribed = false;

      const index = nextListeners.indexOf(listener);
      nextListeners.slice(index, 1);
      // 不懂？
      nextListeners = [];
    };
  }

  function dispatch(action) {
    currentState = currentReducer(currentState, action);

    const listeners = (currentListeners = nextListeners);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }

    return action;
  }

  dispatch({
    type: "this id a init dispatch",
  });

  return {
    getState,
    subscribe,
    dispatch,
  };
};

export default createStore;
