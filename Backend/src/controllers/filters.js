const allTemplates = require("./getAllTemplates");

const filterByTechnology = async (req, res) => {
    try {
        const { tech } = req.query;

        const templates = await allTemplates();
        
        let filteredTech = [];
        
        const filteredTechnology= templates.filter(template => {
            return template.technologies.some(t => t.tech.toLowerCase() === tech.toLowerCase());
            });
        
        if (filteredTech.length === 0) {
            return res.status(404).json({ message: "No se encontraron plantillas que coincidan con el filtro." });
        }

        res.status(200).json(filteredTechnology);
        
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

const filterByPrice = async (req, res) => {
    try {
        const { minimo, maximo } = req.body;

        const templates = await allTemplates();

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

module.exports = { filterByPrice, filterByTechnology };