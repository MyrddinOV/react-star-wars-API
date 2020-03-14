import React from 'react'
import preloader from '../../preloader.svg'


const CardPreloader = ({ openCard }) => {
    
let animate = openCard ? 'preloader__rotate' : 'notActive'

    return (
        <img src={preloader} alt='preloader' className={animate}></img>
    )
}

export default CardPreloader