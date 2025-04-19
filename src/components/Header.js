import { Container, Image } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Container className="text-center container">
        <h1 className="my-4">Miss Tasks has arrived!</h1>

        <Image
          /* src={missTasks} */
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
    </>
  );
};

export default Header;
