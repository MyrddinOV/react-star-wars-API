import React, { useState, useEffect } from 'react';
import FindPerson from './FindPerson';
import Preloader from '../Preloader';



const Persons = ({ persons, filteredPersons, allPersonsInfo }) => {

    const [filteredData, setFilteredData] = useState([])
    useEffect(() => {
        setFilteredData(filteredPersons)
    }, [filteredPersons])

    return (
        <Preloader loading={allPersonsInfo.loading}>
            
                <FindPerson persons={persons} filteredPersons={filteredPersons} setFilteredData={setFilteredData} allPersonsInfo={allPersonsInfo} />
                {filteredData.map(person => (
                    <div key={person.name}>
                        {person.name}
                    </div>
                ))}
           
        </Preloader >
    )
}

export default Persons  