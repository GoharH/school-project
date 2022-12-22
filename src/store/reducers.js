import { combineReducers } from "redux";
import SchoolReducer from './school-reducer';
import TeacherReducer from './teacher-reducer';
import PeopleReducer from './people-reducer';

const rootReducer = combineReducers({
    SchoolReducer,
    TeacherReducer,
    PeopleReducer,

})
export default rootReducer