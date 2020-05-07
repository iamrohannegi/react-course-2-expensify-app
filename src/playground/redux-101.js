import { createStore } from 'redux';
import { StrictMode } from 'react';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});



// Reducers 
// 1. Reducers are pure functions.
// 2. never change state or action.
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) { 
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.decrementBy }; 
        case 'SET':
            return { count: action.count };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
// Actions -  a plain object that gets sent to the store

// I'd like to increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
     
// I'd like to decrement the count
store.dispatch(decrementCount({ decrementBy: 10}));
store.dispatch(decrementCount());


// Reset - set count equal to zero
store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));
