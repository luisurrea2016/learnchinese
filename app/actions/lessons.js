import Api from '../services'

export const SET_FETCHED_LESSONS = 'SET_FETCHED_LESSONS';

export function fetchLessons() {
    return (dispatch, getSate) => {
        const params = [
            `p=1`,
            'p=2'
        ].join('&');

        return Api.get(`/api/?${params}`).then(resp => {
            dispatch(setFetchedLessons({ lessons: resp }));
        }).catch(error => {
            console.log(error);
        });
    };
}

export function setFetchedLessons({ lessons }) {
    return {
        type: SET_FETCHED_LESSONS,
        lessons,
    }
}