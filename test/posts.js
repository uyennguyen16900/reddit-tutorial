// test/posts.js
const app = require("./../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

// Import the Post model from our models folder so we
// we can use it in our tests.
const Post = require('../models/Post');
const server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('Posts', function() {
  const agent = chai.request.agent(server);
  // Post that we'll use for testing purposes
  const newPost = {
      title: 'post title',
      url: 'https://www.google.com',
      summary: 'post summary'
  };
  it("should create with valid attributes at POST /posts/new", function (done) {
    // TODO: test code goes here!
  });
});
