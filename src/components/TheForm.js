import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";

const TheForm = ({ handleSubmit, loading, showWarning, input, setInput }) => {
  return (
    <>
      <Container className="my-5 container">
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4}>
            {showWarning && (
              <Alert className="danger">
                I'm all ears but you can't send an empty message🤭.
              </Alert>
            )}

            <Form onSubmit={handleSubmit} className="text-center">
              <Form.Group controlId="formInput">
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="mb-3 textarea"
                />
              </Form.Group>
              <Button className="btn-primary" type="submit" block="true">
                {loading ? "Analyzing..." : "Send to Miss Tasks"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default TheForm;
