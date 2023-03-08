import { Grid } from "@mui/material";
import React from "react";
import Testimonials from "./Testimonials";

const testimonis = [
    {
        name: "rashed alotaibi",
        desc: "تعاملهم جدا رائع وسريعين فالخدمه كانت من اجمل السفرات اللي سفرتها مهتمين فالعميل بادق التفاصيل اشكركم.",
    },
    {
        name: "Abeer Al-Juhani",
        desc: "شركة ممتازه وموظفين محترمين جدا جزاهم الله خيرا.",
    },
    {
        name: "Abdullah Alshehri",
        desc: "السلام عليكم تجربتي كانت مع الشركة ممتازة مصداقيه وتعامل راقي.",
    },
];

function TestimonialsList() {
    return (
        <Grid container spacing={3}>
            {testimonis.map((testimon) => (
                <Grid item xs={12} md={4}>
                    <Testimonials testimon={testimon} />
                </Grid>
            ))}
        </Grid>
    );
}

export default TestimonialsList;
