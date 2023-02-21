import Layout from "../components/Layout";
import OrderTable from "../components/OrderTable";

export default function Orders() {
    return (
        <Layout title={"الطلبات"}>
            <OrderTable />
        </Layout>
    );
}
