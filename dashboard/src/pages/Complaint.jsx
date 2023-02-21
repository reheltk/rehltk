import React from "react";
import Layout from "../components/Layout";
import ComplaintTable from "../components/ComplaintTable";

export default function Complaint() {
    return (
        <Layout title={"الشكاوي"}>
            <ComplaintTable />
        </Layout>
    );
}
