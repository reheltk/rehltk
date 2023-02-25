import { Grid } from "@mui/material";
import React from "react";
import TorsCard from "./TorsCard";
import { useQuery } from "react-query";
import axios from "../util/axios";

const getTours = async () => {
    const { data } = await axios.get("/tours");
    return data;
};

function ToursList() {
    const { data } = useQuery("tours", getTours);

    return (
        <>
            <Grid container spacing={2}>
                {data &&
                    data.map((tour) => (
                        <Grid item xs={12} md={4}>
                            <TorsCard tour={tour} />
                        </Grid>
                    ))}
            </Grid>
        </>
    );
}

export default ToursList;
