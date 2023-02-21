import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Section({ children, title }) {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    marginTop: 10,
                    marginBottom: 10,
                }}
            >
                <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                        textAlign: "center",
                        mb: 5,
                        fontWeight: "bold",
                    }}
                >
                    {title}
                </Typography>
                {children}
            </Box>
        </Container>
    );
}

export default Section;
