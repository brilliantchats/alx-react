import { FETCH_COURSE_SUCCESS, SELECT_COURSE,UNSELECT_COURSE } from "../actions/courseActionTypes"
export const courseReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_COURSE_SUCCESS: {
            const data = action.data.map(course => {
                course['isSelected'] = false;
                return course
            });
            return state.concat(...data);
        }
        case SELECT_COURSE: {
            return state.map(course => {
                if (course.id === action.id) {
                    course.isSelected = true;
                    return course;
                }
                return course;
            });
        }
        case UNSELECT_COURSE: {
            return state.map(course => {
                if (course.id === action.id) {
                    course.isSelected = false;
                    return course;
                }
                return course;
            });
        }
        default: {
            return state;
        }
    }
}