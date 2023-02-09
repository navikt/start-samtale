import React, { useState } from 'react';
import AlleredeSvart from '../../components/AlleredeSvart';
import { avbrytMetrikk } from '../../components/util/frontendlogger';
import { PAGE_ID } from './NarPasserMotetSporsmal';
import {Button, Label, Link, TextField} from "@navikt/ds-react";

export const SPORSMAL = 'Er det noe tidspunkt som ikke passer?';

interface Props {
    loading: boolean;
    onSubmit: (arg: string) => void;
    answered: boolean;
}

const inputState: string = '';

function NarPasserMotetView(props: Props) {
    const [value, setValue] = useState(inputState);
    const [feilState, setFeil] = useState(false);

    const feil = feilState ? 'Du kan ikke sende en tom melding' : undefined;

    return (
        <>
            <div className="veileder-budskap">
                <Label className="custom-infotext">
                    Hvis det er tidspunkt som ikke passer, kan du skrive det under. Vi prøver å ta hensyn til det.
                </Label>
            </div>
            <div className="spm">
                <AlleredeSvart visible={props.answered} className="spm-row"/>
                <TextField
                    className="spm-row"
                    label="Er det noe tidspunkt som ikke passer?"
                    disabled={props.loading}
                    value={value}
                    placeholder="Det passer ikke på..."
                    error={feil}
                    onChange={(e) => setValue((e.target as HTMLInputElement).value)}
                />
                <Button
                    className="send-knapp"
                    loading={props.loading}
                    disabled={props.loading}
                    onClick={() => {
                        if (value === '') {
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
                    variant="secondary"
                    className="hopp-knapp"
                    disabled={props.loading}
                    onClick={() => props.onSubmit('')}
                >
                    Hopp over
                </Button>
            </div>
            <Link href={`${import.meta.env.BASE_URL}/minside`} onClick={() => avbrytMetrikk(PAGE_ID)}>
                Avbryt
            </Link>
        </>
    );
}

export default NarPasserMotetView;