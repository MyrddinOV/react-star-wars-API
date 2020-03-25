import React, { useState } from 'react'
import Modal from 'react-modal';

import { NavLink } from 'react-router-dom'
import Preloader from '../Preloader';
import { useLocation } from 'react-router-dom';

Modal.setAppElement('#root')

const PagePlanetInfo = ({ planet, closePlanetCard, planetCardIsOpen, residents }) => {

    const [residentInfo, setResidentInfo] = useState([])
    const [personCardIsOpen, setIsOpen] = useState(false)
    const [openCard, setIsOpenCard] = useState(false)

    function closePersonCard() {
        setIsOpen(false);
    }

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




    const planetCardStyle = planetCardIsOpen ? 'modal' : 'notActive'
    const personCardStyle = personCardIsOpen ? 'modal' : 'notActive'
    const residentCardStyle = openCard ? 'notActive' : 'active'
    return (
        <div>

            {/* <Modal
                isOpen={planetCardIsOpen}
                onRequestClose={closePlanetCard}
                className={planetCardStyle}
                overlayClassName="overlay"
                contentLabel="Example Modal"
            >

                <h2>{planet.name}</h2>
                <button className='close-button' onClick={closePlanetCard} />
                <p >Rotation period: {planet.rotation_period} hour</p>
                <p>Orbital period: {planet.orbital_period} days</p>
                <p>Diameter: {planet.diameter} km</p>
                <p>Climate: {planet.climate}</p>
                <p>Gravity: {planet.gravity}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Surface water: {planet.surface_water} %</p>
                <p>Population: {planet.population}</p>
                <div className='residents'>
                    {residents.map((people, i) => (

                        <span className='residents__name' key={i} onClick={() => residentLinkClickHandler(people)}>
                            {`Resident ${i + 1} `}
                        </span>

                    ))}
                </div>


            </Modal>

            <Modal
                isOpen={personCardIsOpen}
                onRequestClose={closePersonCard}
                className={personCardStyle}
                overlayClassName="overlay"
                contentLabel="Example Modal"
            >
                <Preloader loading={openCard}>
                    <div className={residentCardStyle}>
                        <h2>{residentInfo.name}</h2>
                        <p >Height: {residentInfo.height} cm</p>
                        <p>Mass: {residentInfo.mass} kg</p>
                        <p>Hair color: {residentInfo.hair_color} </p>
                        <p>Skin color: {residentInfo.skin_color}</p>
                        <p>Eye color: {residentInfo.eye_color}</p>
                        <p>Birth year: {residentInfo.birth_year}</p>
                        <p>Gender: {residentInfo.gender} </p>

                    </div>
                    <button className='close-button' onClick={closePersonCard} />

                </Preloader >

            </Modal>

            <div>

            </div> */}
            <h2>{planet.name}</h2>
            <button className='close-button' onClick={closePlanetCard} />
            <p >Rotation period: {planet.rotation_period} hour</p>
            <p>Orbital period: {planet.orbital_period} days</p>
            <p>Diameter: {planet.diameter} km</p>
            <p>Climate: {planet.climate}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface water: {planet.surface_water} %</p>
            <p>Population: {planet.population}</p>
            <div className='residents'>
                {residents.map((people, i) => (

                    <span className='residents__name' key={i} >
                        <NavLink
                            // className="nav-link"
                            to='/planets2'>
                            {`Resident ${i + 1} `}
                        </NavLink>
                    </span>

                ))}
            </div>

            <NavLink
                className="nav-link"
                to='/planets'>Planets
                </NavLink>
        </div>
    )
}

export default PagePlanetInfo