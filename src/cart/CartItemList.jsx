import React, { PropTypes } from 'react';
import uuid from 'uuid';

import CartItem from './CartItem';

const CartItemList = ({ items }) => (
    <div className="list-group">
        {
            items.map(item => (
                <CartItem 
                    key={uuid.v4()}
                    {...item}
                />
            )).reverse()
        }
    </div>
);

CartItemList.defaultProps = {
    items: []
}

CartItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}
export default CartItemList;