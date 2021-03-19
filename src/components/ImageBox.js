import React from 'react';

const ImageBox = (props) => {

    const imageSize = props.imageSize ? props.imageSize : '200'; 
    const defaultImage = 'https://picsum.photos/' + imageSize;
    const caption = props.caption ? props.caption : 'This is an image in a box!';

    return ( 
        <figure>
            <img alt="" src={defaultImage} />
            <figcaption>
                { caption }
            </figcaption>
        </figure>
    );
}
 
export default ImageBox;