
import React from 'react';
import { shallow } from 'enzyme';

import InfoPanel from './InfoPanel';
import { Normaltekst } from 'nav-frontend-typografi';

it('renders without crashing', () => {
    shallow(<InfoPanel>Tekst</InfoPanel>);
});

it('renders text', () => {
    const render = shallow(<InfoPanel>Tekst</InfoPanel>);
    expect( render.find(Normaltekst) ).toHaveLength(1);
    expect( render.contains(<Normaltekst >Tekst</Normaltekst>) ).toBeTruthy();
});
