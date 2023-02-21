import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavDrawer({ setDrawer, drawer }) {
    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor="left"
                    open={drawer}
                    onClose={() => setDrawer(false)}
                >
                    <Box
                        sx={{
                            width: 300,
                            gap: 3,
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "right",
                            padding: "40px 20px",
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
                </Drawer>
            </React.Fragment>
        </div>
    );
}
