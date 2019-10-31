import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 2,
            bacon: 2,
            cheese: 1,
            meat: 3
        }
    }

    render() {
        return (
            <Auxilliary>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Auxilliary>
        );
    }
}

export default BurgerBuilder;