import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#f59d31",
        },
        background: {
            default: "#ffffff",
        },
    },
    typography: {
        allVariants: {
            fontFamily: "Tajawal",
        },
    },
});

export default theme;
