const notFoundHandler = (req, res, next) => {
    res.status(400).json({ message: 'Not Found' })
}

module.exports = notFoundHandler