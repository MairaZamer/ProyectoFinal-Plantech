const { products } = require('../db');

const allTemplates = async (req, res) => {
    try {
        const response = await products.findAll();
        
        return res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = allTemplates;