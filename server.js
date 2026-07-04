
const express = require('express');
const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());

app.use('/api/users', usersRouter);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ mesaage: 'internal error' });
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));