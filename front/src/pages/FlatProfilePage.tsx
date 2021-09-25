import { Container, Header } from "semantic-ui-react";
import { DemoLivingroom } from "../assets";

const style = {
  coverContainer: {
    height: "40vh",
    minHeight: "350px",
    background: `url(${DemoLivingroom}) no-repeat center`,
    backgroundSize: "cover",
  },
};

const FlatProfilePage = () => {
  return (
    <Container fluid>
      <div style={style.coverContainer} />
      <Container>
        <Header as="h1">Shared flat in Altstetten</Header>
      </Container>
    </Container>
  );
};

export default FlatProfilePage;
