const db = require('../database')

class AuthorController {
    async getAuthorById(req, res) {
        const id = req.params.id

        const requestedAuthor = await db.query('SELECT * FROM authors WHERE id = $1', [id]);

        res.json(requestedAuthor.rows[0])
    }

    async getAuthors(req, res) {
        const allAuthors =await db.query('SELECT * FROM authors');

        res.json(allAuthors.rows)
    }
}

module.exports = new AuthorController()