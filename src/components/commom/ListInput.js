import React from 'react';
import PropTypes from 'prop-types';

class ListInput extends React.Component {
  constructor() {
    super();

    this.state = {
      list: []
    };

    this.onItemChange = this.onItemChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props.list)
  }

  onItemChange(evt, index) {
    const list = [...this.props.list];

    list[index] = evt.target.value;

    this.props.onChange({
      target: {
        name: this.props.name,
        value: list
      }
    });
  }

  render() {

    return (
      <div>
        {
          this.props.list &&
              this.props.list.map((item, index) => {
                return <input
                  key={index}
                  value={item}
                  onChange={evt => this.onItemChange(evt, index)}
                />
              })
        }
      </div>
    );
  }
}

ListInput.propTypes = {
  //  proptypes
}

export default ListInput;