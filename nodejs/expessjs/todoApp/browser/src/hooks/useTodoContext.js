
import {useContext} from 'react'
import { TodoContext } from '../context/TodoContext'


export const useTodoContext=()=>{
    const TodoContext=useContext(TodoContext)
    if (!context){
        throw Error('useTodoContext must be used inside todoContextProvider')
    }
    return context
}