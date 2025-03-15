"use client"
import { useTheme } from "@/hooks/useTheme"
import React, { ReactNode, useContext } from "react"

interface ButtonProps {
  onClick?: () => void,
  children?: ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick
}) => {
  const { theme } = useTheme();

  const buttonStyle: React.CSSProperties = {
    backgroundColor: theme.colors.background
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

