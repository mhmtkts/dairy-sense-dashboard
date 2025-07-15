/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from 'react';

const RightPanelContext = createContext();

export const RightPanelProvider = ({ children }) => {
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const toggleRightPanel = () => {
    setIsRightPanelOpen(prev => !prev);
  };

  return (
    <RightPanelContext.Provider value={{ isRightPanelOpen, toggleRightPanel }}>
      {children}
    </RightPanelContext.Provider>
  );
};

export const useRightPanel = () => useContext(RightPanelContext);