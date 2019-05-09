import React from 'react';
import { Element } from 'nav-frontend-typografi';
import circleSVG from './check-circle.svg';
import './BekreftTekst.less';

interface Props {
    url: string;
}

function BekreftTekst(props: Props) {
    return (
        <div className="bekreft-tekst">
            <img src={circleSVG} className="bekreft-tekst-ikon"/>
            <Element>
                Svaret ditt er&nbsp;
                <a href={props.url}>delt i dialogen.</a>
            </Element>
        </div>
    );
}

export default BekreftTekst;