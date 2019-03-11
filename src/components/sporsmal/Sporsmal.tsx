import React, { useState } from 'react';
import {Innholdstittel} from 'nav-frontend-typografi';
import {RadioPanelGruppe} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";

const initRadioState: string | undefined = undefined;
const initButtonState = false;

function Sporsmal () {
    const [value, setValue] = useState(initRadioState);
    const [btnPushed, setBtnState] = useState(initButtonState);
    return <div>
            <Innholdstittel>
                Spørsmål 1
            </Innholdstittel>

            <RadioPanelGruppe
                legend=""
                name=""
                radios={[
                    { label: 'Eplejuice', value: 'juice1' },
                    { label: 'Appelsinjuice', value: 'juice2' },
                    { label: 'Melk', value: 'melk' },
                    { label: 'Ananasjuice', value: 'juice3' }
                ]}
                checked={value}
                onChange={(e, val) => setValue(val)}
                feil={btnPushed ? {feilmelding: 'Du må svare på spørsmålet før du kan gå videre.'}: undefined}
            />
            <Hovedknapp onClick={() => {
                setBtnState(true)}
            }>Neste</Hovedknapp>
        </div>
}

export default Sporsmal;