// TODO: tasks get method
import { Tasks } from "/imports/api/tasks";
import {useTracker} from "meteor/react-meteor-data";

export const get = () => {
    return useTracker(() => Tasks.find({ isPrivate: false }, { sort: { title: 1 } }).fetch());
}