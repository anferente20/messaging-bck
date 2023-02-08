

export default interface PushNotificationRepository {
    sendNotificationToTopic(topic:string):void;
    sendNotificationToDevice(userId:string):void;
}