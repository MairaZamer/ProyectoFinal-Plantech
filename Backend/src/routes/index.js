const { Router } = require('express');
const allBooks = require('../controllers/getAllBooks');
const booksById = require('../controllers/getBooksById');
const booksByName = require('../controllers/getBooksByName');
const pagination = require('../controllers/pagination');
const { filterByPrice, filterByTechnology, filterByCategory } = require('../controllers/filters');
const { sortTemplatesAlphabetically } = require('../controllers/filtersOrder');
const createUser = require('../controllers/signUp');
const login = require('../controllers/login');
const cors = require("cors");

const router = Router();
router.use(cors());

router.get('/books', allBooks);
router.get('/books/name', booksByName);
router.get('/books/:id', booksById);
router.get('/pagination', pagination);
router.get('/price', filterByPrice);
router.get('/tech', filterByTechnology);
router.get('/category', filterByCategory);
router.get('/alphabetical/:order', sortTemplatesAlphabetically);
router.post('/signup', createUser);
router.post('/login', login);

module.exports = router;