import { Application } from "express";
import promotionsRouter from './promotions.router'

//creation of routes
export default(app: Application) => {
    app.get('/', (req, res)=> {
        res.send('Guenas')
    })

    app.use('/api/v1/promotions', promotionsRouter());
}