'use client'
import { ThemeContext } from "@/contexts/ThemeContext"
import React, { useContext } from "react"

//this is not really required, its just sort of middleware to prevent it being used without ThemeProvider
export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme must be used with a ThemeProvider")
  }

  return context;
}
