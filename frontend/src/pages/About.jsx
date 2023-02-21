import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Header1 from "../components/Header1";

function About() {
    return (
        <Box>
            <Header1 title="رحلتك للسفر والسياحة " desc="من نحن" />
            <Container
                sx={{
                    mt: 5,
                    mb: 5,
                }}
            >
                <Typography
                    variant="subtitle1"
                    color={"GrayText"}
                    sx={{
                        maxWidth: 1000,
                        fontSize: 20,
                    }}
                >
                    نحن مؤسسة رحلتك للسفر والسياحة، متخصصة في تغطية البرامج
                    السياحية حول العالم، بدأت نشاطها من مدينة الرياض في المملكة
                    العربية السعودية نسعى بشكل متواصل لخدمة العملاء على مستوى
                    الخليج بأكمله، لتغطية رغبات العملاء بتجربة رحلات متميزة
                    وآمنة ومختلفة احـجـز مـعـنـا وقـــول تــم ولا تـشـيـل هـم
                </Typography>
            </Container>
        </Box>
    );
}

export default About;
