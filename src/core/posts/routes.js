var express = require('express');
var router = express.Router()
var controllers = require('./post.controller');

module.exports = (app) => {
    app.get('/',controllers.getIndexPage);
    app.get('/posts', controllers.getPosts);
    app.post('/posts/create', controllers.createPost);
    app.get('/posts/details/:id', controllers.postDetails);
}
