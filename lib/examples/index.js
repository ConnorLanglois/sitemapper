"use strict";

var _sitemapper = _interopRequireDefault(require("../assets/sitemapper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sitemapper = new _sitemapper["default"](); // const Google = new Sitemapper({
//   url: 'https://www.google.com/work/sitemap.xml',
//   timeout: 15000, // 15 seconds
// });
// Google.fetch()
//   .then(data => console.log(data.sites))
//   .catch(error => console.log(error));
// sitemapper.timeout = 5000;
// sitemapper.fetch('http://wp.seantburke.com/sitemap.xml')
//   .then(({ url, sites }) => console.log(`url:${url}`, 'sites:', sites))
//   .catch(error => console.log(error));
// sitemapper.fetch('http://www.cnn.com/sitemaps/sitemap-index.xml')
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
// sitemapper.fetch('http://www.stubhub.com/new-sitemap/us/sitemap-US-en-index.xml')
//   .then((data) => console.log(data))
//   .catch(error => console.log(error));

sitemapper.fetch('https://onionplay.co/sitemaps.xml').then(function (data) {
  return console.log(data);
})["catch"](function (error) {
  return console.log(error);
});
//# sourceMappingURL=index.js.map