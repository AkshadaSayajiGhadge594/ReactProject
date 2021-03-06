import React, { Component } from 'react'
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';
import Tooltip from '@material-ui/core/Tooltip';

export default class Products extends Component { 
    render() {
        return (
            <div>
            <Fade  bottom cascade>
            <ul className="products">
            {this.props.products.map(products => (
                <li key={products._id}>
                    <div className="product">
                    <a href={"#" + products._id} >
                        <img src={products.image} alt={products.title}></img>
                    <p>
                        {products.title}
                    </p>
                    </a>
                    <div className="product-price">
                    <div>{formatCurrency(products.price)}</div>
                    <Tooltip title= "Add">
                        <button onClick={ () =>  this.props.addToCart(products)} className="button primary">ADD TO CART</button> 
                    </Tooltip>
                    </div>
                
                    </div>
                </li>
            ) )}
            </ul>
            </Fade>               
            </div>
        )
     }
}
