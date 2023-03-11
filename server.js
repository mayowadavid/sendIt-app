const http = require('http')
const { parse } = require('url')
const { createServer } = require('http')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const blogHandler = (req, res, parsedUrl) => {
  const { pathname, query } = parsedUrl
  app.render(req, res, '/blog', query)
}

app.prepare().then(() => {
  createServer((req, res) => {
    const { host } = req.headers
    const parsedUrl = parse(req.url, true)

    if (host.startsWith('blog.')) {
      blogHandler(req, res, parsedUrl)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
