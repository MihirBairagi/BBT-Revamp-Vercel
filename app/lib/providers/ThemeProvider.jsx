"use client";

import { ThemeProvider } from "@material-tailwind/react";

export default function MaterialThemeProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
} 