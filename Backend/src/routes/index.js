const { Router } = require('express');
const allTemplates = require('../controllers/getAllTemplates');
const templatesById = require('../controllers/getTemplatesById');
const templateByName = require('../controllers/getTemplatesByName');
const pagination = require('../controllers/pagination');
const { filterByPrice, filterByTechnology, filterByCategory } = require('../controllers/filters');
const { sortTemplatesAlphabetically } = require('../controllers/filtersOrder');
const createUser = require('../controllers/signUp');
const login = require('../controllers/login');
const cors = require("cors");

const router = Router();
router.use(cors());

router.get('/templates', allTemplates);
router.get('/templates/name', templateByName);
router.get('/templates/:id', templatesById);
router.get('/pagination', pagination);
router.get('/price', filterByPrice);
router.get('/tech', filterByTechnology);
router.get('/category', filterByCategory);
router.get('/alphabetical/:order', sortTemplatesAlphabetically);
router.post('/signup', createUser);
router.post('/login', login);

module.exports = router;