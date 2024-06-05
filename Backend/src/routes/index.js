const { Router } = require('express');
const allTemplates = require('../controllers/getAllTemplates');
const templatesById = require('../controllers/getTemplatesById');
const templateByName = require('../controllers/getTemplatesByName');
const login = require('../controllers/login');
const createUser = require('../controllers/signUp');
const pagination = require('../controllers/pagination');
const { filterByPrice, filterByTechnology } = require('../controllers/filters');

const router = Router();

router.get('/templates', allTemplates);
router.get('/templates/name', templateByName);
router.get('/templates/:id', templatesById);
router.get('/login', login);
router.get('/pagination', pagination);
router.get('/price', filterByPrice);
router.get('/tech', filterByTechnology);
router.post('/signup', createUser)

module.exports = router;