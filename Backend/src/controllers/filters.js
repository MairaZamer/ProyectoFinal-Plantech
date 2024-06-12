const axios = require('axios');

const filterByEditorial = async (req, res) => {
    try {
        const { editorial } = req.query;

        const response = await axios.get("https://my.api.mockaroo.com/e_books_palace.json?key=a5f575a0");
        const books = response.data;

        const filteredEditorial = books.filter(book => {
            const bookArray = book.editorial.split(',');
            return bookArray.some(edit => edit.trim().toLowerCase() === editorial.toLowerCase());
        });

        if (filteredEditorial.length === 0) {
            return res.status(404).json({ message: "No se encontraron plantillas que coincidan con el filtro." });
        }

        res.status(200).json(filteredEditorial);

    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const filterByCategory = async (req, res) => {
    try {
        const { category } = req.query;

        const response = await axios.get("https://my.api.mockaroo.com/e_books_palace.json?key=a5f575a0");
        const books = response.data;

        const filteredCategory = books.filter(book => {
            const categoryArray = book.category.split(',');
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

const filterByAuthor = async (req, res) => {
    try {
        const { author } = req.query;

        const response = await axios.get("https://my.api.mockaroo.com/e_books_palace.json?key=a5f575a0");
        const books = response.data;

        const filteredAuthor = books.filter(book => {
            const authorArray = book.author.split(',');
            return authorArray.some(c => c.trim().toLowerCase() === author.toLowerCase());
        });

        if (filteredAuthor.length === 0) {
            return res.status(404).json({ message: "No se encontraron plantillas que coincidan con el filtro." });
        }

        res.status(200).json(filteredAuthor);

    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = { filterByEditorial, filterByCategory, filterByAuthor };