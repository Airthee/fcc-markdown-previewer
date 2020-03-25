import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

class MarkdownPreview extends React.Component {
  render() {
    const containerStyle = {
      width: '100%',
      minHeight: '50vh'
    };

    return (
      <Container
        id={this.props.id}
        style={containerStyle}
      >
        <ReactMarkdown source={this.props.content} />
      </ Container>
    );
  }
}

// Prop types
MarkdownPreview.propTypes = {
  id: PropTypes.any,
  content: PropTypes.string
};

export default MarkdownPreview;