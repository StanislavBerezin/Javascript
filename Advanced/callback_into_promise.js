// export the utils
const util = require("util");

// example with twitter and flickr
// if need to to put twitter get callback into promise, then we define it
// like "twitter.get" and = util.promisify(twitter.get), now everytime when we call it
// it will be wrapped in a promise.
twitter.get = util.promisify(twitter.get);
flickr.get = util.promisify(flickr.get);