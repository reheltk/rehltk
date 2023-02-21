import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BoltIcon from "@mui/icons-material/Bolt";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DangerousIcon from "@mui/icons-material/Dangerous";
import BadgeIcon from "@mui/icons-material/Badge";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { Link } from "react-router-dom";
import { Paper, Typography } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    backgroundColor: "#EEF2F6",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function Layout({ children, title }) {
    const [open, setOpen] = React.useState(true);

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box
            sx={{
                display: "flex",
                backgroundColor: "#EEF2F6",
                height: "100vh",
            }}
        >
            <Drawer variant="permanent" anchor="right" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawer}>
                        {open ? <ClearIcon /> : <MenuIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <ListItem
                            key={"text"}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                    gap: 2,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"الصفحة الرئيسية"}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link
                        to="/tours"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <ListItem
                            key={"text"}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                    gap: 2,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <AirplanemodeActiveIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"الجولات السياحية"}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link
                        to="/order"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <ListItem
                            key={"text"}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                    gap: 2,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <BoltIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"الطلبات"}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link
                        to="/companies-orders"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <ListItem
                            key={"text"}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                    gap: 2,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <BadgeIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"طلبات الشركات"}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link
                        to="/complaint"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <ListItem
                            key={"text"}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                    gap: 2,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <DangerousIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"الشكاوي"}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link
                        to="/employment"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <ListItem
                            key={"text"}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                    gap: 2,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"طلبات التوظيف"}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Paper
                    sx={{
                        p: 2,
                        mb: 4,
                    }}
                >
                    <Typography fontWeight={"bold"} fontSize={22} variant="h5">
                        {title}{" "}
                    </Typography>
                </Paper>
                {children}
            </Box>
        </Box>
    );
}
