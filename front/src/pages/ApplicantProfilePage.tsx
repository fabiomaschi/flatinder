import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Statistic,
} from "semantic-ui-react";
import { CoverImg, DemoUser } from "../assets";

const style = {
  coverContainer: {
    height: "300px",
    background: `url(${CoverImg}) no-repeat center`,
    backgroundSize: "cover",
  },
  profileImageContainer: {
    height: "200px",
    width: "200px",
    margin: "-100px auto 0 auto",
  },
  profileImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
};

const ApplicantProfilePage = () => {
  interface StatsType {
    label: string;
    value: string | number;
    description?: string;
  }
  // TODO replace with data from API
  const stats: StatsType[] = [
    {
      label: "years old",
      value: 21,
    },
    {
      label: "max budget",
      value: "800 CHF",
    },
    {
      label: "languages",
      value: 3,
    },
  ];
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
      <p>
        <Icon name={"point"} color={"teal"} />
        Zürich, CH
      </p>
      <Divider hidden />
      <Grid columns={3} divided>
        <Grid.Row>
          {stats.map(({ label, value }: StatsType) => (
            <Grid.Column>
              <Statistic
                label={label}
                value={value}
                size={"tiny"}
                color={"teal"}
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default ApplicantProfilePage;
