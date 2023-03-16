import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ServiseCard({ image, title, to }) {
    const navigate = useNavigate();

    return (
        <Card
            sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
            }}
            onClick={() => navigate(to)}
        >
            <CardMedia component="img" height="250" src={image} alt={title} />

            <Typography
                gutterBottom
                variant="h5"
                component="p"
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(74, 100, 114, 0.3)",
                    width: "100%",
                    height: "100%",
                    color: "white",
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "center",
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingBottom: 2,
                }}
            >
                {title}
            </Typography>
        </Card>
    );
}

export default ServiseCard;
