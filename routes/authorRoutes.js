const Router = require('express');
const authorController = require('./../controllers/authorController');


const authorRouter = new Router()

authorRouter.get('/authors/:id', authorController.getAuthorById);
authorRouter.get(`/authors`, authorController.getAuthors);

module.exports = authorRouter;
