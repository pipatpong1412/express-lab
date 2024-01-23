exports.register = (req, res, next) => {
    const { email, password } = req.body
    res.json({ email, password })
}

exports.login = (req, res, next) => {
    res.json({ message: "Login Successfully" })
}

exports.forgetPassword = (req, res, next) => {
    res.json({ message: "Forget Password Successfully" })
}

exports.verifyForgetPassword = (req, res, next) => {
    res.json({ message: "Verify Forget Password Successfully" })
}

exports.resetPassword = (req, res, next) => {
    res.json({ message: "Reset Password Successfully" })
}