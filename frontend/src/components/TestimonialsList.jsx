import { Grid } from "@mui/material";
import React from "react";
import Testimonials from "./Testimonials";

function TestimonialsList() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Testimonials />
            </Grid>
            <Grid item xs={12} md={4}>
                <Testimonials />
            </Grid>
            <Grid item xs={12} md={4}>
                <Testimonials />
            </Grid>
        </Grid>
    );
}

export default TestimonialsList;
