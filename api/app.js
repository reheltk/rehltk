const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const {
    addOrder,
    addCoumpanyOrder,
    addComplaint,
    addEmployee,
    getToursList,
    addSales,
} = require("./utils/googleSheet");
const connectDB = require("./utils/db");
const adminController = require("./controllers/adminController");
//=====================
// MIDDLEWARE
//=====================
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//=====================
// ROUTES
//=====================

app.post("/addOrder", async (req, res) => {
    try {
        await addOrder(req.body);
        res.json({
            ok: "ok",
        });
    } catch (error) {}
});

app.post("/addCoumpanyOrder", async (req, res) => {
    try {
        await addCoumpanyOrder(req.body);
        res.json({
            ok: "ok",
        });
    } catch (error) {}
});
app.post("/addComplaint", async (req, res) => {
    try {
        await addComplaint(req.body);
        res.json({
            ok: "ok",
        });
    } catch (error) {}
});
app.post("/addEmployee", async (req, res) => {
    try {
        await addEmployee(req.body);
        res.json({
            ok: "ok",
        });
    } catch (error) {}
});
app.post("/addSales", async (req, res) => {
    try {
        await addSales(req.body);
        res.json({
            ok: "ok",
        });
    } catch (error) {}
});

app.get("/tours", async (req, res) => {
    try {
        const rows = await getToursList(req.body);
        let tours = [];
        for (let row of rows) {
            tours.push({
                title: row.title,
                desc: row.desc,
                imageUrl: row.imageUrl,
            });
        }

        res.json(tours);
    } catch (error) {}
});

app.post("/login", adminController.LogIn);
app.post("/signUp", adminController.signUp);

// 404 error
app.use((req, res, next) => {
    res.status(404).json({
        status: "error",
        statusCode: 404,
        massage: "404 - page not found!",
    });
});

connectDB();
app.listen(process.env.PORT, () =>
    console.log(` listening on port ${process.env.PORT}!`)
);
