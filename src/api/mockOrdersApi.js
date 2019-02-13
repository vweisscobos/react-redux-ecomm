import delay from './delay';

const orders = [
  {
    id: 1,
    products: [
      'sabonete',
      'pasta de dente'
    ],
    client: 'Vinicius',
    status: 'Em produção'
  },
  {
    id: 2,
    products: [
      'Desodorante',
      'Sabonete Banana',
      'Sabonete Melaleuca'
    ],
    client: 'Gabrieli',
    status: 'Produzido'
  },
  {
    id: 3,
    products: [
      'Desodorante',
      'Sabonete Banana'
    ],
    client: 'Ana',
    status: 'Finalizado'
  }
];

const generateId = () => {
  return orders[orders.length - 1]['id'] + 1;
};

class OrdersApi {
  static getAllOrders() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], orders));
      }, delay);
    });
  }

  static saveOrder(order) {
    order = Object.assign({}, order);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (order.id) {
          const existingOrderId = orders.findIndex(a => { return a.id === order.id });
          orders.splice(existingOrderId, 1, order);
        } else {
          order.id = generateId();
          orders.push(order);
        }

        resolve(order);
      }, delay);
    })
  }
}

export default OrdersApi;