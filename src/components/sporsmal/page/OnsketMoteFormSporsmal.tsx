import React, {useState} from 'react';
import {Undertittel} from 'nav-frontend-typografi';
import {RadioPanelGruppe} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";
import {SporsmalProps} from "../SporsmalView";
import InfoPanel from "../../infopanel/InfoPanel";

export type MoteForm = 'MEET' | 'PHONE' | 'WRITE'

const MEET: MoteForm = 'MEET';
const PHONE: MoteForm = 'PHONE';
export const WRITE: MoteForm = 'WRITE';

export function moteFormValue(form: MoteForm): string {
    switch (form){
        case 'MEET': return 'I et møte på NAV-kontoret mitt';
        case 'PHONE': return 'I en telefonsamtale';
        case 'WRITE': return 'Jeg vil skrive';
    }
}



const initRadioState: string = '';

function OnsketMoteFormSporsmal(props: SporsmalProps) {
    const [value, setValue] = useState(initRadioState);
    return <div className="spm">
        <Undertittel className="spm-row">
            Hvordan ønsker du å fortelle en NAV-veileder om situasjonen din?
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
        />

        <InfoPanel>
            Når du trykker neste, vil svaret ditt bli delt med veilederen din.
        </InfoPanel>
        <Hovedknapp spinner={props.loading}
                    disabled={props.loading}
                    onClick={() => props.onSubmit(value)}>Neste</Hovedknapp>
    </div>
}

export default OnsketMoteFormSporsmal;