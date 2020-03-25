import React, { useState, useEffect } from 'react';
import { FindPlanet } from './FindPlanet';
import { Switch, Route } from 'react-router-dom';
import MorePlanetInfo from './MorePlanetInfo';
import Preloader from '../Preloader';
import { NavLink } from 'react-router-dom'

const Planets = ({ planets, filteredPlanets, allPlanetsInfo, getPlanetPage, activePage, }) => {

    const [filteredData, setFilteredData] = useState([])
    const [oneOfPlanet, setOneOfPlanet] = useState([])

    const [residents, setResidents] = useState([])

    const pages = [1, 2, 3, 4, 5, 6, 7]


    useEffect(() => {
        setFilteredData(filteredPlanets)
    }, [filteredPlanets])

    function saveOneOfPlanet(planet) {

        setOneOfPlanet(planet)
        setResidents(planet.residents)

    }

    let containerStyle = allPlanetsInfo.loading ? 'bg-white' : 'bg-black'


    return (

        <Preloader loading={allPlanetsInfo.loading}>
            <div className={containerStyle}>
                <Switch>
                    <Route path={`/planets`} >
                        <FindPlanet setFilteredData={setFilteredData} planets={planets} filteredPlanets={filteredPlanets} allPlanetsInfo={allPlanetsInfo}></FindPlanet>

                        <div className='container'>
                            {filteredData.map((planet) => (
                                <NavLink
                                    key={planet.name}
                                    className='planet-container'
                                    to={`/planets/page/:${activePage}/${planet.name}`}>
                                    <div onClick={() => saveOneOfPlanet(planet)} title={planet.name}  >
                                        <img className='planet-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7W3lez993bn8Q2ncvBdZ91sM5qN-SsqEHPd2OKcK8usRG08cf' alt='planet'></img>
                                        <p> {planet.name}</p>
                                    </div>

                                </NavLink>
                            ))}
                        </div>
                        {pages.map((page, index) => (

                            <NavLink to={`/planets/page/:${activePage}`} key={page} className="pages-link">
                                <span key={page} onClick={() => { getPlanetPage(page); }} className={`page ${index + 1 === activePage ? "active-page" : ""}`} >{page}</span>
                            </NavLink>

                        ))}

                    </Route>
                </Switch>
                <MorePlanetInfo planet={oneOfPlanet} residents={residents} activePage={activePage} />



            </div>
        </Preloader >

    )
}

export default Planets