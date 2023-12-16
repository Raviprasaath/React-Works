import { useReducer } from "react";
import { createContext } from "react";

export const TaskContext = createContext();

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADDING_TASK':
            let id = Math.floor(Math.random()*100);
            let combine = {...action.payload, id}
            return {
               ...state, allTask:[...state.allTask, combine]
            }
        case 'REMOVING_TASK':
            let tempArr = state.allTask.filter((item)=>item.id !== action.payload.id)
            return  {
                ...state, allTask:tempArr
            }
        case 'UPDATING_TASK':
            let tempArr2 = state.allTask.map((item)=>{
                return item.id === action.payload.id ? action.payload : item
            })
            return {
                ...state, allTask:tempArr2
            }
    }
}

export const TaskContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(taskReducer,{
        allTask: [],
    })

    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}