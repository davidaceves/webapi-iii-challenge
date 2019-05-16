const express = require('express');
const router = express.Router();

const Users = require('./userDb.js');
const Posts = require('../posts/postDb.js');

router.post('/', validateUser, async (req, res) => {
    try {
      const user = await Users.insert(req.body);
      res.status(201).json(user);
    } catch (error) {
        res.status(500).json({
            message: 'Error adding the user'
        })
    }
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
        });
    }
});

router.get('/:id/posts', async (req, res) => {
    try {
        const posts = await Posts.getById(req.params.id);

        if (posts) {
            res.status(200).json(posts);
        } else {
            res.status(404).json({ message: 'Posts not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving the posts'
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await Users.remove(req.params.id);
        
        if (user) {
            res.status(200).json({ message: 'The user has been deleted'});
        } else {
            res.status(404).json({ message: 'The user could not be found'})
        } 
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error removing the user.'
        })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = await Users.update(req.params.id, req.body)

        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({
                message: 'The user could not be found'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error updating the user'
        });
    }
});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {
    if (req.body) {
        next();
    } else {
        res.status(400).json({ message: "Missing user data"})
    }
};

function validatePost(req, res, next) {

};

module.exports = router;
