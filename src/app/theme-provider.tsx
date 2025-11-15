'use client';

import { PropsWithChildren } from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const baseTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      primary: { main: "#8FC436" },
      secondary: { main: "#0F172A" },
      background: {
        default: "#F4F7EE",
        paper: "#FFFFFF",
      },
      text: {
        primary: "#0F172A",
        secondary: "#475569",
      },
    },
    typography: {
      fontFamily: "var(--font-geist-sans), 'Inter', 'Roboto', sans-serif",
      h1: { fontWeight: 600, letterSpacing: "-0.02em" },
      h2: { fontWeight: 600, letterSpacing: "-0.01em" },
      body1: { fontSize: "1em", lineHeight: 1.8 },
      body2: { fontSize: "1em", lineHeight: 1.6 },
      button: { textTransform: "none", fontWeight: 600 },
    },
    shape: { borderRadius: 18 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            paddingInline: "1.5rem",
            paddingBlock: "0.65rem",
          },
        },
      },
    },
  }),
);

export default function ThemeProviderClient({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
