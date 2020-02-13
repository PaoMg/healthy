import React from 'react';

const ImageCirc = (props) => {
    return (
      <div>
        <img className="round-img" src={props.src} />
      </div>
    )
  }
  
  export default ImageCirc;