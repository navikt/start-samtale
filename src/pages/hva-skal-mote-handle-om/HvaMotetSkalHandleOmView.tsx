import React, { useState } from 'react';
import AlleredeSvart from '../../components/AlleredeSvart';
import { avbrytMetrikk } from '../../components/util/frontendlogger';
import { PAGE_ID } from './HvaMotetSkalHandleOmSporsmal';
import { feilmelding } from '../../components/util/text-area-utils';
import {Button, GuidePanel, Link, Textarea} from "@navikt/ds-react";

interface Props {
    loading: boolean;
    onSubmit: (arg: string) => void;
    answered: boolean;
}

const initTextState: string = '';
const maksLengde = 500;

export const SPORSMAL = 'Hva ønsker du å snakke om?';
const customFeil = 'Du kan ikke sende en tom melding.';

function HvaMotetSkalHandleOmView(props: Props) {
    const [value, setValue] = useState(initTextState);
    const [feilState, setFeil] = useState(false);

    const feil = feilmelding(feilState, maksLengde, value, customFeil);

    return (
        <>
            <div className="veileder-budskap">
                <div className="custom-veilederpanel">
                    <GuidePanel>
                        I samtalen ønsker veilederen å bli bedre kjent med situasjonen din, og å snakke om jobbmulighetene dine.
                    </GuidePanel>
                </div>
            </div>
            <div className="spm">
                <AlleredeSvart visible={props.answered} className="spm-row"/>
                <div className="spm-row">
                    <Textarea
                        placeholder="Skriv noen stikkord til samtalen, eller hopp over"
                        disabled={props.loading}
                        label={SPORSMAL}
                        maxLength={maksLengde}
                        error={feil}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <Button
                    className="send-knapp"
                    loading={props.loading}
                    disabled={props.loading}
                    onClick={() => {
                        if (value === '' || value.length >= maksLengde) {
                            setFeil(true);
                        } else {
                            setFeil(false);
                            props.onSubmit(value);
                        }
                    }}
                >
                    Send
                </Button>
                <Button
                    className="hopp-knapp"
                    disabled={props.loading}
                    variant="secondary"
                    onClick={() => props.onSubmit('')}
                >
                    Hopp over
                </Button>
            </div>
            <Link href={`${process.env.PUBLIC_URL}/minside`} onClick={() => avbrytMetrikk(PAGE_ID)}>
                Avbryt
            </Link>
        </>
    );
}

export default HvaMotetSkalHandleOmView;