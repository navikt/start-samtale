import React, { useState } from 'react';
import {Button, Link, Radio, RadioGroup} from '@navikt/ds-react';
import AlleredeSvart from '../../components/AlleredeSvart';
import { avbrytMetrikk } from '../../components/util/frontendlogger';
import { PAGE_ID } from './OnsketMoteFormSporsmal';

export type MoteForm = 'MEET' | 'PHONE' | 'WRITE' | 'VIDEO';

const MEET = 'MEET';
const PHONE = 'PHONE';
const VIDEO = 'VIDEO';
export const WRITE = 'WRITE';

export function moteFormValue(form: MoteForm): string {
    switch (form) {
        case 'MEET':
            return 'I et møte på NAV-kontoret';
        case 'PHONE':
            return 'I en telefonsamtale';
        case 'VIDEO':
            return 'I et videomøte';
        case 'WRITE':
            return 'Jeg vil skrive her';
        default:
            return 'Ukjent';
    }
}

export const SPORSMAL = 'Hvor vil du starte samtalen med veilederen din?';

interface Props {
    loading: boolean;
    onSubmit: (arg: string) => void;
    answered: boolean;
}

function OnsketMoteFormView(props: Props) {
    const [value, setValue] = useState<string | undefined>(undefined);
    const [feilState, setFeil] = useState(false);

    const feil = feilState ? 'Velg ett alternativ' : undefined;

    return (
        <>
            <div className="spm">
                <AlleredeSvart visible={props.answered} className="spm-row"/>
                <RadioGroup
                    className="spm-row"
                    legend={SPORSMAL}
                    onChange={(val: MoteForm) => setValue(val)}
                    error={feil}
                >
                    <Radio value={MEET} disabled={props.loading}>{moteFormValue(MEET)}</Radio>
                    <Radio value={PHONE} disabled={props.loading}>{moteFormValue(PHONE)}</Radio>
                    <Radio value={VIDEO} disabled={props.loading}>{moteFormValue(VIDEO)}</Radio>
                    <Radio value={WRITE} disabled={props.loading}>{moteFormValue(WRITE)}</Radio>
                </RadioGroup>


                <Button
                    className="send-knapp"
                    loading={props.loading}
                    disabled={props.loading}
                    onClick={() => {
                        if (value === undefined) {
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

export default OnsketMoteFormView;