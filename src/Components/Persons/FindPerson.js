import React from 'react'


const FindPerson = ({ persons, filteredPersons, setFilteredData, allPersonsInfo }) => {

    function findName(e) {
        let value = e.target.value.toLowerCase()
        let filter = filteredPersons.filter(person => person.name.toLowerCase().includes(value))

        if(!value) {
            setFilteredData(persons)
        } else {
            setFilteredData(filter)
        }
    }

    let style = allPersonsInfo.loading ? 'notActive' : 'find-form'

    return (
        <input type='text' onChange={findName} className={style} placeholder='Find persons'></input>
    )
}

export default FindPerson