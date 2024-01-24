const prisma = require('../config/prisma')
const createError = require('../utils/createError')

exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const userExit = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (userExit) {
            return createError(400, 'User already exist')
        }

        const newUser = await prisma.user.create({
            data: {
                email,
                password,
                profile: {
                    create: {
                        bio,
                    },
                },
            },
            include: {
                profile: true
            }
        })

        res.status(201).json({ user: newUser })

    } catch (error) {
        next(error)
    }

}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const userExit = await prisma.user.findFirst({
            where: {
                email
            },
            select: {
                email: true,
                id: true
            }
        })
        if (!userExit) {
            return createError(400, 'User not exist')
        }
        if(password !== userExit.password) {
            return createError(400, 'Email or Password invalid')
        }

        delete userExit.password

        res.status(201).json({ user: userExit })
    } catch (error) {
        next(error)
    }
}