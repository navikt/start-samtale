import { Component } from 'react';

interface Props {
    to: string;
}

class Redirect extends Component<Props> {
    componentWillMount(){
        window.location.href = this.props.to;
    }

    render(){
        return null;
    }
}

export default Redirect;