import "./App.css";
import TodoAddForm from "./components/TodoAddForm/TodoAddForm.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoFooter from "./components/TodoFooter/TodoFooter.jsx";
import TodoControlBtns from "./components/TodoControlBtns/TodoControlBtns.jsx";
import { createContext, useReducer } from "react";
import { memo } from "react";
export const DataContext = createContext(null);

const randInt = (start = 0, end = 1000) =>
    Math.floor(start + Math.random() * (end - start));

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [
                ...state,
                {
                    id: randInt(),
                    task: action.payload.task,
                    complited: false,
                },
            ];

        case "deleteItem":
            return [...state.filter(item => item.id !== action.payload)];

        case "clearChacked":
            return [...state.filter(item => !item.complited)];

        case "chackAll":
            return [
                ...state.map(item => {
                    return { ...item, complited: true };
                }),
            ];

        case "unChackAll":
            return [
                ...state.map(item => {
                    return { ...item, complited: false };
                }),
            ];

        case "onChange":
            return [
                ...state.map(item =>
                    item.id == action.payload
                        ? { ...item, complited: !item.complited }
                        : { ...item }
                ),
            ];
    }
}

function App() {
    const data = [
        { id: 1, task: "Go to gym", complited: true },
        { id: 2, task: "Go to home", complited: false },
        { id: 3, task: "Go to work", complited: false },
        { id: 4, task: "Go to xanut", complited: true },
        { id: 5, task: "buy panini", complited: true },
        { id: 6, task: "Get lounch", complited: false },
        { id: 7, task: "Update calendar", complited: false },
        { id: 8, task: "Sleep", complited: false },
    ];
    const [state, dispatch] = useReducer(reducer, data);

    return (
        <div className="text-white">
            <DataContext.Provider value={{ state, dispatch }}>
                <TodoAddForm />
                <TodoControlBtns />
                <TodoList />
                <TodoFooter />
            </DataContext.Provider>
        </div>
    );
}

export default memo(App);
