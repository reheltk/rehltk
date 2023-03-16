const jwt = require("jsonwebtoken");

exports.creatAdminJWT = (data) => {
    return jwt.sign(data, process.env.JWT_KEY_ADMIN, {
        expiresIn: "30 days",
    });
};

exports.verifAdminJWT = (token) => {
    return jwt.verify(token, process.env.JWT_KEY_ADMIN);
};
