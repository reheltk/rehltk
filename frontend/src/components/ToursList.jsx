import { Grid } from "@mui/material";
import React from "react";
import TorsCard from "./TorsCard";

function ToursList() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TorsCard />
                </Grid>
            </Grid>
        </>
    );
}

export default ToursList;
