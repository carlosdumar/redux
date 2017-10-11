import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productActions from '../actions/productActions';
import * as cartActions from '../actions/cartActions';
import ProductDetail from './ProductDetail';

class ProductDetailContainer extends Component {
    constructor(props) {
        super (props);

        this.handleOnAddItem = this.handleOnAddItem.bind(this);
    }
    
    handleOnAddItem (item) {
        this.props.cartActions.addCartItems(item);
    }

    componentWillMount () {
        await this.props.productActions.fetchProducts(this.props.productId);
    }
    render () {
        return (
            <ProductDetail 
                loading={this.props.loading}
                product={this.props.product}
                onAddItem={this.handleOnAddItem}
            />
        )
    }
}

ProductDetailContainer.propTypes = {
    productId: PropTypes.string.isRequired,
    product: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    productActions: PropTypes.objectOf(PropTypes.func).isRequired,
    onAddItem: PropTypes.func
}

function mapStateToProps (state, ownProps) {
    return {
        productId: ownProps.params.productId,
        product: state.activeProduct.product,
        loading: state.activeProduct.loading
    }  
}

function mapDispatchToProps (dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
        cartActions: bindActionCreators(cartActions)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);