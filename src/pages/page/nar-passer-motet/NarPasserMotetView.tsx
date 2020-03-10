import React, { useState } from 'react';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { Input } from 'nav-frontend-skjema';
import { Flatknapp, Hovedknapp } from 'nav-frontend-knapper';
import Stegindikator from '../../../components/stegindikator/Stegindikator';
import Lenke from 'nav-frontend-lenker';
import AlleredeSvart from '../../../components/allerede-svar/AlleredeSvart';
import { avbrytMetrikk } from '../../../components/util/frontendlogger';
import { PAGE_ID } from './NarPasserMotetSporsmal';

export const SPORSMAL = 'Er det noe tidspunkt som ikke passer?';

interface Props {
    loading: boolean;
    onSubmit: (arg: string) => void;
    answered: boolean;
}

const inputState: string = '';

function NarPasserMotetView(props: Props) {
    const [value, setValue] = useState(inputState);
    const [feilState, setFeil] = useState(false);

    const feil = feilState ? 'Du kan ikke sende en tom melding' : undefined;

    return (
        <>
            <div className="veileder-budskap">
                <Stegindikator aktivtSteg={2}/>
                <Normaltekst className="custom-infotext">
                    Hvis det er tidspunkt som ikke passer, kan du skrive det under. Vi prøver å ta hensyn til det.
                </Normaltekst>
            </div>
            <div className="spm">
                <AlleredeSvart visible={props.answered} className="spm-row"/>
                <Undertittel className="spm-row">
                    Er det noe tidspunkt som <i>ikke</i> passer?
                </Undertittel>
                <Input
                    className="spm-row"
                    label={false}
                    disabled={props.loading}
                    value={value}
                    placeholder="Det passer ikke på..."
                    feil={feil}
                    onChange={(e) => setValue((e.target as HTMLInputElement).value)}
                />
                <Hovedknapp
                    className="send-knapp"
                    spinner={props.loading}
                    disabled={props.loading}
                    onClick={() => {
                        if (value === '') {
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
                    className="hopp-knapp"
                    disabled={props.loading}
                    onClick={() => props.onSubmit('')}
                >
                    Hopp over
                </Flatknapp>
            </div>
            <Lenke href={`${process.env.PUBLIC_URL}/veientilarbeid`} onClick={() => avbrytMetrikk(PAGE_ID)}>
                Avbryt
            </Lenke>
        </>
    );
}

export default NarPasserMotetView;