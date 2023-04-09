import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#00C8F1"
        },
        secondary: {
            main: "#ADCAD6"
        },
        background: {
            default: "#0C1B33",
            paper: "#011E4C"
        }
    }
});
