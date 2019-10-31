import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControlls from '../../components/Burger/BuildControlls/BuildControlls';

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
                <BuildControlls />
            </Auxilliary>
        );
    }
}

export default BurgerBuilder;