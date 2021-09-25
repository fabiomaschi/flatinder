import { Container, Header, Image } from "semantic-ui-react";
import { CoverImg, DemoUser } from "../assets";

const style = {
  coverContainer: {
    height: "300px",
    background: `url(${CoverImg}) no-repeat center`,
    backgroundSize: "cover",
  },
  profileImageContainer: {
    marginTop: "-100px",
    height: "200px",
    width: "200px",
    margin: "0 auto",
  },
  profileImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
};

const ApplicantProfilePage = () => {
  return (
    <Container fluid>
      <div style={style.coverContainer} />
      <div style={style.profileImageContainer}>
        <Image
          src={DemoUser}
          size={"medium"}
          circular
          style={style.profileImage}
        />
      </div>
      <Header as="h1">User Name</Header>
    </Container>
  );
};

export default ApplicantProfilePage;
