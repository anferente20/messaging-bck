import { Application } from "express";

//creation of routes
export default(app: Application) => {
    app.get('/', (req, res)=> {
        res.send('Guenas')
    })
}