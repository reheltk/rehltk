import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import CompaniesOrders from "./pages/CompaniesOrders";
import Tours from "./pages/Tours";
import Complaint from "./pages/Complaint";
import Employment from "./pages/Employment";
function App() {
    return (
        <div className="App" dir="RTL">
            <CssBaseline />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Orders />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/companies-orders" element={<CompaniesOrders />} />
                <Route path="/complaint" element={<Complaint />} />
                <Route path="/employment" element={<Employment />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default App;
