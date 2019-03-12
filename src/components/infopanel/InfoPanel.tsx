import * as React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import './InfoPanel.less';
import { ReactComponent as InfoIcon } from './info.svg';

interface InfoPanelProps {
    children: React.ReactNode | React.ReactChild | React.ReactChildren;
}

function InfoPanel(props: InfoPanelProps) {
    return (
        <div className="spm-info">
            <span className="spm-info__ikon" aria-label="info">
                <InfoIcon/>
            </span>
            <Normaltekst >
                {props.children}
            </Normaltekst>
        </div>
    );
}

export default InfoPanel;