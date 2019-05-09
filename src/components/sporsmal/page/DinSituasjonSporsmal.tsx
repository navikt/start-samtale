import React, {useState} from 'react';
import {Normaltekst, Undertittel} from 'nav-frontend-typografi';
import {Textarea} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";
import {SporsmalProps} from "../SporsmalView";
import Veilederpanel from "nav-frontend-veilederpanel";
import {ReactComponent as SVG} from './veileder_motestotte.svg'

const initTextState: string = '';


function DinSituasjonSporsmal(props: SporsmalProps) {
    const [value, setValue] = useState(initTextState);

    return (
        <>
            <div className="veileder-budskap">
                <div className="custom-veilederpanel">
                    <Veilederpanel kompakt svg={<SVG id="veileder-icon"/>}>
                        <Undertittel>
                            Fortell om situasjonen din
                        </Undertittel>
                        <div>
                            <Normaltekst>
                                Du kan skrive om
                            </Normaltekst>
                            <ul>
                                <li>hva slags jobb du ønsker deg</li>
                                <li>Hva som kan hindre deg i å jobbe</li>
                                <li>hva som skal til for å komme i jobb</li>
                            </ul>
                        </div>
                    </Veilederpanel>
                </div>
            </div>
            <div className="spm">
                <div className="spm-row">
                    <Textarea
                        placeholder="Skriv til din veileder her"
                        textareaClass="spm-text-area"
                        label={false}
                        tellerTekst={() => false}
                        value={value}
                        disabled={props.loading}
                        onChange={(e) => setValue((e.target as HTMLInputElement).value)}
                    />
                </div>
                <Hovedknapp spinner={props.loading}
                            disabled={props.loading}
                            onClick={() => props.onSubmit(value)}>
                    Send
                </Hovedknapp>
            </div>
        </>
    )
}

export default DinSituasjonSporsmal;