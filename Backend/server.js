import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudnary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoutes.js'

// app config
const app = express()
const PORT = process.env.PORT || 5000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors({origin: 'https://appointment-booking-frontend-6clx.onrender.com', credentials: true}))

// api endpoint
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user', userRouter)

app.get('/', (req, res) => {
    res.send('API WORKING')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
