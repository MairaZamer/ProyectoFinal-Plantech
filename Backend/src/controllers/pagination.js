const { Book } = require('../db');

const pagination = async (req, res) => {
    try {
        const page = parseInt(req.query.pagenumber);
        const productsByPage = 5;

        if (isNaN(page) || page < 1) {
            return res.status(400).json({ error: 'El número de página debe ser un número entero mayor que 0' });
        }

        const books = await Book.findAll();

        if (!Array.isArray(books)) {
            throw new Error('Error al obtener las plantillas');
        }

        const pageNumber = Math.ceil(books.length / productsByPage);

        if (page > pageNumber) {
            return res.status(400).json({ error: `El número de página no puede ser mayor que ${pageNumber}` });
        }

        const paginated = books.slice((page - 1) * productsByPage, page * productsByPage);
        res.status(200).json(paginated);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = pagination;
