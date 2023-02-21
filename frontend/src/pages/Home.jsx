import React from "react";
import Header from "../components/Header";
import TestimonialsList from "../components/TestimonialsList";
import ToursList from "../components/ToursList";
import TravlForm from "../components/TravlForm";
import Section from "../components/Ui/Section";

function Home() {
    return (
        <>
            <Header />
            <Section title="الوجهات السياحية الدولية">
                <ToursList />
            </Section>
            <Section title="اراء العملاء">
                <TestimonialsList />
            </Section>
            <Section>
                <TravlForm />
            </Section>
        </>
    );
}

export default Home;
