import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OrderForm from "./OrderForm";
import { bindActionCreators } from 'redux';
import * as orderActions from '../../actions/orderActions';
import * as productActions from '../../actions/productActions';
import toastr from 'toastr';
import { Redirect } from 'react-router-dom';

class ManageOrderPage extends React.Component {
  constructor() {
    super();

    this.state = {
      order: {},
      errors: {},
      redirectTo: null,
      saving: false,
      products: [],
      term: ''
    };

    this.updateOrderState = this.updateOrderState.bind(this);
    this.saveOrder = this.saveOrder.bind(this);
  }

  componentDidMount() {
    this.setState({ order: Object.assign({}, this.props.order) })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.order.id !== nextProps.order.id) {
      this.setState({ order: Object.assign({}, nextProps.order) })
    }
  }

  updateOrderState(evt) {
    const field = evt.target.name;
    let order = Object.assign({}, this.state.order);

    order[field] = evt.target.value;

    return this.setState({ order: order })
  }

  saveOrder(evt) {
    evt.preventDefault();
    this.setState({ saving: true });
    this.props.actions.saveOrder(this.state.order)
      .then(() => this.redirect('/pedidos'))
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      })
  }

  redirect(path) {
    this.setState({ redirectTo: path })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
     }

    return (
      <div>
        <h1>Editar pedido</h1>
        <OrderForm
          order={this.state.order}
          errors={this.state.errors}
          onChange={this.updateOrderState}
          onSave={this.saveOrder}
          allStatus={[
            'Solicitado',
            'Produzindo',
            'Produzido',
            'Finalizado'
          ]}
        />
      </div>
    );
  }
}

ManageOrderPage.propTypes = {
  actions: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired
};

function getOrderById(orders, id) {
  const order = orders.filter(order => order.id === id);
  if (order) return order[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const orderId = parseInt(ownProps.match.params.id);

  let order = {
    products: [],
    client: '',
    status: ''
  };

  if (orderId && state.orders.length > 0) {
    order = getOrderById(state.orders, orderId);
  }
  return {
    order: order
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, orderActions, productActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrderPage);