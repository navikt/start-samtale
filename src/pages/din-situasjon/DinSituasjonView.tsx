import React, { useState } from 'react';
import { Undertittel } from 'nav-frontend-typografi';
import { Textarea } from 'nav-frontend-skjema';
import {Hovedknapp} from 'nav-frontend-knapper';
import Veilederpanel from 'nav-frontend-veilederpanel';
import { ReactComponent as SVG } from '../veileder_motestotte.svg';
import Lenke from 'nav-frontend-lenker';
import AlleredeSvart from '../../components/AlleredeSvart';
import { avbrytMetrikk } from '../../components/util/frontendlogger';
import { PAGE_ID } from './DinSituasjonSporsmal';
import { feilmelding, tekstTeller } from '../../components/util/text-area-utils';

const initTextState: string = '';

interface Props {
    loading: boolean;
    onSubmit: (arg: string) => void;
    answered: boolean;
}

export const SPORSMAL = 'Fortell';
const customFeil = 'Fortell noe om situasjonen din, slik at du kan få veiledning som passer for deg.';
const maksLengde = 5000;

function DinSituasjonView(props: Props) {
    const [value, setValue] = useState(initTextState);
    const [feilState, setFeil] = useState(false);

    const feil = feilmelding(feilState, maksLengde, value, customFeil);
    const customTekstTeller = tekstTeller(3500);
    const labelTekst = 'Skriv til veilederen din';
    return (
        <>
            <div className="veileder-budskap">
                <div className="custom-veilederpanel">
                    <Veilederpanel kompakt svg={<SVG id="veileder-icon"/>}>
                        <Undertittel>
                            Fortell om
                        </Undertittel>
                        <div>
                            <ul>
                                <li>hva slags jobb du ønsker deg</li>
                                <li>hva som kan hindre deg i å jobbe</li>
                            </ul>
                        </div>
                    </Veilederpanel>
                </div>
            </div>
            <div className="spm">
                <AlleredeSvart visible={props.answered} className="spm-row"/>
                <div className="spm-row">
                    <Textarea
                        placeholder={labelTekst}
                        textareaClass="spm-text-area"
                        label={false}
                        tellerTekst={customTekstTeller}
                        maxLength={maksLengde}
                        value={value}
                        aria-label={labelTekst}
                        disabled={props.loading}
                        onChange={(e) => setValue(e.target.value)}
                        feil={feil}
                    />
                </div>
                <Hovedknapp
                    className="send-knapp"
                    spinner={props.loading}
                    disabled={props.loading}
                    onClick={() => {
                        if (value === '' || value.length > maksLengde) {
                            setFeil(true);
                        } else {
                            setFeil(false);
                            props.onSubmit(value);
                        }
                    }}
                >
                    Send
                </Hovedknapp>
            </div>
            <Lenke href={`${process.env.PUBLIC_URL}/minside`} onClick={() => avbrytMetrikk(PAGE_ID)}>
                Avbryt
            </Lenke>
        </>
    );
}

export default DinSituasjonView;