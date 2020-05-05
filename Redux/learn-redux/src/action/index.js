const initial = {
    age : 21, 
    history: []
}

export const increment = (py) =>{
        return {
            type : 'INCREMENT',
            payload : py,
            in : initial.age,
            history : initial.history 
        };
    };

export const decrement = () =>{
        return {
            type : 'DECREMENT',
            initial
        };
    };