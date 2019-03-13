import React, {useState} from 'react';
import {Normaltekst, Undertittel} from 'nav-frontend-typografi';
import {Textarea} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";
import {SporsmalProps} from "./SporsmalManager";
import InfoPanel from "../infopanel/InfoPanel";

const initRadioState: string | undefined = undefined;


function HvaMotetSkalHandleOmSporsmal(props: SporsmalProps) {
    const [value, setValue] = useState(initRadioState);

    return <div className="spm">
        <Normaltekst className="spm-row">
            I møtet ønsker vi å bli kjent med deg og din situasjon. Møtet skal handle om dine muligheter i
            arbeidsmarkedet.
        </Normaltekst>
        <Undertittel className="spm-row">
            Hva ønsker du å prate om?
        </Undertittel>
        <div className="spm-row">
            <Textarea
                placeholder="Her kan du skrive noen stikkord for hva du ønsker å prate om i møtet."
                textareaClass="spm-text-area"
                label={false}
                tellerTekst={() => false}
                value={value || ''}
                onChange={(e) => setValue((e.target as HTMLInputElement).value)}
            />
        </div>
        <InfoPanel>
            Når du trykker neste, vil svaret ditt bli delt med veilederen din.
        </InfoPanel>
        <Hovedknapp onClick={() => {
            props.onSubmit()
        }}>Neste</Hovedknapp>
    </div>
}

export default HvaMotetSkalHandleOmSporsmal;