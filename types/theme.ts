export type ThemeMode = 'light' | 'dark'

/** 
 * An interface defining the colors for a Theme 
 * **/
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
}

/** 
 *  Interface defining a Theme which contains colors, spacing, borderRadius, fontSizes
 * **/
export interface Theme {
  colors: ThemeColors;
  spacing: {
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string,
  };
  borderRadius: {
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string,
  };
  fontSizes: {
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string,
  };
}
