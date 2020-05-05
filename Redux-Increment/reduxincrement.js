const {createStore} = require('redux');

const initialState = {
    age : 21 
}

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    if (action.type === 'suma'){
        newState.age = newState.age + 1
    }
    if (action.type === 'resta'){
        newState.age = newState.age - 1
    }
    return newState;
}


const store = createStore(myReducer);
store.subscribe(() => {
    console.log(JSON.stringify(store.getState()));
})

store.dispatch({type : 'suma'});
store.dispatch({type : 'resta'});
store.dispatch({type : 'suma'});
store.dispatch({type : 'suma'});
store.dispatch({type : 'suma'});
store.dispatch({type : 'suma'});
store.dispatch({type : 'suma'});
store.dispatch({type : 'resta'});
