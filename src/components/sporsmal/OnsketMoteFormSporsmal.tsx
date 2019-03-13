import React, { useState } from 'react';
import {Undertittel} from 'nav-frontend-typografi';
import {RadioPanelGruppe} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";
import {SporsmalProps} from "./SporsmalManager";
import InfoPanel from "../infopanel/InfoPanel";

const MEETING_VALUE = 'I et møte på NAV-kontoret mitt';
const PHONE_VALUE = 'I en telefonsamtale';
export const WRITING_VALUE = 'Jeg vil skrive';


const initRadioState: string = '';

function OnsketMoteFormSporsmal (props: SporsmalProps) {
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
                    { label: 'I et møte på NAV-kontoret mitt', value: MEETING_VALUE },
                    { label: 'I en telefonsamtale', value: PHONE_VALUE },
                    { label: 'Jeg vil skrive', value: WRITING_VALUE },
                ]}
                checked={value}
                onChange={(e, val) => setValue(val)}
            />

            <InfoPanel>
                Når du trykker neste, vil svaret ditt bli delt med veilederen din.
            </InfoPanel>
            <Hovedknapp onClick={() => props.onSubmit(value)}>Neste</Hovedknapp>
        </div>
}

export default OnsketMoteFormSporsmal;