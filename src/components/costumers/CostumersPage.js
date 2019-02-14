import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientActions from '../../actions/clientActions';
import ClientList from './ClientList';

class CostumersPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { clients } = this.props;

    return (
      <div>
        <h1>Clientes</h1>
        <ClientList clients={clients}/>
      </div>
    );
  }
}

CostumersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  clients: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { clients: state.clients }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clientActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CostumersPage);