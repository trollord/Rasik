import React, { ReactNode, Dispatch, createContext, useReducer } from 'react';
import { useContext } from 'react';


// Define the initial state
const initialState = {
  servicePage: null,
};

interface ContextProps {
    state: any;
    dispatch: Dispatch<any>;
  }

  
// Create the context
export const MyContext = createContext<ContextProps>({
    state: initialState,
    dispatch: () => null,
  });

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SERVICE_PAGE':
      return { ...state, servicePage: action.payload };
    default:
      return state;
  }
};

// Create a provider component
export const MyProvider = ({ children }: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};


export const stateProvider = () => {
    return useContext(MyContext);
}
