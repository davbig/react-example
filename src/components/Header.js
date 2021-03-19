import React from 'react';

const MyHeader = (props) => {
    return ( 
        <header>
            <h1>{ props.headline }</h1>
            <nav>
                <a href="www.google.de">Menu</a>
                <a href="www.google.de">Menu 2</a>
            </nav>
        </header>
     );
}

export default MyHeader;