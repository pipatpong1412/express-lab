// const express = require('express')
// const app = express()

// app.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
// });

// app.get('/', (req, res) => {
//     res.json({
//         title: 'My First Web App',
//         message: 'Hello'
//     })
// })

// app.get('/product/price/:price/discount/:discount', (req, res) => {
//     const { price, discount } = req.params
//     res.json({ price, discount })
// })

// app.get('/sum/:a/:b', (req, res) => {
//     const { a, b } = req.params
//     res.json({ a, b })
// })

// app.post('/products/:id', (req, res) => {
//     const { id } = req.params
//     res.json({ id })
// })

// app.get('/user/:id/bookings/:bld', (req, res) => {
//     const { id, bld } = req.params
//     res.json({ id, bld })
// })

// app.get('/product', (req, res, next) => {
//     const { order, page, limit } = req.query
//     res.json({ order, page, limit })
// })

// app.get('/product', (req, res, next) => {
    //     const { order, page, limit } = req.body
    //     res.json({ order, page, limit })
    // })
    
    // app.get('/product', (req, res, next) => {
    //     const { username, password } = req.body
    
    //     res.json({ username, password })
    // })

// const express = require('express')
// const app = express()
// app.use(express.json())

// const middleWare = (req, res, next) => {
//     const { message } = req.body
//     req.myMessage = { message }
//     next()
// }

// app.get('/', (req, res, next) => {
//     console.log(req.myMessage);
//     res.json({})
// })

// app.path('/', middleWare, (req, res, next) => {
//     console.log(req.myMessage);
//     res.json({})
// })

// const express = require('express')
// const multer = require('multer')
// const app = express()
// const fs = require('fs')
// const upload = multer({ dest: 'uploads/' })
// app.use(express.json())

// app.post('/', upload.single('image'), (req, res, next) => {
    //     try {
        //         console.log(req.file);
        //         res.json({})
        
        //     } catch(err) {
//         next(err)

//     } finally {
    //         setTimeout(() => {
        //             fs.unlinkSync(req.file.path)
        //         }, 3000);
        //     }
        
        // })
        
// app.use(express.json())

// app.get('/product', (req, res, next) => {
//     const { page, limit, order } = req.query
//     res.json({ page, limit, order })
// })

// app.post('/product', (req, res, next) => {
//     const { name, price, description } = req.body
//     res.json({ name, price, description })
// })

// app.put('/product/:id', (req, res, next) => {
//     const { name, price, description } = req.body
//     const { id } = req.params
//     res.json({ name, price, description, id })
// })

// app.delete('/product/:id', (req, res, next) => {
//     const { id } = req.params
//     res.json({ id })
// })

const express = require('express')
const cors = require('cors')
const productRoute = require('./routes/product.route')
const errorHandler = require('./middleware/error')
const notFoundHandler = require('./middleware/not-found')
const authRoute = require('./routes/auth.route')
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use('/product', productRoute)
app.use('/auth', authRoute)
app.use(errorHandler)
app.use('*', notFoundHandler)

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})
