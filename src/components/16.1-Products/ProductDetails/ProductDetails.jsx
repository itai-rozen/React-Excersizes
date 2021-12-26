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

        return (
            <div>
                <h1>yo! details</h1>
                <div className="details-container">

                </div>
            </div>
        )
    }
}

export default ProductDetails