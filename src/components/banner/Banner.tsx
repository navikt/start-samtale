import * as React from 'react';
import './Banner.less';
import {Heading} from "@navikt/ds-react";

function Banner () {
    return(
        <div className="bs-banner">
            <Heading size="medium">Start en samtale med NAV</Heading>
        </div>
    );
}

export default Banner;