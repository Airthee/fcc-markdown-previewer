import React from 'react';
import PropTypes from 'prop-types';

class MarkdownInput extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const textAreaStyle = {
      width: '100%',
      minHeight: '50vh'
    };

    return (
      <textarea id={this.props.id} style={textAreaStyle}></textarea>
    );
  }
}

// Prop types
MarkdownInput.propTypes = {
  id: PropTypes.any
};

export default MarkdownInput;