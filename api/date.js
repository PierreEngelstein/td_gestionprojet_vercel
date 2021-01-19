module.exports = (req, res) => {
  res.json({
    body: Date.now(),
    query: req.query,
    cookies: req.cookies,
  })
}
