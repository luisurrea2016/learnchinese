import createReducer from '../services';
import SET_FETCHED_LESSONS from '../actions'

export const fetchedLessons = createReducer({}, {
    [SET_FETCHED_LESSONS](state, action) {
        //@TODO: rfactor this into a reducer.
        let newState = {}
        action.lessons.forEach(lesson => {
            let { id } = lesson;
            newState[id] = Object.assign({}, lesson, { id });
        });
        return newState;
    },

});