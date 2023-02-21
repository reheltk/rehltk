import React from "react";
import { Box } from "@mui/material";
import Header1 from "../components/Header1";
import TravlForm from "../components/TravlForm";
import { Container } from "@mui/system";

function Order() {
    return (
        <Box>
            <Header1
                title="للحجز والإستفسار"
                desc="ارسل طلب حجز رحلة سياحية أو استفسار"
            />
            <Container
                sx={{
                    mt: 5,
                    mb: 5,
                }}
            >
                <TravlForm />
            </Container>
        </Box>
    );
}

export default Order;
