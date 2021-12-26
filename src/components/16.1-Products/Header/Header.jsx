import React from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Homepage from "../Homepage/Homepage";
import Products from "../Products/Products";
import ProductDetails from "../ProductDetails/ProductDetails";
import './header.css'

class Header extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="header-container">
                    <Link to='/' >Homepage</Link>
                    <Link to='/products' >Products</Link>
                </div>
                <Route exact path="/" component={Homepage} >
                        <Homepage />
                    </Route>
                    <Route exact path="/products" >
                        <Products products={this.props.store} />
                    </Route>
                    <Route path="/products/:id">
                        <ProductDetails products={this.props.store} />
                    </Route>
            </BrowserRouter>
        )
    }
}

export default Header