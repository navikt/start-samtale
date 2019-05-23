import React, { useState } from 'react';
import { Undertittel } from 'nav-frontend-typografi';
import { Textarea } from 'nav-frontend-skjema';
import { Hovedknapp } from 'nav-frontend-knapper';
import Veilederpanel from 'nav-frontend-veilederpanel';
import { ReactComponent as SVG } from '../veileder_motestotte.svg';
import Lenke from 'nav-frontend-lenker';
import AlleredeSvart from '../../../components/allerede-svar/AlleredeSvart';
import {avbrytMetrikk} from "../../../components/util/frontendlogger";
import {PAGE_ID} from "./DinSituasjonSporsmal";

const initTextState: string = '';

interface Props {
    loading: boolean;
    onSubmit: (arg: string) => void;
    fallbackUrl: string;
    answered: boolean;
}

function DinSituasjonView(props: Props) {
    const [value, setValue] = useState(initTextState);

    return (
        <>
            <div className="veileder-budskap">
                <div className="custom-veilederpanel">
                    <Veilederpanel kompakt={true} svg={<SVG id="veileder-icon"/>}>
                        <Undertittel>
                            Fortell om
                        </Undertittel>
                        <div>
                            <ul>
                                <li>hva slags jobb du ønsker deg</li>
                                <li>hva som hindrer deg i å jobbe</li>
                            </ul>
                        </div>
                    </Veilederpanel>
                </div>
            </div>
            <div className="spm">
                <AlleredeSvart visible={props.answered} className="spm-row"/>
                <div className="spm-row">
                    <Textarea
                        placeholder="Skriv til veilederen din"
                        textareaClass="spm-text-area"
                        label={false}
                        tellerTekst={() => false}
                        value={value}
                        disabled={props.loading}
                        onChange={(e) => setValue((e.target as HTMLInputElement).value)}
                    />
                </div>
                <Hovedknapp
                    spinner={props.loading}
                    disabled={props.loading}
                    onClick={() => props.onSubmit(value)}
                >
                    Send
                </Hovedknapp>
            </div>
            <Lenke href={props.fallbackUrl} onClick={() => avbrytMetrikk(PAGE_ID)}>
                Avbryt
            </Lenke>
        </>
    );
}

export default DinSituasjonView;