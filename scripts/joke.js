// Generated by CoffeeScript 2.3.1
// Description:
//   Get some Dad humor from SuiteBorg
//
// Dependencies:
//   None
//
// Configuration:
//
// Commands:
//   hubot joke me - SuiteBorg has assimilated countless thousands of puns.
//
// Author:
//   Ryan

var https;

https = require('https');

module.exports = function(robot) {
  return robot.respond(/joke me/i, function(res) {
    return robot.http("https://icanhazdadjoke.com/").header("Accept", "text/plain").get()(function(err, resp, body) {
      var errObj;
      if (err) {
        throw err;
      }
      if (resp.statusCode !== 200) {
        errObj = {
          script: "joke.coffee",
          url: "https://icanhazdadjoke.com/",
          response: resp.statusCode,
          body: body
        };
        robot.brain.set('borgerror',JSON.stringify(errObj));
        return;
      }
      return res.reply(body.toUpperCase());
    });
  });
};