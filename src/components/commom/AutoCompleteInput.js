import React from 'react';
import PropTypes from 'prop-types';

class AutoCompleteInput extends React.Component {

  constructor() {
    super();

    this.state = {
      isTermValid: false,
      term: ''
    };

    this.validate = this.validate.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  validate() {
    const existingItem = this.props.list.filter(i => i.text === this.state.term );

    this.setState({
      isTermValid: existingItem > 0
    });
  }

  onAddClick(evt) {
    evt.preventDefault();
    this.props.onAdd(this.props.list.indexOf(i => i.text === this.state.term)[0]);
  }

  render() {
    const {
      list,
      error,
      onChange
    } = this.props;

    return (
      <div>
        <input
          type={'text'}
          name={'coisa'}
          value={this.props.term}
          onChange={this.props.onTermChange}/>
        <ul>
          {
            list && list.map((item, index) => {
              return <li
                key={item.index}
                onClick={() => this.changeTerm(item.text)}
                style={{
                  display: this.state.isTermValid ||
                      this.state.term.trim() === "" ? "block": "block"
                }}
              >
                {item.text}
              </li>
            })
          }
        </ul>
        { error && <div className={'alert alert-danger'}>{error}</div> }
        <input
          type={'submit'}
          value={'+'}
          disabled={!this.state.isTermValid}
          onClick={this.onAddClick}/>

      </div>
    );
  }
}

AutoCompleteInput.propTypes = {
  list: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default AutoCompleteInput;