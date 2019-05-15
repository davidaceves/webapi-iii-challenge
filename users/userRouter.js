const express = require('express');

const Users = require('./userDb.js');
const Posts = require('../posts/postDb.js');

const router = express.Router();

// router.post('/', async (req, res) => {
//     try {

//     }
// });

router.post('/:id/posts', async (req, res) => {

});

router.get('/', async (req, res) => {
    try {
        const users = await Users.get();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving users'
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await Users.getById(req.params.id);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving the user'
        })
    }
});

router.get('/:id/posts', async (req, res) => {

});

router.delete('/:id', async (req, res) => {

});

router.put('/:id', async (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
