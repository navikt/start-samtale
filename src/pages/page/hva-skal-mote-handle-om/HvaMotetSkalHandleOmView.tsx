import React, {useState} from 'react';
import {Normaltekst, Undertittel} from 'nav-frontend-typografi';
import {Textarea} from "nav-frontend-skjema";
import {Flatknapp, Hovedknapp} from "nav-frontend-knapper";
import Veilederpanel from "nav-frontend-veilederpanel";
import Stegindikator from "../../../components/stegindikator/Stegindikator";
import {ReactComponent as SVG} from '../veileder_motestotte.svg'
import Lenke from "nav-frontend-lenker";

interface Props {
    loading: boolean;
    onSubmit: (arg: string) => void;
    fallbackUrl: string
}

const initTextState: string = '';

function HvaMotetSkalHandleOmView(props: Props) {
    const [value, setValue] = useState(initTextState);

    return (
        <>
            <div className="veileder-budskap">
                <Stegindikator aktivtSteg={1}/>
                <div className="custom-veilederpanel">
                    <Veilederpanel kompakt svg={<SVG id="veileder-icon"/>}>
                        <Undertittel>
                            I samtalen ønsker veilederen din
                        </Undertittel>
                        <ul>
                            <li><Normaltekst>å bli bedre kjent med situasjonen din</Normaltekst></li>
                            <li><Normaltekst>å snakke om jobbmulighetene dine</Normaltekst>
                            </li>
                        </ul>
                    </Veilederpanel>
                </div>
            </div>
            <div className="spm">
                <Undertittel className="spm-row">
                    Hva ønsker du å snakke om?
                </Undertittel>
                <div className="spm-row">
            <Textarea
                placeholder="Skriv noen stikkord til samtalen, eller hopp over"
                textareaClass="spm-text-area"
                disabled={props.loading}
                label={false}
                tellerTekst={() => false}
                value={value}
                onChange={(e) => setValue((e.target as HTMLInputElement).value)}
            />
                </div>
                <Hovedknapp spinner={props.loading}
                            disabled={props.loading}
                            onClick={() => props.onSubmit(value)}>
                    Send
                </Hovedknapp>
                <Flatknapp className="ferdig-knapp"
                           disabled={props.loading}
                           onClick={() => props.onSubmit('')}>
                    Hopp over
                </Flatknapp>
            </div>
            <Lenke href={props.fallbackUrl}>
                Avbryt
            </Lenke>
        </>
    );
}

export default HvaMotetSkalHandleOmView;