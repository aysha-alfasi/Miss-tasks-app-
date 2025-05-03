import { Container, Image } from "react-bootstrap";
import missTasks from "../imgs/missTasksbg1.png";
import "./Header.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Header = () => {
  return (
    <>
      <TrackVisibility>
        {({ isVisible }) => (
          <Container
            className={`text-center container ${
              isVisible ? "animate__animated animate__fadeInDown" : ""
            }`}
          >
            <h1 className="my-4">Miss Tasks has arrived!</h1>

            <Image
              src={missTasks}
              roundedCircle
              width="180"
              height="180"
              alt="miss-tasks-img .."
              className="mb-3 miss-tasks-bg"
            />
            <div>
              <label>Tell Miss Tasks about your progress</label>
            </div>
          </Container>
        )}
      </TrackVisibility>
    </>
  );
};

export default Header;
