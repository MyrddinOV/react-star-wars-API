export const PLANET_REQUEST = 'PLANET_REQUEST'
export const PLANET_REQUEST_SUCCESS = 'PLANET_REQUEST_SUCCESS'
export const PLANET_REQUEST_ERROR = 'PLANET_REQUEST_ERROR'

export function getPlanets(url) {

    return dispatch => {
        dispatch({
            type: PLANET_REQUEST,
        })
        fetch(url)
        .then(response => response.json())
        .then(planets => dispatch({
            type: PLANET_REQUEST_SUCCESS,
            payload: {
                planets: planets.results,
                filteredPlanets: planets.results,
                allPlanetsInfo: planets
            }
        }))
        .catch(error => dispatch({
            type: PLANET_REQUEST_ERROR,
            payload: {
                error
            }
        }))
    }
}