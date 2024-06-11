const { Users } = require('../db');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Faltan datos' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const [user, created] = await Users.findOrCreate({
            where: { email },
            defaults: {
                username,
                email,
                password: hashedPassword
            }
        });

        if (!created) {
            return res.status(409).json({ message: 'El usuario ya existe' });
        }

        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = createUser; 