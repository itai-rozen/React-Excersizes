import React from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './products.css'
import ProductDetails from "../ProductDetails/ProductDetails";

class Products extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        {/* <Switch> */ }
        {/* <Route exact path="/products/:id"  >
        <ProductDetails store={this.props.store}/>
        </Route> */}
        {/* </Switch> */ }

        return (
            <div className="products-container">
                <h1>PRODUCTS    </h1>
                <div className="ul products-list">
                    <BrowserRouter>
                        {
                            // this.props.store.map(product => {
                            //     return <Link key={product.id} to={`/products/${product.id}`} >
                            //         {product.title}
                            //     </Link>
                            // })
                        }

                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default Products