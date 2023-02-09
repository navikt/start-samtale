import React, {useState} from 'react';
import AlleredeSvart from '../../components/AlleredeSvart';
import {avbrytMetrikk} from '../../components/util/frontendlogger';
import {PAGE_ID} from './DinSituasjonSporsmal';
import {feilmelding } from '../../components/util/text-area-utils';
import {Button, GuidePanel, Link, Textarea} from "@navikt/ds-react";

const initTextState: string = '';

interface Props {
    loading: boolean;
    onSubmit: (arg: string) => void;
    answered: boolean;
}

export const SPORSMAL = 'Fortell';
const customFeil = 'Fortell noe om situasjonen din, slik at du kan få veiledning som passer for deg.';
const maksLengde = 5000;

function DinSituasjonView(props: Props) {
    const [value, setValue] = useState(initTextState);
    const [feilState, setFeil] = useState(false);

    const feil = feilmelding(feilState, maksLengde, value, customFeil);
    const labelTekst = 'Skriv til veilederen din';
    return (
        <>
            <div className="veileder-budskap">
                <div className="custom-veilederpanel">
                    <GuidePanel>
                        Fortell gjerne om hva slags jobb du ønsker deg, og om hva som kan hindre deg i å jobbe.
                    </GuidePanel>
                </div>
            </div>
            <div className="spm">
                <AlleredeSvart visible={props.answered} className="spm-row"/>
                <div className="spm-row">
                    <Textarea
                        placeholder={labelTekst}
                        label={false}
                        maxLength={maksLengde}
                        value={value}
                        aria-label={labelTekst}
                        disabled={props.loading}
                        onChange={(e) => setValue(e.target.value)}
                        error={feil}
                    />
                </div>

                <Button
                    className="send-knapp"
                    loading={props.loading}
                    disabled={props.loading}
                    onClick={() => {
                        if (value === '' || value.length > maksLengde) {
                            setFeil(true);
                        } else {
                            setFeil(false);
                            props.onSubmit(value);
                        }
                    }}
                >
                    Send
                </Button>
            </div>
            <Link href={`${process.env.PUBLIC_URL}/minside`} onClick={() => avbrytMetrikk(PAGE_ID)}>
                Avbryt
            </Link>
        </>
    );
}

export default DinSituasjonView;