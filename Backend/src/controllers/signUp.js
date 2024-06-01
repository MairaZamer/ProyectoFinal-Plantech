const { users } = require('../db');

const createUser = async (req, res) => {
    try {
        const { email, password } = req.body
        
        if(!email || !password) return res.status(400).json({message: 'Faltan datos'})

        const user = await users.findOrCreate({where: { email, password }})

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

module.exports = createUser;