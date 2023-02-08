import PushNotificationRepository from "../../domain/repositories/push-notificationsr-repository";
import FirebaseAdmin from "../remote/firebase";


export default class PushNotificationImplementation implements PushNotificationRepository {


    constructor(readonly firebaseAdmin: FirebaseAdmin){}


    sendNotificationToTopic(topic: string): void {
        this.firebaseAdmin.sendPushNotificationToTopic(topic);
    }
    sendNotificationToDevice(userId: string): void {
    }
    
}