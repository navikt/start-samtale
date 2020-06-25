import React, { useState } from 'react';
import { Undertittel } from 'nav-frontend-typografi';
import { RadioPanelGruppe } from 'nav-frontend-skjema';
import {Hovedknapp} from 'nav-frontend-knapper';
import Stegindikator from '../../../components/stegindikator/Stegindikator';
import Lenke from 'nav-frontend-lenker';
import AlleredeSvart from '../../../components/allerede-svar/AlleredeSvart';
import { avbrytMetrikk } from '../../../components/util/frontendlogger';
import { PAGE_ID } from './OnsketMoteFormSporsmal';

export type MoteForm = 'MEET' | 'PHONE' | 'WRITE' | 'VIDEO';

const MEET: MoteForm = 'MEET';
const PHONE: MoteForm = 'PHONE';
const VIDEO: MoteForm = 'VIDEO';
export const WRITE: MoteForm = 'WRITE';

export function moteFormValue(form: MoteForm): string {
    switch (form) {
        case 'MEET':
            return 'I et møte på NAV-kontoret';
        case 'PHONE':
            return 'I en telefonsamtale';
        case 'VIDEO':
            return 'I et videomøte';
        case 'WRITE':
            return 'Jeg vil skrive her';
        default:
            return 'Ukjent';
    }
}

export const SPORSMAL = 'Hvor vil du starte samtalen med veilederen din?';

interface Props {
    loading: boolean;
    onSubmit: (arg: string) => void;
    answered: boolean;
}

function OnsketMoteFormView(props: Props) {
    const [value, setValue] = useState<string | undefined>(undefined);
    const [feilState, setFeil] = useState(false);

    const feil = feilState ? 'Velg ett alternativ' : undefined;

    return (
        <>
            <Stegindikator aktivtSteg={0}/>
            <div className="spm">
                <AlleredeSvart visible={props.answered} className="spm-row"/>
                <RadioPanelGruppe
                    className="spm-row"
                    legend={<Undertittel className="spm-row">{SPORSMAL}</Undertittel>}
                    name=""
                    radios={[
                        {label: moteFormValue(MEET), disabled: props.loading, value: MEET},
                        {label: moteFormValue(PHONE), disabled: props.loading, value: PHONE},
                        {label: moteFormValue(VIDEO), disabled: props.loading, value: VIDEO},
                        {label: moteFormValue(WRITE), disabled: props.loading, value: WRITE},
                    ]}
                    checked={value}
                    onChange={(_, val) => setValue(val)}
                    feil={feil}
                />

                <Hovedknapp
                    className="send-knapp"
                    spinner={props.loading}
                    disabled={props.loading}
                    onClick={() => {
                        if (value === undefined) {
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
            <Lenke href={`${process.env.PUBLIC_URL}/ditt-nav`} onClick={() => avbrytMetrikk(PAGE_ID)}>
                Avbryt
            </Lenke>
        </>
    );
}

export default OnsketMoteFormView;