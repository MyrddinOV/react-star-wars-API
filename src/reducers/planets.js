import { PLANET_REQUEST_ERROR, PLANET_REQUEST_SUCCESS, PLANET_REQUEST, } from '../actions/PlanetActions'


let initialState = {
    planets: [],
    filteredPlanets: [],
    loading: false,
    error: null,
}


export function planetReducer(state = initialState, action) {
    switch (action.type) {
        case PLANET_REQUEST_SUCCESS: {
            const { planets, filteredPlanets, allPlanetsInfo } = action.payload
            
            return {
                ...state,
                loading: false,
                planets,
                filteredPlanets,
                allPlanetsInfo
            }
        }
        case PLANET_REQUEST: {

            return {
                ...state,
                loading: true,
            }
        }
        case PLANET_REQUEST_ERROR: {
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