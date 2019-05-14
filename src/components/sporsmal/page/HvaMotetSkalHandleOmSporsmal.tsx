import React, {useState} from 'react';
import {Normaltekst, Undertittel} from 'nav-frontend-typografi';
import {Textarea} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";
import {SporsmalProps} from "../SporsmalView";
import Veilederpanel from "nav-frontend-veilederpanel";
import Stegindikator from "../../stegindikator/Stegindikator";
import {ReactComponent as SVG} from './veileder_motestotte.svg'
import Lenke from "nav-frontend-lenker";

const initTextState: string = '';

function HvaMotetSkalHandleOmSporsmal(props: SporsmalProps) {
    const [value, setValue] = useState(initTextState);

    return (
        <>
            <div className="veileder-budskap">
                <Stegindikator aktivtSteg={1}/>
                <div className="custom-veilederpanel">
                    <Veilederpanel kompakt svg={<SVG id="veileder-icon"/>}>
                        <Undertittel>
                            Vi ønsker å
                        </Undertittel>
                        <ul>
                            <li><Normaltekst>bli bedre kjent med situasjonen din</Normaltekst></li>
                            <li><Normaltekst>snakke om hva som kan hindre deg i å søke eller være i jobb</Normaltekst>
                            </li>
                        </ul>
                    </Veilederpanel>
                </div>
            </div>
            <div className="spm">
                <Undertittel className="spm-row">
                    Er det noe du ønsker å snakke med oss om?
                </Undertittel>
                <div className="spm-row">
            <Textarea
                placeholder="Skriv noen stikkord hvis du ønsker"
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
            </div>
            <Lenke href={props.fallbackUrl}>
                Avbryt
            </Lenke>
        </>
    );
}

export default HvaMotetSkalHandleOmSporsmal;