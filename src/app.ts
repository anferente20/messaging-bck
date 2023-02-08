import express, {Application} from 'express';
import api from './api/routes/v1'

export default class App{
    private app: Application = express();

    async initialize(): Promise<void> {
        api(this.app);
        const port = process.env.PORT ?? 8000;
        this.app.listen(port, () =>{
            console.log('running on port '+port)
        });
    }
}