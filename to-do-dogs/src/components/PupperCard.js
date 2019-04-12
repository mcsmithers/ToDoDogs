import React from 'react';

import dogs from '../mocks/dogs';

class PupperCard extends React.Component {
    render (){
        return(
        dogs.map(dog => (
            <div key={dog.id}>
            <img src={dog.imgUrl} alt='What a cute little pupper!'/>
            </div>
        )))
    }
}

export default PupperCard

