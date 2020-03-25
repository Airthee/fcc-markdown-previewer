import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppHeader from './components/AppHeader';
import MarkdownInput from './components/MarkdownInput';
import MarkdownPreview from './components/MarkdownPreview';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.loadExampleMarkdown = this.loadExampleMarkdown.bind(this);
  }

  componentDidMount() {
    this.loadExampleMarkdown();
  }

  loadExampleMarkdown() {
    axios.get('/static/example.md')
      .then((response) => {
        this.setState({
          userInput: response.data
        })
      })
      .catch((error) => {
        console.error(error);
      })
  }

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    return (
      <Container className="bg-light" style={{minHeight: '100vh'}}>
        <Row>
          <Col md={6}>
            <AppHeader />
          </Col>
        </Row>
        <Row>
          <Col>
            <MarkdownInput id="editor" value={this.state.userInput} onUserInput={this.handleUserInput} />
          </Col>
          <Col>
            <MarkdownPreview id="preview" content={this.state.userInput} />
          </Col>
        </Row>
      </Container>
    );
  };
}

export default App;
