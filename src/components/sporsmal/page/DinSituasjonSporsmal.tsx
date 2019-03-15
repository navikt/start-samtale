import React, {useState} from 'react';
import {Normaltekst, Undertittel} from 'nav-frontend-typografi';
import {Textarea} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";
import {SporsmalProps} from "../SporsmalView";
import InfoPanel from "../../infopanel/InfoPanel";

const initTextState: string = '';


function DinSituasjonSporsmal(props: SporsmalProps) {
    const [value, setValue] = useState(initTextState);

    return <div className="spm">
        <Undertittel className="spm-row">
            Fortell veilederen din om situasjonen din
        </Undertittel>
        <div className="spm-row">
            <Normaltekst>
                I feltet under kan du skrive til veilederen din og fortelle om situasjonen din. Her er noen eksempler på punkter du kan skrive om:
            </Normaltekst>
            <ul>
                <li>Hva slags jobb du ser for deg i fremtiden</li>
                <li>Arbeidsoppgaver du trives med</li>
                <li>Eventuelle forhold som påvirker mulighetene dine til å være i jobb</li>
                <li>Hvilke egenskaper du har som øker mulighetene dine til å komme i jobb.</li>
            </ul>
        </div>
        <div className="spm-row">
            <Textarea
                placeholder="Skriv her"
                textareaClass="spm-text-area"
                label={false}
                tellerTekst={() => false}
                value={value}
                disabled={props.loading}
                onChange={(e) => setValue((e.target as HTMLInputElement).value)}
            />
        </div>
        <InfoPanel>
            Når du trykker fullfør, vil svaret ditt bli delt med veilederen din.
        </InfoPanel>
        <Hovedknapp spinner={props.loading}
                    disabled={props.loading}
                    onClick={() => props.onSubmit(value)}>
            Fullfør
        </Hovedknapp>
    </div>
}

export default DinSituasjonSporsmal;