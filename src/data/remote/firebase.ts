import * as admin from 'firebase-admin';

const googleService = require ('../../../acmevision-fcm.json');

export default class FirebaseAdmin{
    private app: admin.app.App;

    constructor() {
        //Credenciales de conexiṕón
        const _credential = admin.credential.cert(googleService)

        this.app = admin.initializeApp({
            credential: _credential
        });
    }

    sendPushNotificationToTopic(topic: string) {
        this.app.messaging().send({
            topic,
            notification: {
                title: 'Acmevision',
                body: 'The Acmevision'
            }
        });
    }
}