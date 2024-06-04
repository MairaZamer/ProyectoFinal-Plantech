const { Products } = require("../db");
const axios = require("axios");

const templatesById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get("https://my.api.mockaroo.com/prueba_pf.json?key=a5f575a0");

        const getTemplateById = response.data.find(template => template.id === Number(id))

        if (!getTemplateById) return res.status(400).json({ error: 'No se encontró la plantilla' });

        return res.status(200).json(getTemplateById);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = templatesById;

