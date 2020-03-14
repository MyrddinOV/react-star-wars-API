import React from 'react'
import preloader from '../preloader.svg'

const Preloader = ({ children, loading }) => {

    if (loading) {
        return (
            <div>
                <img src={preloader} alt='preloader' className='preloader__rotate'></img>
            </div>
        )
    }

    return children
}

export default Preloader