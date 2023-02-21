import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "./NavDrawer";

function NavBar() {
    const [drawer, setDrawer] = useState(false);
    return (
        <>
            <AppBar position="static" elevation={0}>
                <Container>
                    <Toolbar disableGutters>
                        <Link
                            to="/"
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            <img src="/logo.png" height={90} alt="logo"></img>
                        </Link>

                        <Box
                            sx={{
                                flexGrow: 1,
                                marginInlineStart: 16,
                                gap: 3,
                                display: { md: "flex", xs: "none" },
                            }}
                        >
                            <Link
                                to="/"
                                style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                    fontSize: 15,
                                    fontWeight: "bold",
                                }}
                            >
                                الصفحة الرئيسية
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
                                حجز برامج سياحية
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
                                من نحن
                            </Link>
                            <Link
                                to="/complaint"
                                style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                    fontSize: 15,
                                    fontWeight: "bold",
                                }}
                            >
                                ارسال شكوى
                            </Link>
                            <Link
                                to="/companies"
                                style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                    fontSize: 15,
                                    fontWeight: "bold",
                                }}
                            >
                                طلبات الشركات
                            </Link>
                            <Link
                                to="/employment"
                                style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                    fontSize: 15,
                                    fontWeight: "bold",
                                }}
                            >
                                توظيف
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,

                                display: { md: "none", xs: "flex" },
                                justifyContent: "end",
                            }}
                        >
                            <IconButton onClick={() => setDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <NavDrawer drawer={drawer} setDrawer={setDrawer} />
        </>
    );
}
export default NavBar;
