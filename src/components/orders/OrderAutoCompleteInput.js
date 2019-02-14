import React from 'react';
import PropTypes from 'prop-types';
import AutoCompleteInput from "../commom/AutoCompleteInput";
import * as productActions from '../../actions/productActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class OrderAutoCompleteInput extends React.Component {
  constructor() {
    super();

    this.state = {
      term: '',
      isValid: false
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  updateSearch(evt) {
    let validTerm = this.props.products.filter(p => p.text === evt.target.value);

    this.searchAndUpdate(evt.target.value, validTerm.length > 0);
  }

  addProduct(evt) {
    evt.preventDefault();
    this.props.onProductClick(this.state.term);
    this.searchAndUpdate('', false);
  }

  searchAndUpdate(term, validation) {
    this.setState({
      term: term,
      isValid: validation
    }, () => {
      this.props.actions.getProducts(this.state.term);
    });
  }

  render() {
    const {
      products
    } = this.props;

    return (
      <AutoCompleteInput
        list={products}
        term={this.state.term}
        onAdd={this.addProduct}
        onSearchChange={this.updateSearch}
        isValid={this.state.isValid}/>
    );
  }
}

OrderAutoCompleteInput.propTypes = {
  products: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  let products = [];

  if (state.products.length > 0) {
    products = state.products.map(p => {
      return Object.assign({ text: p.title }, p);
    })
  }

  return { products }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(productActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderAutoCompleteInput);