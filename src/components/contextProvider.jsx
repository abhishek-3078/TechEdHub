// CounterContext.js
import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
//   const [count, setCount] = useState(0);
  const [loginDivDisplay,setloginDivDisplay] = useState(false);
//   const increment = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   const decrement = () => {
//     setCount(prevCount => prevCount - 1);
//   };

//   const value = { count, increment, decrement,setCount };

  return (
    <CounterContext.Provider value={{loginDivDisplay,setloginDivDisplay}}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  return useContext(CounterContext);
};
