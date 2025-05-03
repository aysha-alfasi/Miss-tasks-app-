import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <Container className="text-center custom-footer">
          <p className="footer-first-line">
            Made by Aisha Alfassi {"<"}/♡{">"}
          </p>
          <p className="blog-name">The Cute coder ©</p>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
