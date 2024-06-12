const axios = require('axios');

async function booksByName(req, res) {
  try {
    const { name } = req.query;

    if (!name) {
      res.status(400).json({ error: 'El parámetro "name" es requerido' });
      return;
    }

    const apiUrl = `https://my.api.mockaroo.com/e_books_palace.json?key=a5f575a0`;

    const response = await axios.get(apiUrl);
    const books = response.data;

    const filteredName = books.filter(book => {
      return book.name && book.name.toLowerCase().includes(name.toLowerCase());
    });

    if (filteredName.length === 0) {
      res.status(404).json({ error: 'No se encontró ningún resultado' });
      return;
    }

    res.status(200).json(filteredName);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = booksByName;


// const { Products } = require('../db');
// const { Op } = require('sequelize');


// async function templateByName(req, res) {
//   try {
//     const { name } = req.query;

//     const templates = await Products.findAll({
//       where: {
//         name: {
//           [Op.iLike]: `%${name}%`
//         }
//       }
//     });

//     if (templates.length === 0) {
//       res.status(404).json({ error: 'No se encontro ningun resultado' })
//       return;
//     }
//     res.status(200).json(templates);

//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };

// module.exports = templateByName;
