import express from "express"
import { TransactionController, TransactionDetailController, ReportController, ItemsController } from "./controller.js"

const routes = express.Router()

routes.get('/items/', ItemsController.readAll)
routes.get('/items/:id', ItemsController.readById)
routes.post('/items/', ItemsController.save)
routes.delete('/items/:id', ItemsController.delete)
routes.patch('/items/:id', ItemsController.Update)

routes.get('/transactions/', TransactionController.readAll)
routes.get('/transactions/:id', TransactionController.readById)
routes.post('/transactions/', TransactionController.save)
routes.delete('/transactions/:id', TransactionController.delete)
routes.patch('/transactions/:id', TransactionController.Update)

routes.get('/transactionDetails/', TransactionDetailController.readAll)
routes.get('/transactionDetails/:id', TransactionDetailController.readById)
routes.post('/transactionDetails/', TransactionDetailController.save)
routes.delete('/transactionDetails/:id', TransactionDetailController.delete)
routes.patch('/transactionDetails/:id', TransactionDetailController.update)

routes.get('/report/daily/', ReportController.daily)
routes.get('/report/weekly/', ReportController.weekly)
routes.get('/report/monthly/', ReportController.monthly)
routes.get('/report/yearly/', ReportController.yearly)

export default routes