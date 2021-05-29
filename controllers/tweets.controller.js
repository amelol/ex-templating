// Iteration 3: import tweets data
const tweetsDb = require('../data/tweets');

// Iteration 3: list tweets from file
module.exports.list = (req, res, next) => {
  // Order tweets desc by date

  
  // Iteration 4: filter tweets by user checking the query param 'name'
  const user = req.query.user;
  let tweets 
  if (user) {
    tweets = tweetsDb.filter((tweet) => tweet.user.includes(user));
  } else {
    tweets = tweetsDb;
  }

  tweets.sort((a, b) => b.createdAt - a.createdAt);    
  res.render('tweets/list', {tweets})
}   

// Iteration 5: Create tweet validating body params
module.exports.create = (req, res, next) => {}

// Iteration 6: find tweet by id path param and delete it if exists
module.exports.delete = (req, res, next) => {}
