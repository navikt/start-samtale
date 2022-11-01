import React from 'react';
import {AlertStripeInfo} from 'nav-frontend-alertstriper';

interface Props {
    visible: boolean;
    className: string;
}

const AlleredeSvart = (props: Props) => (
    props.visible ? <AlertStripeInfo className={props.className}>
        Du har allerede sendt et svar. Du kan gjerne svare igjen hvis du ønsker det.
    </AlertStripeInfo> : null
);

export default AlleredeSvart;
