import React from 'react';
import PropTypes from 'prop-types';
import TextInput from "../commom/TextInput";
import SelectInput from "../commom/SelectInput";
import OrderAutoCompleteInput from "./OrderAutoCompleteInput";

const OrderForm = ({ order, allStatus, onChange, onSave, errors }) => {

  return (
    <form>
      <span>{order.id}</span>

      <OrderAutoCompleteInput
        onProductClick={prod => {
          const products = [...order.products];
          products.push(prod);

          onChange({ target: {
            name: 'products',
            value: products
          }})
        }}
      />

      <ul>
        <h1>Produtos</h1>
        {
          order.products && order.products.map((prod, index) => {
            return <li key={index}>{prod}</li>
          })
        }
      </ul>

      <TextInput
        label={'Cliente'}
        onChange={onChange}
        name={'client'}
        value={order.client}
      />

      <SelectInput
        label={'Status'}
        name={'status'}
        onChange={onChange}
        value={order.status}
        options={[
          { text: 'Em Produção', value: 'em producao' },
          { text: 'Produzido', value: 'produzido' },
          { text: 'Finalizado', value: 'finalizado' }
        ]}
        error={errors.status}
        defaultOption={'Selecione um status'} />

      <input
        type={'submit'}
        className={'btn'}
        value={'Save'}
        onClick={onSave} />

    </form>
  );
};

OrderForm.propTypes = {
  order: PropTypes.object.isRequired,
  allStatus: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default OrderForm;