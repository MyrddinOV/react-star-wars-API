import { combineReducers } from "redux";
import { planetReducer } from "./planets";
import { personReducer } from "./persons";


export const rootReducer = combineReducers({
    planets: planetReducer,
    filteredPlanets: planetReducer,
    allPlanetsInfo: planetReducer,
    persons: personReducer,
    filteredPersons: personReducer,
    allPersonsInfo: personReducer,
})