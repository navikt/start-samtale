import React, { useState } from 'react';
import {Undertittel} from 'nav-frontend-typografi';
import {RadioPanelGruppe} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";
import {SporsmalProps} from "./SporsmalManager";
import InfoPanel from "../infopanel/InfoPanel";

const initRadioState: string | undefined = undefined;

// todo can we refactor out the logic out of the view code?
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
                    { label: 'I et møte på NAV-kontoret mitt', value: 'I et møte på NAV-kontoret mitt' },
                    { label: 'I en telefonsamtale', value: 'I en telefonsamtale' },
                    { label: 'Jeg vil skrive', value: 'Jeg vil skrive' },
                ]}
                checked={value}
                onChange={(e, val) => setValue(val)}
            />

            <InfoPanel>
                Når du trykker neste, vil svaret ditt bli delt med veilederen din.
            </InfoPanel>
            <Hovedknapp onClick={() => props.onSubmit()}>Neste</Hovedknapp>
        </div>
}

export default OnsketMoteFormSporsmal;