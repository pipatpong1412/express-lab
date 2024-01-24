const notFoundHandler = (req, res, next) => {
    res.status(404).json({ message: 'resource is not found on this server' })
}

module.exports = notFoundHandler