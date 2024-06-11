const { Products } = require('../db');
const axios = require("axios");

const allTemplates = async (req, res) => {
    try {
        const response = await axios.get("https://my.api.mockaroo.com/prueba_pf.json?key=a5f575a0");
        let DB = await response.data.map(e => ({
            id: e.id,
            name: e.name,
            price: e.price,
            image: e.image,
            technologies: e.technologies,
            categories: e.categories,
            file: e.file
        }))

        let getDB = await Products.findAll();

        if (!getDB.length) {
            await Products.bulkCreate(DB);
            console.log("Se guardaron los datos correctamente");
            getDB = await Products.findAll();
        }
        return res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = allTemplates;