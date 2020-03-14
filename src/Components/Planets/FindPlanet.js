import React from 'react'

export function FindPlanet({ planets, filteredPlanets, setFilteredData, allPlanetsInfo }) {
    

    function findName(e) {
        let value = e.target.value.toLowerCase()

        let filter = filteredPlanets.filter(planet => {
            return planet.name.toLowerCase().includes(value)

        })
        if (!value) {
            setFilteredData(planets)
        } else {
            setFilteredData(filter)
        }
        

    }

    let style = allPlanetsInfo.loading ? 'notActive' : 'find-form'
    return (
        <input type='text' onChange={findName} className={style} placeholder='Find planets'></input>
    )
}

