import { CircularProgress } from '@material-ui/core';
import React from 'react';

const Preloadercom = () => {
    return (
        <div className="loader" style={{position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <CircularProgress/>
        </div>
    );
};

export default Preloadercom;