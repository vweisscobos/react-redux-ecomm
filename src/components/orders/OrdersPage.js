import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as orderActions from '../../actions/orderActions';
import PropTypes from 'prop-types';
import OrderList from "./OrderList";
import { connect } from 'react-redux';

class OrdersPage extends React.Component {
  constructor() {
    super();

    this.state = {
      redirectTo: null
    }

    this.redirectToAddOrder = this.redirectToAddOrder.bind(this);
  }

  redirect(path) {
    this.setState({
      redirectTo: path
    })
  }

  redirectToAddOrder() {
    this.redirect("/novopedido");
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo}/>
    }

    return (
      <div>
        <h1>Pedidos</h1>
        <OrderList orders={this.props.orders}/>
        <input
          type={'submit'}
          value={'Novo pedido'}
          onClick={this.redirectToAddOrder}/>
      </div>
    );
  }
}

OrdersPage.propTypes = {
  orders: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    orders: state.orders
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(orderActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);