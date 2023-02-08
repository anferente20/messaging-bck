import express, { Router } from "express";
import FirebaseAdmin from "../../../data/remote/firebase";
import PushNotificationImplementation from "../../../data/repositories/push-notifications-implementation";
import PromotionsController from "../../controllers/v1/promotions.controller";

export default(): Router => {
    const router = express.Router();

    const controller = new PromotionsController(new PushNotificationImplementation(new FirebaseAdmin()));

    router.post('/send-promotion', controller.sendPromotion);

    return router;
}