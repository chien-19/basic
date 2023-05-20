import React from 'react';
import Alert from '../Alert';

import './number.scss';

class Number extends React.Component {
    constructor(props) {
        super(props);
        console.log("mounting : constructor la 1th")
        this.state = {
            number: 0,
            show_alert: true
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("thu tu chay cua : getDerivedStateFromProps la 2th")
    //     if (props.defaultNumber != state.number) {
    //         return { number: props.defaultNumber };
    //     }

    // }

    componentDidMount() {
        console.log("mouting : componentDidMount la 4th")
        // setTimeout(() => {
        //     this.setState({ number: 200 })
        // }, 5000)
    }

    onIncrementNumber = () => {
        this.setState({
            number: this.state.number + 1
        });
    }


    onDecrementNumber = () => {
        this.setState({
            number: this.state.number - 1
        });
    }


    //updating
    shouldComponentUpdate() {
        console.log("updating component : shouldComponentUpdate la 2th")
        return true;
    }

    //updating
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("updating component : getSnapshotBeforeUpdate la 4th")
        console.log("currentState: ", this.state.number);
        console.log("prevState: ", prevState.number);
    }

    //updating
    componentDidUpdate() {
        console.log("updating component : componentDidUpdate la 5th")
    }


    onHideAlert = () => {
        this.setState({
            show_alert: false
        });
    }

    render() {
        console.log("thu tu chay cua : render la 3th")
        return <div className='number__container'>
            {
                this.state.show_alert === true ? (<div><Alert /> <button onClick={this.onHideAlert}>hide alert</button></div>) : ''
            }


            <h2>Number: {this.state.number}</h2>
            <button onClick={this.onIncrementNumber} className="btn-increment">+</button>
            <button onClick={this.onDecrementNumber} className="btn-decrement">-</button>
        </div>
    }
}
export default Number;