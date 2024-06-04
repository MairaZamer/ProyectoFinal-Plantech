const { products } = require('../db');
const axios = require("axios");

const allTemplates = async (req, res) => {
    try {
        const response = await axios.get("https://api.mockaroo.com/api/c10ecd20?count=30&key=a5f575a0");
        return res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = allTemplates;