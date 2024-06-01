const { products } = require('../db');
const { Op } = require('sequelize');


async function templateByName(req, res) {
  try {
    const { name } = req.query;
    
    const templates = await products.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      }
    });

    if (templates.length === 0) {
      res.status(404).json({ error: 'No se encontro ningun resultado' })
      return;
    }
    res.status(200).json(templates);

  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = templateByName ;
