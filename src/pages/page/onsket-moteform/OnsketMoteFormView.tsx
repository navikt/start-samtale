import React, {useState} from 'react';
import {Undertittel} from 'nav-frontend-typografi';
import {RadioPanelGruppe} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";
import Stegindikator from "../../../components/stegindikator/Stegindikator";
import Lenke from "nav-frontend-lenker";
import AlleredeSvart from "../../../components/allerede-svar/AlleredeSvart";

export type MoteForm = 'MEET' | 'PHONE' | 'WRITE'

const MEET: MoteForm = 'MEET';
const PHONE: MoteForm = 'PHONE';
export const WRITE: MoteForm = 'WRITE';

export function moteFormValue(form: MoteForm): string {
    switch (form) {
        case 'MEET':
            return 'I et møte på NAV-kontoret';
        case 'PHONE':
            return 'I en telefonsamtale';
        case 'WRITE':
            return 'Jeg vil skrive her';
    }
}

interface Props {
    loading: boolean;
    onSubmit: (arg: string) => void;
    fallbackUrl: string
    answered: boolean
}


function OnsketMoteFormView(props: Props) {
    const [value, setValue] = useState<string | undefined>(undefined);
    const [feilState, setFeil] = useState(false);

    const feil = feilState ? {feilmelding: 'Obligatorisk felt'} : undefined;

    return (
        <>
            <Stegindikator aktivtSteg={0}/>
            <div className="spm">
                <AlleredeSvart visible={props.answered} className="spm-row"/>
                <Undertittel className="spm-row">
                    Hvor vil du starte samtalen med veilederen din?
                </Undertittel>

                <RadioPanelGruppe
                    className="spm-row"
                    legend=""
                    name=""
                    radios={[
                        {label: moteFormValue(MEET), disabled: props.loading, value: MEET},
                        {label: moteFormValue(PHONE), disabled: props.loading, value: PHONE},
                        {label: moteFormValue(WRITE), disabled: props.loading, value: WRITE},
                    ]}
                    checked={value}
                    onChange={(_, val) => setValue(val)}
                    feil={feil}
                />

                <Hovedknapp spinner={props.loading}
                            disabled={props.loading}
                            onClick={() => {
                                    if (value === undefined) {
                                        setFeil(true);
                                    } else {
                                        setFeil(false);
                                        props.onSubmit(value);
                                    }
                            }}>
                    Send
                </Hovedknapp>
            </div>
            <Lenke href={props.fallbackUrl}>
                Avbryt
            </Lenke>
        </>
    );
}

export default OnsketMoteFormView;