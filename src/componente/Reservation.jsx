import React , { Component } from 'react'

export default class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuest: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render(){
        return (
            <form>
            <label>
                Estão indo:
                <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Número de convidados:
                    <input
                    name="numberOfGuest"
                    type="number"
                    value={this.state.numberOfGuest}
                    onChange={this.handleInputChange} />
                </label>
                </form>
        );                                                   ''
    }
}