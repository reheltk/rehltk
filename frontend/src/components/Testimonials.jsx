import { Avatar, Rating, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Testimonials() {
    return (
        <>
            <Stack direction="row" gap={3}>
                <Avatar sx={{ width: 60, height: 60 }} />
                <Stack>
                    <Typography gutterBottom variant="h5" component="h5">
                        محمد خالد
                    </Typography>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography gutterBottom variant="h6" component="h5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Facilis, corporis.
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
}

export default Testimonials;
