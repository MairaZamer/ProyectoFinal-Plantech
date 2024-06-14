const { Book } = require('../db');
const axios = require("axios");
const pagination = require('./pagination');
const { filterByEditorial, filterByCategory, filterByAuthor } = require('./filters');

const allBooks = async (req, res) => {
    const { page = 1, productsByPage = 30, editorial, category, author } = req.query;

    try {
        
        const response = await axios.get("https://my.api.mockaroo.com/e_books_palace.json?key=a5f575a0");
        const DB = response.data.map(e => ({
            id: e.id,
            name: e.name,
            editorial: e.editorial,
            category: e.category,
            author: e.author,
            price: e.price,
            image: e.image,
            description: e.description,
            file: e.file
        }));

        let getDB = await Book.findAll();

        if (!getDB.length) {
            await Book.bulkCreate(DB);
            console.log("Se guardaron los datos correctamente");
            getDB = await Book.findAll();
        }

        let filteredBooks = [...getDB];

        if (editorial) {
            filteredBooks = filterByEditorial(filteredBooks, editorial);
        }

        if (category) {
            filteredBooks = filterByCategory(filteredBooks, category);
        }

        if (author) {
            filteredBooks = filterByAuthor(filteredBooks, author);
        }

        if (filteredBooks.length === 0) {
            return res.status(404).json({ message: "No se encontraron libros que coincidan con los filtros." });
        }

        let paginatedResult;
        try {
            paginatedResult = pagination(filteredBooks, page, productsByPage);
        } catch (paginationError) {
            return res.status(400).json({ error: paginationError.message });
        }

        return res.status(200).json(paginatedResult);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = allBooks;
