module.exports = (req, res) => {
  res.json({
    body: req.query.n1 + req.query.n2,
    query: req.query,
    cookies: req.cookies,
  })
}
