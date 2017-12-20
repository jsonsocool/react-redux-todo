import { combineReducers } from "redux";
import count from './counter';
import todos from './todos';
import visibilityFilter from './visibilityFilter';


const appReducer = combineReducers({
    count,
    todos,
    visibilityFilter
})
export default appReducer;