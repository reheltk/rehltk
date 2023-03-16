import { Login, PersonAddAlt1, Settings } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../conext/AurhContexe";

export default function FlotingSittingButton() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            color="secondary"
            sx={{
                position: { md: "absolute", xs: "bloc" },
                bottom: { md: 16 },
                right: { md: 16 },
            }}
            icon={<Settings color="secondary" />}
        >
            {user.role === "admin" && (
                <SpeedDialAction
                    onClick={() => navigate("/admin/AddAdmin")}
                    icon={<PersonAddAlt1 color="secondary" />}
                    tooltipTitle={"اضافة موظف او مدير"}
                />
            )}
            <SpeedDialAction
                onClick={logout}
                icon={<Login color="secondary" />}
                tooltipTitle={"تسجيل خروج"}
            />
        </SpeedDial>
    );
}
