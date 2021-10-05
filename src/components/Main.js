import React from 'react';
import Subcontents from './Subcontents'

const Main = () => {
    return (
        <div className='main'>
            <Subcontents contentText={'Underwater Basket Weaving Class'} numberOfStudents={10} />
            <Subcontents contentText={'Skydiving Class'} numberOfStudents={15} />
            <Subcontents contentText={'Unicorn Riding Class'} numberOfStudents={300} />
        </div>
    )
}

export default Main;