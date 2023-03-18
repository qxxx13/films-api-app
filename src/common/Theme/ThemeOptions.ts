import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#7f95d1"
        },
        secondary: {
            main: "#4f5a8e"
        },
        background: {
            default: "#2E2D4D",
            paper: "#201f37"
        }
    }
});
