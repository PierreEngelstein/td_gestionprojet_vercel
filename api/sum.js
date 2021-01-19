module.exports = (req, res) => {
  res.json({
    body: parseInt(req.query.n1) + parseInt(req.query.n2),
    query: req.query,
    cookies: req.cookies,
  })
}
