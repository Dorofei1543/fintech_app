import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { FC, PropsWithChildren } from "react";
import theme from "../lib/ThemeContext";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
