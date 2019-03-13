import React, {useState} from 'react';
import {Normaltekst, Undertittel} from 'nav-frontend-typografi';
import {Input} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";
import {SporsmalProps} from "./SporsmalManager";
import InfoPanel from "../infopanel/InfoPanel";

const inputState: string = '';

function NarPasserMotetSporsmal(props: SporsmalProps) {
    const [value, setValue] = useState(inputState);

    return <div className="spm">
        <Undertittel className="spm-row">
            Når du trykker neste, vil svaret ditt bli delt med veilederen din.
        </Undertittel>
        <Normaltekst className="spm-row">
            NAV-kontoret ditt har åpent på dagtid fra mandag til fredag. Hvis du har noen ønsker til tidspunkt for
            møtet, skal vi prøve så godt vi kan å legge til rette for det.
        </Normaltekst>
        <Input
            className="spm-row"
            label={false}
            value={value}
            placeholder="Skriv her"
            onChange={(e) => setValue((e.target as HTMLInputElement).value)}
        />
        <Normaltekst className="spm-row">
            Veilederen din vil kalle deg inn til et møte basert på tilbakemeldingene dine.
        </Normaltekst>
        <InfoPanel>
            Når du trykker fullfør, vil svaret ditt bli delt med veilederen din.
        </InfoPanel>
        <Hovedknapp spinner={props.loading}
                    onClick={() => props.onSubmit(value)}>
            Fullfør
        </Hovedknapp>
    </div>
}

export default NarPasserMotetSporsmal;