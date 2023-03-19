const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const { creatAdminJWT } = require("../utils/jwt");
exports.signUp = async (req, res) => {
    try {
        const admin = Admin.findOne({ userName: req.body.userName });
        if (!admin)
            return res.status(400).json({
                msg: "Email already exist!",
            });

        await Admin.create(req.body);

        return res.status(200).json({
            msg: "Sign Up sucsess",
        });
    } catch (error) {
        res.status(400).json({
            error,
        });
    }
};
exports.LogIn = async (req, res) => {
    try {
        const admin = await Admin.findOne({ userName: req.body.userName });

        if (!admin)
            return res.status(400).json({
                msg: "Email or password do not match",
            });

        const isMatch = admin.comparePassword(req.body.password);
        if (!isMatch)
            return res.status(400).json({
                msg: "Email or password do not match",
            });

        const token = creatAdminJWT({ id: admin._id, role: admin.role });
        const { password, ...user } = admin._doc;
        return res.status(200).json({
            token,
            ...user,
        });
    } catch (error) {
        res.status(400).json({
            error,
        });
    }
};
