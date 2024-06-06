const axios = require('axios');

const filterByTechnology = async (req, res) => {
    try {
        const { tech } = req.query;

        const response = await axios.get("https://my.api.mockaroo.com/prueba_pf.json?key=a5f575a0");
        const templates = response.data;

        const filteredTechnology = templates.filter(template => {
            const techArray = template.technologies.split(',');
            return techArray.some(t => t.trim().toLowerCase() === tech.toLowerCase());
        });

        if (filteredTechnology.length === 0) {
            return res.status(404).json({ message: "No se encontraron plantillas que coincidan con el filtro." });
        }

        res.status(200).json(filteredTechnology);

    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const filterByPrice = async (req, res) => {
    try {
        const { minimo, maximo } = req.body;

        const response = await axios.get("https://my.api.mockaroo.com/prueba_pf.json?key=a5f575a0");
        const templates = response.data;

        let filteredPrice = [];

        if (minimo !== undefined && maximo !== undefined) {
            filteredPrice = templates.filter(template => {
                return template.price >= minimo && template.price <= maximo;
            });
        } else if (minimo !== undefined) {
            filteredPrice = templates.filter(template => {
                return template.price >= minimo;
            });
        } else if (maximo !== undefined) {
            filteredPrice = templates.filter(template => {
                return template.price <= maximo;
            });
        } else {
            filteredPrice = templates;
        }

        if (filteredPrice.length === 0) {
            return res.status(404).json({ message: "No se encontraron productos que coincidan con el filtro." });
        }

        res.status(200).json(filteredPrice);

    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const filterByCategory = async (req, res) => {
    try {
        const { category } = req.query;

        const response = await axios.get("https://my.api.mockaroo.com/prueba_pf.json?key=a5f575a0");
        const templates = response.data;

        const filteredCategory = templates.filter(template => {
            const categoryArray = template.categories.split(',');
            return categoryArray.some(c => c.trim().toLowerCase() === category.toLowerCase());
        });

        if (filteredCategory.length === 0) {
            return res.status(404).json({ message: "No se encontraron plantillas que coincidan con el filtro." });
        }

        res.status(200).json(filteredCategory);

    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = { filterByPrice, filterByTechnology, filterByCategory };