import { Avatar, Rating, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Testimonials({ testimon }) {
    return (
        <>
            <Stack direction="row" gap={3}>
                <Avatar sx={{ width: 60, height: 60 }} />
                <Stack>
                    <Typography gutterBottom variant="h5" component="h5">
                        {testimon.name}
                    </Typography>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography gutterBottom variant="h6" component="h5">
                        {testimon.desc}
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
}

export default Testimonials;
