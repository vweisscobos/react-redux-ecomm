import React from 'react';
import PropTypes from 'prop-types';

const ClientListRow = ({ client }) => {
  return (
    <li>
      { client.name }
    </li>
  );
};

ClientListRow.propTypes = {
  client: PropTypes.object.isRequired
};

export default ClientListRow;