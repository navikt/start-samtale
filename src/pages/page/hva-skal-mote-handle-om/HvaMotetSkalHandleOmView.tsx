import React, { useState } from 'react';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { Textarea } from 'nav-frontend-skjema';
import { Flatknapp, Hovedknapp } from 'nav-frontend-knapper';
import Veilederpanel from 'nav-frontend-veilederpanel';
import Stegindikator from '../../../components/stegindikator/Stegindikator';
import { ReactComponent as SVG } from '../veileder_motestotte.svg';
import Lenke from 'nav-frontend-lenker';
import AlleredeSvart from '../../../components/allerede-svar/AlleredeSvart';
import { avbrytMetrikk } from '../../../components/util/frontendlogger';
import { PAGE_ID } from './HvaMotetSkalHandleOmSporsmal';
import { feilmelding, tekstTeller } from '../../../components/util/text-area-utils';

interface Props {
    loading: boolean;
    onSubmit: (arg: string) => void;
    answered: boolean;
}

const initTextState: string = '';
const maksLengde = 500;

export const SPORSMAL = 'Hva ønsker du å snakke om?';

function HvaMotetSkalHandleOmView(props: Props) {
    const [value, setValue] = useState(initTextState);
    const [feilState, setFeil] = useState(false);

    const feil = feilmelding(feilState, maksLengde, value);
    const customTekstTeller = tekstTeller(350);

    return (
        <>
            <div className="veileder-budskap">
                <Stegindikator aktivtSteg={1}/>
                <div className="custom-veilederpanel">
                    <Veilederpanel kompakt={true} svg={<SVG id="veileder-icon"/>}>
                        <Undertittel>
                            I samtalen ønsker veilederen din
                        </Undertittel>
                        <ul>
                            <li><Normaltekst>å bli bedre kjent med situasjonen din</Normaltekst></li>
                            <li><Normaltekst>å snakke om jobbmulighetene dine</Normaltekst>
                            </li>
                        </ul>
                    </Veilederpanel>
                </div>
            </div>
            <div className="spm">
                <AlleredeSvart visible={props.answered} className="spm-row"/>
                <Undertittel className="spm-row">
                    {SPORSMAL}
                </Undertittel>
                <div className="spm-row">
                    <Textarea
                        placeholder="Skriv noen stikkord til samtalen, eller hopp over"
                        textareaClass="spm-text-area"
                        disabled={props.loading}
                        label={false}
                        tellerTekst={customTekstTeller}
                        maxLength={maksLengde}
                        feil={feil}
                        value={value}
                        onChange={(e) => setValue((e.target as HTMLInputElement).value)}
                    />
                </div>
                <Hovedknapp
                    spinner={props.loading}
                    disabled={props.loading}
                    onClick={() => {
                        if (value.length >= maksLengde) {
                            setFeil(true);
                        } else {
                            setFeil(false);
                            props.onSubmit(value);
                        }
                    }}
                >
                    Send
                </Hovedknapp>
                <Flatknapp
                    className="ferdig-knapp"
                    disabled={props.loading}
                    onClick={() => props.onSubmit('')}
                >
                    Hopp over
                </Flatknapp>
            </div>
            <Lenke href="/veientilarbeid" onClick={() => avbrytMetrikk(PAGE_ID)}>
                Avbryt
            </Lenke>
        </>
    );
}

export default HvaMotetSkalHandleOmView;