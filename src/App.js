import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppHeader from './components/AppHeader';
import MarkdownInput from './components/MarkdownInput';

function App() {
  return (
    <Container className="bg-light" style={{minHeight: '100vh'}}>
      <Row>
        <Col md={6}>
          <AppHeader />
        </Col>
      </Row>
      <Row>
        <Col>
          <MarkdownInput id="editor" />
        </Col>
        <Col>
          CONTENT HERE
        </Col>
      </Row>
    </Container>
  );
}

export default App;
