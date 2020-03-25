import React from 'react'
import Modal from 'react-modal';
import Preloader from '../Preloader';

Modal.setAppElement('#root')

const Resident = ({ residentInfo, personCardIsOpen, openCard, setIsOpen }) => {


    const personCardStyle = personCardIsOpen ? 'modal' : 'notActive'
    const residentCardStyle = openCard ? 'notActive' : 'active'

    function closePersonCard() {
        setIsOpen(false);
    }


    return (
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
    )
}

export default Resident