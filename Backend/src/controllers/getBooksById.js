const { Book } = require("../db");
const axios = require("axios");

const booksById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get("https://my.api.mockaroo.com/e_books_palace.json?key=a5f575a0");

        const getBookById = response.data.find(book => book.id === Number(id))

        if (!getBookById) return res.status(400).json({ error: 'No se encontró el libro' });

        return res.status(200).json(getBookById);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = booksById;

