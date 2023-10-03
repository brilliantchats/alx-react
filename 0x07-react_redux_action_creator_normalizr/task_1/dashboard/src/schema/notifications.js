import * as notifications from "../../notifications.json";
import {schema, normalize} from "normalizr";

export function getAllNotificationsByUser(userId){
    return notifications.default.filter(
        notification => notification.author.id === userId
        ).map(item => item.context);
}

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {idAttribute: "guid"});
const notification = new schema.Entity("notifications",
{
    author: user,
    context: message
});

const normalized = normalize(notifications.default, [notification]);
export {normalized};