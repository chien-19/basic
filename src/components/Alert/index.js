import React from 'react';
class Alert extends React.Component {
    componentWillUnmount() {
        console.log("componentWillUnmount: ham nay chay khi Alert bi xoa khoi DOM");
    }
    render() {
        return (
            <h5>Ban dang hoc lifecycle reactjs!</h5>
        );
    }
}

export default Alert;