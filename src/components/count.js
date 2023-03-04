import React from 'react';
import '../stylesheets/count.css'

function Count ( {numClicks} ) {
    return (
        <div className='count'>
            {numClicks}                        
        </div>
    );
}

export default Count;