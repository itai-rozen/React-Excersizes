import React from "react";
import './productDetails.css'

class ProductDetails extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('props: ', this.props)
        console.log('this: ',this)
    }
    render() {

        const { store } = this.props
        console.log('store: ',store)
        return (
            <div>
                <h1>yo! details</h1>
                <div className="details-container">

                    {/* <h2>{product.title}</h2>
                    <h3>{product.price}$</h3>
                    <img src={product.imageUrl} alt="" /> */}
                </div>
            </div>
        )
    }
}

export default ProductDetails