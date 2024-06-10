const { Router } = require('express');
const allTemplates = require('../controllers/getAllTemplates');
const templatesById = require('../controllers/getTemplatesById');
const templateByName = require('../controllers/getTemplatesByName');
const { login } = require('../controllers/login');
const createUser = require('../controllers/signUp');
const pagination = require('../controllers/pagination');
<<<<<<< HEAD
const { filterByPrice, filterByTechnology } = require('../controllers/filters');
const signUpController = require("../controllers/userController");
const cors = require("cors");
=======
const { filterByPrice, filterByTechnology, filterByCategory } = require('../controllers/filters');
const { sortTemplatesAlphabetically } = require('../controllers/filtersOrder');
>>>>>>> 752dce5b37c7ee81136b14730a1227dc1e216dd0

const router = Router();
router.use(cors());

router.get('/templates', allTemplates);
router.get('/templates/name', templateByName);
router.get('/templates/:id', templatesById);
router.post('/login', login);
router.get('/pagination', pagination);
router.get('/price', filterByPrice);
router.get('/tech', filterByTechnology);
<<<<<<< HEAD
router.post('/register', signUpController.createUser)
=======
router.get('/category', filterByCategory);
router.get('/alphabetical/:order', sortTemplatesAlphabetically);
router.post('/signup', createUser);
>>>>>>> 752dce5b37c7ee81136b14730a1227dc1e216dd0

module.exports = router;