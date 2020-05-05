var story = [];
export const counter = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
        state =  state + action.payload
        story = history(action, state)
        return state;
        case "DECREMENT":
        state = state - 1;    
        return state;
        
        default: 
        return state;
    } 
};

 const history = (action, state) => {
    action.history = action.history.concat({state : state + action.payload - 10})
    return action.history;
}

export default counter;