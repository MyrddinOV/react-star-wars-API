import React, { useState, useEffect } from 'react';

import { FindPlanet } from './FindPlanet';

import MorePlanetInfo from './MorePlanetInfo';
import Preloader from '../Preloader';


const Planets = ({ planets, filteredPlanets, allPlanetsInfo }) => {

    const [filteredData, setFilteredData] = useState([])
    const [oneOfPlanet, setOneOfPlanet] = useState([])
    const [planetCardIsOpen, setIsOpen] = useState(false);
    const [residents, setResidents] = useState([])

    function closePlanetCard() {
        setIsOpen(false);
    }

    useEffect(() => {
        setFilteredData(filteredPlanets)
    }, [filteredPlanets])

    function saveOneOfPlanet(planet) {

        setOneOfPlanet(planet)
        setResidents(planet.residents)
        setIsOpen(true);
    }




    let containerStyle = allPlanetsInfo.loading ? 'bg-white' : 'bg-black'


    return (
        <Preloader loading={allPlanetsInfo.loading}>
            <div className={containerStyle}>
                <FindPlanet setFilteredData={setFilteredData} planets={planets} filteredPlanets={filteredPlanets} allPlanetsInfo={allPlanetsInfo}></FindPlanet>
                <div >
                    {filteredData.map((planet) => (

                        <div onClick={() => saveOneOfPlanet(planet)} title={planet.name} className='planet-container' key={planet.name}>
                            <img className='planet-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7W3lez993bn8Q2ncvBdZ91sM5qN-SsqEHPd2OKcK8usRG08cf' alt='planet'></img>
                            <p> {planet.name}</p>
                        </div>
                    ))}
                </div>

                <MorePlanetInfo planet={oneOfPlanet} planetCardIsOpen={planetCardIsOpen} closePlanetCard={closePlanetCard} residents={residents} />

            </div>
        </Preloader>
    )
}

export default Planets