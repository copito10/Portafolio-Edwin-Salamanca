import React, { createContext, useContext } from 'react';

interface ColorModeContextType {
  getAccentColor: () => string;
  getSecondaryColor: () => string;
}

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

export const ColorModeProvider = ({ children }: { children: React.ReactNode }) => {
  const getAccentColor = () => '#ff4d4d'; // Color fijo
  const getSecondaryColor = () => '#ff8080'; // Color fijo

  return (
    <ColorModeContext.Provider value={{ getAccentColor, getSecondaryColor }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};
