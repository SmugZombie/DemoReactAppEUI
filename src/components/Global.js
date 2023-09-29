// GlobalContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const GlobalContext = createContext();

// Create the context provider
export const GlobalProvider = ({ children }) => {
  // Define your state variables here
  const [userData, setUserData] = useState({});
  const [isLoadingUserData, setIsLoadingUserData ] = useState(true);
  const [isMobileDevice, setIsMobileDevice ] = useState(false);
  const [variable1, setVariable1] = useState('');
  const [variable2, setVariable2] = useState('');

  // Create functions to update the variables
  const updateUserData = (newValue) => {
    setUserData(newValue);
  };

  const updateVariable1 = (newValue) => {
    setVariable1(newValue);
  };

  const updateVariable2 = (newValue) => {
    setVariable2(newValue);
  };

  const updateIsLoadingUserData = (newValue) => {
    setIsLoadingUserData(newValue)
  }

  const updateIsMobileDevice = (newValue) => {
    setIsMobileDevice(newValue)
  }

  // Define the context value with state and functions
  const contextValue = {
    userData,
    variable1,
    variable2,
    isLoadingUserData,
    isMobileDevice,
    updateUserData,
    updateVariable1,
    updateVariable2,
    updateIsLoadingUserData,
    updateIsMobileDevice
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// Create a custom hook to access the context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};