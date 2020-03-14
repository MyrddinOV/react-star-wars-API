import { PERSON_REQUEST, PERSON_REQUEST_SUCCESS, PERSON_REQUEST_ERROR } from "../actions/PersonActions";



let initialState = {
    persons: [],
    filteredPersons: [],
    loading: false,
    errors: null
}

export function personReducer(state = initialState, action) {
    switch (action.type) {
        case PERSON_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case PERSON_REQUEST_SUCCESS: {
            const { persons, filteredPersons, allPersonsInfo } = action.payload
            return {
                ...state,
                loading: false,
                persons,
                filteredPersons,
                allPersonsInfo
            }
        }
        case PERSON_REQUEST_ERROR: {
            const { error } = action.payload
            return {
                ...state,
                loading: false,
                error
            }
        }
        default:
            return state
        
    }
}