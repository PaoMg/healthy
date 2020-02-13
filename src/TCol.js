import React from 'react';
import ImageCirc from './ImageCirc';
import Text from './Text';
import Label from './Label';

import user1 from './images/perro_prueba.png';

const TCol = (props) => {
    return (
        <div className="t-col">
            <div className='testimonial'>
                <ImageCirc src={user1} />
                <Label class="name" text="Perrito Estudioso"/>
                <Text class="t-text"/>
            </div>
        </div>
    )
  }
  
  export default TCol;