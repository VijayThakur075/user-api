import { combineReducers } from "redux";
import users from "./User";
import posts from "./Posts";
import todos from "./Todo";
import comments from "./Comment";
import add from "./Add";
import edit from "./Edit"

const reducer =combineReducers({
    users,
    posts,
    todos,
    comments,
    add,
    edit,
})
export default reducer;