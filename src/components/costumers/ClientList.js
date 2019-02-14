import React from 'react';
import PropTypes from 'prop-types';
import ClientListRow from './ClientListRow';

const ClientList = ({ clients }) => {
  return (
    <ul>
      {
        clients.map((client, index) => {
          return <ClientListRow client={client} key={index} />
        })
      }
    </ul>
  );
};

ClientList.propTypes = {
  clients: PropTypes.array.isRequired
};

export default ClientList;