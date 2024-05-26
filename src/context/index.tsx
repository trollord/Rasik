import React, { createContext, useReducer, useContext, ReactNode } from 'react';

const initialState = { };
const MyContext = createContext();


const myReducer = (state, action) => {
    switch (action.type) {
        case 'SET_VALUE':
            return { ...state, value: action.payload };
        default:
            return state;
    }
};

export const MyProvider = ({ children }: { children : ReactNode}) => {
    const [state, dispatch] = useReducer(myReducer, initialState);

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
};

