import React, {useState} from 'react';
import {Normaltekst, Undertittel} from 'nav-frontend-typografi';
import {Input} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";
import Stegindikator from "../../../components/stegindikator/Stegindikator";
import Lenke from "nav-frontend-lenker";

interface Props {
    loading: boolean;
    onSubmit: (arg: string) => void;
    fallbackUrl: string
}

const inputState: string = '';

function NarPasserMotetView(props: Props) {
    const [value, setValue] = useState(inputState);

    return (
        <>
            <div className="veileder-budskap">
                <Stegindikator aktivtSteg={2}/>
                <Normaltekst className="custom-infotext">
                    Veilederen din er tilgjengelig på dagtid fra mandag til fredag. Hvis du har noen ønsker til
                    tidspunkt for møtet, skal vi prøve å legge til rette for det.
                </Normaltekst>
            </div>
            <div className="spm">
                <Undertittel className="spm-row">
                    Hvilket tidspunkt passer best for deg?
                </Undertittel>
                <Input
                    className="spm-row"
                    label={false}
                    disabled={props.loading}
                    value={value}
                    placeholder="For eksempel: Alle dager utenom tirsdager"
                    onChange={(e) => setValue((e.target as HTMLInputElement).value)}
                />
                <Hovedknapp spinner={props.loading}
                            disabled={props.loading}
                            onClick={() => props.onSubmit(value)}>
                    Send
                </Hovedknapp>
            </div>
            <Lenke href={props.fallbackUrl}>
                Avbryt
            </Lenke>
        </>
    )
}

export default NarPasserMotetView;