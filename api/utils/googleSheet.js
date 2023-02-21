const { GoogleSpreadsheet } = require("google-spreadsheet");
require("dotenv").config();

exports.addOrder = async (data) => {
    try {
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle["orders"];
        await sheet.addRow(data);
        return true;
    } catch (error) {
        return false;
    }
};

exports.addCoumpanyOrder = async (data) => {
    try {
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle["companiesOrders"];
        await sheet.addRow(data);
        return true;
    } catch (error) {
        return false;
    }
};

exports.addComplaint = async (data) => {
    try {
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle["complaint"];
        await sheet.addRow(data);
        return true;
    } catch (error) {
        return false;
    }
};
exports.addEmployee = async (data) => {
    try {
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle["employee"];
        await sheet.addRow(data);
        return true;
    } catch (error) {
        return false;
    }
};
exports.getToursList = async (data) => {
    try {
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle["tourist"];
        return await sheet.getRows();
    } catch (error) {
        return false;
    }
};
