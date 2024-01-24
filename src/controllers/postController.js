const prisma = require("../config/prisma")
const createError = require("../utils/createError")

exports.getAllPost = async (req, res, next) => {
    try {
        const { search } = req.params
        const posts = await prisma.post.findMany({
            where: {
                title: search 
            },
            take : 3
        })

        if (posts.length <= 0) {
            return createError(400, 'Posts Not Found')
        }
        res.json({ post: posts })
    } catch (error) {
        next(error)
    }

}

exports.getPostById = async (req, res, next) => {
    try {
        const { postId } = req.params

        if (isNaN(Number(postId))) {
            return createError(400, 'Post ID should be number')
        }

        const post = await prisma.post.findFirst({
            where: {
                id: Number(postId)
            }
        })

        if (!post) {
            return createError(400, 'Post Not Found')
        }
        res.json({ post })

    } catch (error) {
        next(error)
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const { title, published, authorId } = req.body

        if (!title || !authorId) {
            return createError(400, 'Invalid data')
        }
        if (typeof published !== "boolean") {
            return createError(400, 'Publish data shold be boolean')
        }

        const newPost = await prisma.post.create({
            data: {
                title,
                published,
                authorId
            },
        })
        res.json({ post: newPost })

    } catch (error) {
        next(error)
    }

}

exports.updatePost = async (req, res, next) => {
    try {
        const { postId } = req.params
        const { title, published } = req.body

        const post = await prisma.post.findFirst({
            where: {
                id: Number(postId)
            }
        })
        
        if (!post) {
            return createError(400, 'Post Not Found')
        }

        const updatedPost = await prisma.post.update({
            where: {
                id: Number(postId)
            },
            data: {
                title,
                published
            }
        })
        res.json({ post: updatedPost })

    } catch (error) {
        next(error)
    }
}

exports.deletePost = async (req, res, next) => {
    const { postId } = req.params

    try {
        await prisma.post.delete({
            where: {
                id: Number(postId)
            }
        })
    } catch (error) {
        next(error)
    }
    res.json({ message: 'Delete Post' })
}