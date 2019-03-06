import * as React from 'react';
import { Systemtittel } from 'nav-frontend-typografi';
import './Banner.less'

function Banner () {
    return(
        <div className="bs-banner">
            <div className="banner__innhold">
                <Systemtittel tag="h1">Ditt første møte med NAV</Systemtittel>
            </div>
        </div>
    );
}

export default Banner;