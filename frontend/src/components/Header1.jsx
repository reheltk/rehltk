import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

function Header1({ title, desc }) {
    const theme = useTheme();
    console.log(theme);
    return (
        <Box
            bgcolor={theme.palette.secondary.main}
            height={200}
            style={{
                width: "100%",
                padding: 50,
                textAlign: "center",
                color: "white",
            }}
        >
            <Typography variant="h4" component="h3" fontWeight={"bold"}>
                {title}
            </Typography>
            <Typography> {desc}</Typography>
        </Box>
    );
}

export default Header1;
