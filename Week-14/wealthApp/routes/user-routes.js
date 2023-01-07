const express = require('express');
const router = express.Router();
const { getUsers, signup } = require('../controllers/user-controller');

router.get("/users", getUsers);
router.post("/signup", signup);

module.exports = router;