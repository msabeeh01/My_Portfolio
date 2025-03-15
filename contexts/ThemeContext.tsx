'use client'
import { themes } from "@/styles/themes";
import { Theme, ThemeMode } from "@/types/theme";
import React, { ReactNode, createContext, useState } from "react";

interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

/**
 *  Create a context, this one has the themes.light exported from themes.ts 
 * **/
export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.light,
  themeMode: 'light',
  toggleTheme: () => { }
})

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')
  //local theme is equal to the value of the Key mentioned in the record, in this case light mode so light theme is loaded
  const theme = themes[themeMode]

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
  }

  //since ThemeContext needs 3 values, the above three are used
  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider >
  )
}
