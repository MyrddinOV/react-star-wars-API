import React, { useEffect } from 'react';

import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../Components/Home';
import { NavBar } from '../Components/NavBar';
import Planets from '../Components/Planets/Planets';
import Persons from '../Components/Persons/Persons';
import { getPlanets } from '../actions/PlanetActions'
import { connect } from 'react-redux';
import { getPersons } from '../actions/PersonActions';



function App(props) {


  const { planets, filteredPlanets, allPlanetsInfo, persons, filteredPersons, allPersonsInfo, fetchPlanetData, fetchPersonData } = props


  useEffect(() => {
    fetchPlanetData('https://swapi.co/api/planets/?page=1')
    fetchPlanetData('https://swapi.co/api/planets/?page=2')
    // fetchPlanetData('https://swapi.co/api/planets/?page=3')
    fetchPersonData('https://swapi.co/api/people/')


  }, [fetchPlanetData, fetchPersonData]);
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact >
            <Home />
          </Route>
          <Route path='/planets' exact >
            <Planets planets={planets.planets} filteredPlanets={filteredPlanets.filteredPlanets} allPlanetsInfo={allPlanetsInfo} />
          </Route>
          <Route path='/persons' >
            <Persons persons={persons.persons} filteredPersons={filteredPersons.filteredPersons} allPersonsInfo={allPersonsInfo} />
          </Route>


        </Switch>
      </div>
    </BrowserRouter>

  );
}

const mapStateToProps = store => {
  return {
    planets: store.planets,
    filteredPlanets: store.filteredPlanets,
    allPlanetsInfo: store.allPlanetsInfo,

    persons: store.persons,
    filteredPersons: store.filteredPersons,
    allPersonsInfo: store.allPersonsInfo,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlanetData: url => dispatch(getPlanets(url)),
    fetchPersonData: url => dispatch(getPersons(url)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
