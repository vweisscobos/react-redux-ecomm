import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as productsActions from '../../actions/productActions';
import ProductList from './ProductList';

class ProductsPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <h1>Produtos</h1>
        <ProductList products={products} />
      </div>
    );
  }
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);