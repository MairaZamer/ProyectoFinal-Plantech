const User = require("../models/users");
const bcrypt = require("bcrypt");

async function createUser(userData) {
    const { name, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const createdUser = new User.create({
            username,
            email,
            password: hashedPassword,
            role: "Customer"
        });

        return createdUser;
    } catch (error) {
        console.log("Error creating user", error);
        throw error;
    }


}

module.exports = { createUser }