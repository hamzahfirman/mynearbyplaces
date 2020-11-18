import React from 'react';


class Businesses extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
        return(
            <div>
                {this.props.location.business}
                {this.props.location.location}
                This is Businesses
                
            </div>
        );

    }

}

export default Businesses;