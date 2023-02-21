import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import TravlForm from "../components/TravlForm";

function ToursDetiles() {
    return (
        <Box>
            <img
                src="/images/Artboard-1-1-1.png"
                alt=""
                style={{
                    height: 600,
                    width: "100%",
                    objectFit: "fill",
                }}
            />
            <Container
                sx={{
                    mt: 4,
                    mb: 4,
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        mb: 5,
                    }}
                >
                    استمتع برحلة 10 أيام في تايلاند وزيارة جميع المعالم السياحية
                    في تايلاند والأنشطة السياحية .
                </Typography>

                <TravlForm />
            </Container>
        </Box>
    );
}

export default ToursDetiles;
