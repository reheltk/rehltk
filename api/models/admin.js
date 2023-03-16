const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcryptjs"); // Erase if already required

// Declare the Schema of the Mongo model
var adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
});

adminSchema.pre("save", function (next) {
    let admin = this;

    // only hash the password if it has been modified (or is new)
    if (!admin.isModified("password")) return next();

    // generate a salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(admin.password, salt, function (err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            admin.password = hash;
            next();
        });
    });
});

adminSchema.methods.comparePassword = async function comparePassword(data) {
    return bcrypt.compare(data, this.password);
};

//Export the model
module.exports = mongoose.model("Admin", adminSchema);
