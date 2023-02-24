// import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 4, md: 10 },
                gap: 4,
            }}
        >
            <img src="/logo.png" height={90} alt="logo"></img>
            <Stack direction={{ xs: "column", sm: "row" }} gap={5}>
                <Link
                    to="/"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    <Typography>الصفحة الرئيسية</Typography>
                </Link>
                <Link
                    to="/about"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    <Typography>من نحن</Typography>
                </Link>
                <Link
                    to="/order"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    <Typography>حجز برامج سياحية</Typography>
                </Link>
            </Stack>
            {/* <Stack direction="row" gap={5}>
                <Link
                    to="#"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    <Facebook />
                </Link>
                <Link
                    to="#"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    <Instagram />
                </Link>
                <Link
                    to="#"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    <Twitter />
                </Link>
            </Stack> */}
            <Typography>جميع الحقوق محفوظة © رحلتك للسياحة 2023</Typography>
        </Box>
    );
}

export default Footer;
