const express = require('express');
const authorRouter = require('./routes/authorRoutes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(`/api`, authorRouter);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})