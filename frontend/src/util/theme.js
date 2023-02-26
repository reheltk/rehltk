import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#0D68A2",
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
