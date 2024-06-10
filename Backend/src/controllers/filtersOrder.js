const axios = require('axios');

const sortTemplatesAlphabetically = async (req, res) => {
    try {
        const { order } = req.params;

        const response = await axios.get("https://my.api.mockaroo.com/prueba_pf.json?key=a5f575a0");
        const templates = response.data;
        
        const sortedTemplates = templates.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return order === 'desc' ? 1 : -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return order === 'desc' ? -1 : 1;
            return 0;
        });

        res.status(200).json(sortedTemplates);
        
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = { sortTemplatesAlphabetically };