// requiring express router
const express = require('express');
const router = express.Router();
const connection = require('../database');

// creating a new route
router.get('/available', function(req, res) {
    res.send(connection.state == 'disconnected' ? 'nok' : 'ok');
});

// create user
router.post('/user', function(req, res) {
    const { username, password, idEvento } = req.body;
    connection.query('INSERT INTO users (username, password, idEvento) VALUES (?, ?)',
    [username, password, idEvento], function(err, result) {
        if (err) {
            res.send('nok');
            return;
        }
        res.send('ok');
    });
});

// authenticate user
router.post('/user/authenticate', function(req, res) {
    const { username, password } = req.body;
    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(err, result) {
        if (err) {
            res.send('nok');
            return;
        }
        res.send(result.length > 0 ? 'ok' : 'nok');
    });
});

// delete all users
router.delete('/user', function(req, res) {
    connection.query('DELETE FROM users', function(err, result) {
        if (err) {
            res.send('nok');
            return;
        }
        res.send('ok');
    });
});

// exporting the router
module.exports = router;