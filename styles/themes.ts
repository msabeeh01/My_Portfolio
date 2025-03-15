import { Theme, ThemeColors, ThemeMode } from "@/types/theme";

const lightColors: ThemeColors = {
  primary: '#3b82f6',
  secondary: '#10b981',
  background: '#ffffff',
  text: '#1f2937',
  accent: '#f59e0b',
}

const darkColors: ThemeColors = {
  primary: '#3b82f6',
  secondary: '#10b981',
  background: '#ffffff',
  text: '#1f2937',
  accent: '#f59e0b',
}


/**
 *  Base theme for entire app
 * **/
const baseTheme = {
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  borderRadius: {
    xs: '0.05rem',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '9999px',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
}

/**
    * The available themes for the application, indexed by their corresponding mode (light/dark) using Record.
    *
    * Meaning, for every ThemeMode (light/dark), it must have the corresponding Theme type colors, and the ...baseTheme (go to def for info)
    * @example
    * themes[Themes.LIGHT].colors[0] // returns the first color code for light themes
    */
export const themes: Record<ThemeMode, Theme> = {
  light: {
    ...baseTheme,
    colors: lightColors
  },
  dark: {
    ...baseTheme,
    colors: darkColors
  }

}

