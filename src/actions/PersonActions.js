export const PERSON_REQUEST = 'PERSON_REQUEST'
export const PERSON_REQUEST_SUCCESS = 'PERSON_REQUEST_SUCCESS'
export const PERSON_REQUEST_ERROR = 'PERSON_REQUEST_ERROR'

export function getPersons(url) {

    return dispatch => {
        dispatch({
            type: PERSON_REQUEST,
        })
        fetch(url)
        .then(response => response.json())
        .then(persons => dispatch({
            type: PERSON_REQUEST_SUCCESS,
            payload: {
                persons: persons.results,
                filteredPersons: persons.results,
                allPersonsInfo: persons
            }
        }))
        .catch(error => dispatch({
            type: PERSON_REQUEST_ERROR,
            payload: {
                error
            }
        }))
    }
}