import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props);
        //los componentes 100% puros no tienen states
        this.state = {
            age : 20
        }
    }
    
    render() {
        return (
            <div>
                <h1>¡HOLA { this.props.name }!</h1>
                <h2>Tu edad es de: { this.state.age }</h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }
    
    birthday = () =>{
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }   
        ))
    }

}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
