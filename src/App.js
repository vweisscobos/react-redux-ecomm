import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrdersPage from './components/orders/OrdersPage';
import CostumersPage from './components/costumers/CostumersPage';
import './App.css';
import ManageOrderPage from "./components/orders/ManageOrderPage";
import ProductsPage from './components/products/ProductsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink to={"/inicio"}>Início</NavLink>
            <NavLink to={"/pedidos"}>Pedidos</NavLink>
            <NavLink to={"/clientes"}>Clientes</NavLink>
            <NavLink to={"/produtos"}>Produtos</NavLink>
          </nav>
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route path={"/inicio"} component={HomePage} />
            <Route path={"/pedidos"} component={OrdersPage} />
            <Route path={"/novopedido"} component={ManageOrderPage} />
            <Route path={"/pedido/:id"} component={ManageOrderPage}/>
            <Route path={"/clientes"} component={CostumersPage} />
            <Route path={"/produtos"} component={ProductsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;