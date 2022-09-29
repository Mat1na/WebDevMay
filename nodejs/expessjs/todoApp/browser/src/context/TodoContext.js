import {createContext, useReducer} from 'react'



export const TodoContext=createContext()
export const todosReducer =(state,action)=>{
switch(action.type){
    case'SET_TODOS':
    return{
        todos:action.payload
    }
    case'CREATE_TODO':
    return{
        todos:[action.payload,...state.todos]
    }
    default:
        return state
}
}
export const TodoContextProvider=({children})=> {
   const [state,dispatch] =useReducer(todosReducer, {
    todos:null
   })

  
  return (
    <TodoContext.Provider value={{...state,dispatch}}>
        {children}
    </TodoContext.Provider>
  )
}

