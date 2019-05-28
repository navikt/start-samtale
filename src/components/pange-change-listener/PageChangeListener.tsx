import { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

function PageChangeListener(props: RouteComponentProps) {
    useEffect(() => {
        window.scroll(0, 0);
    }, [props.location.pathname]);

    return null;

}

export default withRouter(PageChangeListener);