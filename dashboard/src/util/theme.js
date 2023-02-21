import { createTheme } from "@mui/material";

const theme = createTheme({
    direction: "rtl",
    palette: {
        mode: "light",
        backgroundColor: "#EEF2F6",
    },
    typography: {
        allVariants: {
            fontFamily: "Tajawal",
            textAlign: "right",
        },
    },
});

export default theme;
