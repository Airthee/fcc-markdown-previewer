import React from 'react';
import PropTypes from 'prop-types';

class MarkdownInput extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const textAreaStyle = {
      width: '100%',
      height: '100%'
    };

    return (
      <textarea
        id={this.props.id}
        value={this.props.value}
        onChange={this.props.onUserInput}
        style={textAreaStyle} />
    );
  }
}

// Prop types
MarkdownInput.propTypes = {
  id: PropTypes.any,
  onUserInput: PropTypes.func,
  value: PropTypes.string
};

export default MarkdownInput;