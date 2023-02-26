import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import TravlForm from "../components/TravlForm";

function ToursDetiles() {
    const { state } = useLocation();
    const { tour } = state;

    return (
        <Box>
            <Box
                component="img"
                src={`https://drive.google.com/uc?export=view&id=${
                    tour?.imageUrl.split("/")[5]
                }`}
                alt=""
                sx={{
                    height: { xs: 250, md: 550 },
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
                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    استمتع برحلة 10 أيام في {tour?.title} وزيارة جميع المعالم
                    السياحية في {tour?.title} والأنشطة السياحية.
                </Typography>

                <TravlForm />
            </Container>
        </Box>
    );
}

export default ToursDetiles;
