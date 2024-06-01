const allTemplates = require('./getAllTemplates');

const pagination = async (req, res) => {
    try {
        const page = parseInt(req.query.pagenumber);
        const productsByPage = 3;
        const templates = await allTemplates();
        const pageNumber = Math.ceil(templates.length / productsByPage);
        if (page > pageNumber) {
            throw new Error(`El numero de la pagina no puede se mayor ${pageNumber}`)
        }

        const paginated = templates.slice((page - 1) * productsByPage, page * productsByPage)
        res.status(200).json(paginated);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = pagination;
