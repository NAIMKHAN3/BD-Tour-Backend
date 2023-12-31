import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './router/router'
import errorHandler, { notfoundandler } from './middleware/errorHandler'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .send({ success: true, message: 'BD Tour Server is Running' })
})

app.use('/api/v1', router)
app.use(notfoundandler)

app.use(errorHandler)

export default app
