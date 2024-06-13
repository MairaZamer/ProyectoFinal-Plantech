const { Book } = require('../db');
const axios = require("axios");

const allBooks = async (req, res) => {
    try {
        const response = await axios.get("https://my.api.mockaroo.com/e_books_palace.json?key=a5f575a0");
        let DB = await response.data.map(e => ({
            id: e.id,
            name: e.name,
            editorial: e.editorial,
            category: e.category,
            author: e.author,
            price: e.price,
            image: e.image,
            description: e.description,
            file: e.file
        }))

        let getDB = await Book.findAll();

        if (!getDB.length) {
            await Book.bulkCreate(DB);
            console.log("Se guardaron los datos correctamente");
            getDB = await Book.findAll();
        }
        return res.status(200).json(getDB);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = allBooks;