import React from "react";
import CompaniesOrderTable from "../components/CompaniesOrderTable";
import Layout from "../components/Layout";

export default function CompaniesOrders() {
    return (
        <Layout title={"طلبات الشركات"}>
            <CompaniesOrderTable />
        </Layout>
    );
}
