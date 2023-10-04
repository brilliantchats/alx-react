import * as notifications from "../../dist/notifications.json";
import {schema, normalize} from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {idAttribute: "guid"});
const notification = new schema.Entity("notifications",
{
    author: user,
    context: message
});

const normalized = normalize(notifications.default, [notification]);
export {normalized};

export function getAllNotificationsByUser(userId){
    const notifications = normalized.entities.notifications;
    const messages = normalized.entities.messages;
    const notificationsByUser = [];
  
    for (const prop in notifications) {
      if (notifications[prop].author === userId) {
        notificationsByUser.push(messages[notifications[prop].context]);
      }
    }
  
    return notificationsByUser;
}

export const notificationsNormalizer = (data) => {
  const normalizedData = normalize(data, [notification]);
  return normalizedData.entities;
};
