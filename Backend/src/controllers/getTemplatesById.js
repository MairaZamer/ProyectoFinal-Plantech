const { products } = require("../db");

const templatesById = async (req, res) => {
    try {
        const { id } = req.params;
        const template = await products.findByPk(id);

        if(!template) return res.status(400).json({ error: 'plantilla No Encontrada'});
        return res.status(200).json(template);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
    
module.exports = templatesById;
    
 