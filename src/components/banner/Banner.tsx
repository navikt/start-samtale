import * as React from 'react';
import { Systemtittel } from 'nav-frontend-typografi';
import './Banner.less'

function Banner () {
    return(
        <div className="bs-banner">
            <Systemtittel tag="h1">Ditt første møte med NAV</Systemtittel>
        </div>
    );
}

export default Banner;