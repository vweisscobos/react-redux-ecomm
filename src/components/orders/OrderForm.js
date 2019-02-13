import React from 'react';
import PropTypes from 'prop-types';
import TextInput from "../commom/TextInput";
import SelectInput from "../commom/SelectInput";
import ListInput from "../commom/ListInput";
import AutoCompleteInput from "../commom/AutoCompleteInput";

const OrderForm = ({ order, allStatus, onChange, onSave, errors, products, onTermChange, term }) => {

  return (
    <form>
      <span>{order.id}</span>

      <AutoCompleteInput
        term={term}
        list={products}
        onTermChange={onTermChange}
        onAdd={() => console.log("a")} />

      <ListInput
        list={order.products}
        name={'products'}
        onChange={onChange}
      />

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
        options={allStatus}
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