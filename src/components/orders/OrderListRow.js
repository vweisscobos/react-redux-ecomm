import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const OrderListRow = ({id, products, client, status}) => {
  return (
    <tr>
      <td><NavLink to={'/pedido/' + id}>{id}</NavLink></td>
      <td>
        {
          products.map(product => {
            return <span key={product}>{product}<br/></span>
          })
        }
      </td>
      <td>{client}</td>
      <td>{status}</td>
    </tr>
  );
};

OrderListRow.propTypes = {
  id: PropTypes.number.isRequired,
  products: PropTypes.array.isRequired,
  client: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default OrderListRow;