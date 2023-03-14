;
const { parse } = require('url');

module.exports = (req, res) => {
  const { host } = req.headers;
  const { pathname } = parse(req.url, true);
  const subdomain = host.split('.')[0];

  if (subdomain === 'blog') {
    // Render the blog page
    res.statusCode = 200;
    res.setHeader('Location', '/blog');
    res.end();
  } else {
    // Return a 404 error for all other subdomains
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Cannot find page for subdomain: ${subdomain}`);
  }
};
