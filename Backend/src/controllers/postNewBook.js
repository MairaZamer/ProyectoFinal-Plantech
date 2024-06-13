const { Book } = require("../db")

const postNewBook = async (req, res) => {
    const { name, editorial, category, author, price, image, description, file } = req.body;
    try {
        const existingBook = await Book.findOne({ where: { name } });
        if (existingBook) {
            return res.status(400).send({ message: "Ya existe este libro en la base de datos." })
        }
        const lastBook = await Book.findOne({ order: [["id", "DESC"]] });
        let nextId = 1;
        if (lastBook) {
            nextId = lastBook.id + 1;
        }
        const newBook = await Book.create({ id: nextId, name, editorial, category, author, price, image, description, file });
        return res.status(200).send(newBook);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Ocurrió un error al crear el libro." })
    }
}
module.exports = {
    postNewBook
}