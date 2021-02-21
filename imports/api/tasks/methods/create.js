// TODO: create task method
import {Tasks} from "/imports/api/tasks"

export const create = (task) => {
    const {title, dueDate, repeat, status, customFields, color} = task;
    Tasks.insert(
        {
            title,
            dueDate,
            repeat,
            status,
            customFields,
            color
        }
    )
}