const axios = require("axios");

const pagination = async (req, res) => {
    try {
        const page = parseInt(req.query.pagenumber);
        const productsByPage = 5;

        if (isNaN(page) || page < 1) {
            return res.status(400).json({ error: 'El número de página debe ser un número entero mayor que 0' });
        }

        const response = await axios.get("https://my.api.mockaroo.com/prueba_pf.json?key=a5f575a0");
        const templates = response.data;

        if (!Array.isArray(templates)) {
            throw new Error('Error al obtener las plantillas');
        }

        const pageNumber = Math.ceil(templates.length / productsByPage);

        if (page > pageNumber) {
            return res.status(400).json({ error: `El número de página no puede ser mayor que ${pageNumber}` });
        }

        const paginated = templates.slice((page - 1) * productsByPage, page * productsByPage);
        res.status(200).json(paginated);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = pagination;
