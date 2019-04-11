import React from 'react';

import dogs from '../mocks/dogs';


function PupperCard() {
    console.log(Object.keys(dogs))
    return(
    dogs.map(dog => (
        <div key={dog.id}>
        <img src={dog.imgUrl}/>
        </div>
    )))
}

export default PupperCard

