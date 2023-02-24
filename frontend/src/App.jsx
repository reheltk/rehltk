import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import About from "./pages/About";
import Order from "./pages/Order";
import Companies from "./pages/Companies";
import Complaint from "./pages/Complaint";
import Employment from "./pages/Employment";
import ToursDetiles from "./pages/ToursDetiles";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App" dir="rtl">
            <CssBaseline />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/order" element={<Order />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/complaint" element={<Complaint />} />
                <Route path="/employment" element={<Employment />} />
                <Route path="/tours/:id" element={<ToursDetiles />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
