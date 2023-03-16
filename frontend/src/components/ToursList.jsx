import { Divider, Grid, Skeleton } from "@mui/material";
import React from "react";
import TorsCard from "./TorsCard";
import ServiseCard from "./ServiseCard";
import { useQuery } from "react-query";
import axios from "../util/axios";

const getTours = async () => {
    const { data } = await axios.get("/tours");
    return data;
};

function ToursList() {
    const { data, isLoading } = useQuery("tours", getTours);

    return (
        <>
            <Grid container spacing={2}>
                {isLoading &&
                    [...Array(6)].map((_, i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <Skeleton variant="rectangular" height={250} />
                        </Grid>
                    ))}
                {data &&
                    data.map((tour, i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <TorsCard tour={tour} />
                        </Grid>
                    ))}
            </Grid>
            <Divider
                primary="Inbox"
                sx={{
                    mt: 3,
                    mb: 3,
                }}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <ServiseCard
                        to="/LssuingTouristVisas"
                        title="تاشيرات سياحية"
                        image="/images/lisinse.png"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ServiseCard
                        to="/InternationalLicense"
                        title="رخصة القيادة دولية"
                        image="/images/visa-passport.jpg"
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default ToursList;
