const Router = require('express');
const allTemplates = require('../controllers/getAllTemplates');
const templatesById = require('../controllers/getTemplatesById');

const router = Router();

router.get('/templates', allTemplates);
router.get('/templates/:id', templatesById);

module.exports = router;