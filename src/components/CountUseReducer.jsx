
import React, { useReducer } from 'react'

const reducer = (state, action) => {

    switch (action) {
        case "increment": {
            return{count: state.count + 1}
        }
            
                  case "decrement": {
            return{count: state.count - 1}
        }
            
            
             case "reset": {
            return{count: state.count = 0}
        }
            
        default:
            return state;
            
}




    
}

const CountUseReducer = () => {
    
    const [state, dispatch] = useReducer(reducer, { count: 0 });


  return (
      <div>
          <h2>Using Reducer</h2>
            <p>{state.count}</p>
          <button onClick={() => dispatch("increment")}>+</button>
          <button onClick={() => dispatch("decrement")}>-</button>
          <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
  )
}

export default CountUseReducer