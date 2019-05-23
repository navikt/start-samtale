import React from 'react';
import Stegindikator from 'nav-frontend-stegindikator';

const steg = [
    {label: 'Ønsket møteform', index: 0},
    {label: 'Hva ønsker du å prate om', index: 1},
    {label: 'Ønsket møtetid', index: 2},
];

function StegindikatorWrapper(props: { aktivtSteg: number }) {
    const aktivtSteg = props.aktivtSteg;
    if (aktivtSteg >= steg.length) {
        return null;
    }

    return (
        <Stegindikator
            kompakt={true}
            steg={steg}
            aktivtSteg={aktivtSteg}
        />
    );
}

export default StegindikatorWrapper;
