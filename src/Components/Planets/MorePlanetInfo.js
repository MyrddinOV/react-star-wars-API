import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Resident from '../Persons/Resident';


const MorePlanetInfo = ({ planet, residents, activePage }) => {

    const [residentInfo, setResidentInfo] = useState([])
    const [personCardIsOpen, setIsOpen] = useState(false)
    const [openCard, setIsOpenCard] = useState(false)

    function residentLinkClickHandler(residentLink) {
        setIsOpenCard(true)
        console.log(planet)
        setIsOpen(true);
        const fetchResident = async () => {
            try {
                const response = await fetch(residentLink)
                const resident = await response.json()
                setResidentInfo(resident)
                setIsOpenCard(false)

            } catch (e) { console.log('Server is not response', e) }
        }
        fetchResident()
    }

    let location = useLocation();
    console.log(location)

    return (
        <>
            <Route path={`/planets/page/:activePage/${planet.name}`} >
                <h2>{planet.name}</h2>
                <p >Rotation period: {planet.rotation_period} hour</p>
                <p>Orbital period: {planet.orbital_period} days</p>
                <p>Diameter: {planet.diameter} km</p>
                <p>Climate: {planet.climate}</p>
                <p>Gravity: {planet.gravity}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Surface water: {planet.surface_water} %</p>
                <p>Population: {planet.population}</p>
                <div className='residents2'>
                    {residents.map((people, i) => (

                        <span className='residents__name' key={i} onClick={() => residentLinkClickHandler(people)}>
                            {`Resident ${i + 1} `}
                        </span>

                    ))}
                </div>
                <Link to={`/planets/page/:${activePage}`}>Back</Link>
            </Route>
            
            <Resident residentInfo={residentInfo} personCardIsOpen={personCardIsOpen} openCard={openCard} setIsOpen={setIsOpen} />
        </>
    )
}

export default MorePlanetInfo