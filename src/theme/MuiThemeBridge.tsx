import { useMemo } from 'react';
import { ThemeProvider as MuiProvider, createTheme } from '@mui/material/styles';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * Bridges our lightweight ThemeContext (light/dark class on <html>) into a
 * Material UI theme so any MUI components (chatbot, dialogs, inputs) match the
 * brand palette and the active mode. We intentionally skip <CssBaseline /> so
 * MUI does not reset the existing Tailwind/shadcn styling.
 */
const MuiThemeBridge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          primary: { main: '#0D9488', light: '#14B8A6', dark: '#0B7268' },
          secondary: { main: '#7C3AED', light: '#8B5CF6', dark: '#6D28D9' },
          background:
            theme === 'dark'
              ? { default: '#0F172A', paper: '#1E293B' }
              : { default: '#FFFFFF', paper: '#FFFFFF' },
        },
        shape: { borderRadius: 14 },
        typography: {
          fontFamily: 'Inter, system-ui, sans-serif',
          button: { textTransform: 'none', fontWeight: 600 },
        },
      }),
    [theme],
  );

  return <MuiProvider theme={muiTheme}>{children}</MuiProvider>;
};

export default MuiThemeBridge;
