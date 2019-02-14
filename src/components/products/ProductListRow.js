import React from 'react';
import PropTypes from 'prop-types';

const ProductListRow = ({product}) => {
  return (
    <li>
      {product.title}
    </li>
  );
};

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListRow;