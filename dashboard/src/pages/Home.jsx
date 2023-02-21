import React from "react";
import Layout from "../components/Layout";
import OrderTable from "../components/OrderTable";

function Home() {
    return (
        <Layout title={"الصفحة الرئيسية"}>
            <OrderTable />
        </Layout>
    );
}

export default Home;
