import React from 'react';
import PropTypes from 'prop-types';
import ProductListRow from './ProductListRow';

const ProductList = ({ products }) => {
  return (
    <ul>
      {
        products.map((prod, index) => {
          return <ProductListRow product={prod} key={index}/>
        })
      }
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;