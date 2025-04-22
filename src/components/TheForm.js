import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./TheForm.css";

const TheForm = ({ handleSubmit, loading, showWarning, input, setInput }) => {
  return (
    <>
      <Container className="my-5 container">
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4}>
            {showWarning && (
              <TrackVisibility>
                {({ isVisible }) => (
                  <Alert
                    className={`danger ${
                      isVisible ? "animate__animated animate__fadeInUp" : ""
                    }`}
                  >
                    I'm all ears but you can't send an empty message🤭.
                  </Alert>
                )}
              </TrackVisibility>
            )}

            <TrackVisibility>
              {({ isVisible }) => (
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
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default TheForm;
