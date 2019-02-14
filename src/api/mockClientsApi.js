import delay from './delay';

const clients = [
  {
    name: 'Vinicius Weiss Cobos'
  },
  {
    name: 'Ana Flávia'
  },
  {
    name: 'Gabrieli Brum Moresco'
  },
  {
    name: 'Outro Nome'
  }
];

const generateId = () => {
  return clients[clients.length - 1]['id'] + 1;
};

class ClientsApi {
  static getAllClients() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], clients))
      }, delay)
    })
  }

  static saveClient(client) {
    client = Object.assign({}, client);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (client.id) {
          const existingClientId = client.findIndex(a => { return a.id === client.id });
          clients.splice(existingClientId, 1, client);
        } else {
          client.id = generateId();
          clients.push(client);
        }

        resolve(client);
      }, delay)
    })
  }
}

export default ClientsApi;