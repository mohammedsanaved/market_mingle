/** @format */

// theme.ts
export interface Theme {
  colors: {
    primary: string;
    lightPrimary: string;
    secondary: string;
    tertiary: string;
    Paragraphtext: string;
  };
  backgrounds: {
    primary: string;
    secondary: string;
  };
  typography: {
    fontFamily: string;
    fontSize: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  fonts: {
    niconne: string[];
    poppins: string[];
  };
}

export const defaultTheme: Theme = {
  colors: {
    primary: '#1F2937',
    lightPrimary: '#374151',
    secondary: '#FFFFFF',

    tertiary: '#F2BC51',
    Paragraphtext: '#D1D5DB',
  },
  backgrounds: {
    primary: '#1E1E1E',
    secondary: '#F9FAFB',
    // #D1D5DB
  },
  fonts: {
    niconne: ['Niconne', 'cursive'],
    poppins: ['Poppins', 'sans-serif'],
  },
  typography: {
    fontFamily: "'Arial', sans-serif",
    fontSize: '16px',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '32px',
  },
};
