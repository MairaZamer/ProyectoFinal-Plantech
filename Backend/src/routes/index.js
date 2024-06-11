const { Router } = require('express');
const allTemplates = require('../controllers/getAllTemplates');
const templatesById = require('../controllers/getTemplatesById');
const templateByName = require('../controllers/getTemplatesByName');
const { login } = require('../controllers/login');
const pagination = require('../controllers/pagination');
const { filterByPrice, filterByTechnology } = require('../controllers/filters');
const signUpController = require("../controllers/userController");
const cors = require("cors");

const router = Router();
router.use(cors());

router.get('/templates', allTemplates);
router.get('/templates/name', templateByName);
router.get('/templates/:id', templatesById);
router.post('/login', login);
router.get('/pagination', pagination);
router.get('/price', filterByPrice);
router.get('/tech', filterByTechnology);
router.post('/register', signUpController.createUser)

module.exports = router;