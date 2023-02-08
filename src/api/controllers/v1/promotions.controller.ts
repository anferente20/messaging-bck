import { Request, Response} from "express";
import FirebaseAdmin from "../../../data/remote/firebase";
import PushNotificationImplementation from "../../../data/repositories/push-notifications-implementation";
import PushNotificationRepository from "../../../domain/repositories/push-notificationsr-repository";

export default class PromotionsController {


    constructor(readonly repository: PushNotificationRepository){}

    sendPromotion = (req:Request, res:Response) => {
        this.repository.sendNotificationToTopic('acmevision');
        res.send('OK');
    } 
}