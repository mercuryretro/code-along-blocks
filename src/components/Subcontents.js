import React from 'react';
//props is an object
//keys and values
//key is the 'attribute name'
//value is fiven in the {} from the parent component


const Subcontents = (props) => {
    const { contentText, numberOfStudents } = props;

    return (
        <div className='subcontents'>
            <h3>{contentText}</h3>
            <p>Number of Students: {numberOfStudents}</p>
        </div>
    )
}

export default Subcontents;