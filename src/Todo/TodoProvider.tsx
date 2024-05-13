import { createContext, ReactNode, useReducer, Dispatch, useContext } from "react";
import { TodoInputReducer } from "./TodoInputReducer";
import { TodoActionType, TodoReducer, TodoStateType } from "./TodoReducer";
import { TodoInputActionType, TodoInputStateType } from "./TodoInputReducer";

interface TodoProviderProps {
    children: ReactNode
}

const TodoStateContext = createContext<TodoStateType | null>(null);
const TodoDispatchContext = createContext<Dispatch<TodoActionType> | null>(null);
const InputTodoContext = createContext<TodoInputStateType | null>(null);
const InputTodoDispatchContext = createContext<Dispatch<TodoInputActionType> | null>(null);


const TodoProvider = (props: TodoProviderProps) => {
    const [inputState, inputDispatch] = useReducer(TodoInputReducer, { text: '' })
    const [todoState, todoDispatch] = useReducer(TodoReducer, { todos: [] });
    return (
        <TodoStateContext.Provider value={todoState}>
            <TodoDispatchContext.Provider value={todoDispatch}>
                <InputTodoContext.Provider value={inputState}>
                    <InputTodoDispatchContext.Provider value={inputDispatch}>
                        {props.children}
                    </InputTodoDispatchContext.Provider>
                </InputTodoContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export const useTodoState = () => {
    const value = useContext(TodoStateContext);

    if(!value) {
        throw new Error('Cannot find TodoState');
    }
    
    return value;
}

export const useTodoDispatch = () => {
    const value = useContext(TodoDispatchContext);

    if(!value) {
        throw new Error('Cannot find TodoDispatch');
    }
    
    return value;
}

export const useInputTodoState = () => {
    const value = useContext(InputTodoContext);

    if(!value) {
        throw new Error('Cannot find InputTodo');
    }
    
    return value;
}

export const useInputTodoDispatch = () => {
    const value = useContext(InputTodoDispatchContext);

    if(!value) {
        throw new Error('Cannot find InputTodoDispatch');
    }
    
    return value;
}

export default TodoProvider;