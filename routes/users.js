// CRUD => Create, Retrive, Update, Delete
const express = require('express');
const router = express.Router();

let users = [
    { id:1, name:'ahmed', age:12 },
    { id:2, name:'mona', age:34 },
    { id:3, name:'tamer', age: 56 }
];
// first endpoint to get users homepage displaying all users 
router.get('/', (req,res) => res.json(users));
// second endpoint to get specific user using id (router parameter) 
router.get('/:id', (req,res) => {
    const u = users.find(x => x.id === Number(req.params.id));
    if (!u) 
        return res.status(404).json({ message: "user not found" });
    res.json(u)
});
// third endpoint to insert new user in users array (fake data) => db
router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name)
        return res.status(400).json({ message: "name field is required" });
    const user = { id: Date.now(), name };
    users.push(user);
    res.status(201).json(user);
});
// fourth endpoint to update user with specific id in users array using router parameter in request body
// (fake data) => db
router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const idx = users.findIndex(u => u.id === id);
    if (!idx === -1)
        return res.status(404).json({ message: "user not found" });
    uses[idx] = { ...users[idx], ...req.body }
    res.json(users[idx]);
});
// fifth endpoint to delete user with specific id in users array using router parameter in request body
// (fake data) => db
router.delete('/:id', (req, res) => {
    const idx = users.filter(u => u.id !== Number(req.params.id));
    res.status(204).end();
});

module.exports = router;


