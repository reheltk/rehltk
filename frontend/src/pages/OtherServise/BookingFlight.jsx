import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import TravlForm from "../../components/TravlForm";

function BookingFlight() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <Box>
            <Box
                component="img"
                src="/images/Booking-Flights-through-Travel-Agents.jpg"
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
                    حجز طيران - فنادق
                </Typography>

                <TravlForm />
            </Container>
        </Box>
    );
}

export default BookingFlight;
