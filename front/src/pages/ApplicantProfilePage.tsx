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
    margin: "-100px auto 1rem auto",
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
      <div style={{ textAlign: "center" }}>
        <Header as="h1">User Name</Header>
        <p>
          <Icon name={"point"} color={"teal"} />
          Zürich, CH
        </p>
      </div>
      <Divider hidden />
      <Grid columns={3} divided textAlign={"center"}>
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
      <Divider hidden />
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          aliquam nisi. Cras varius arcu quis enim varius, vitae porta arcu
          rutrum. Proin vitae erat eu enim laoreet dapibus sed condimentum
          tellus. Nullam est erat, dignissim sit amet purus vel, molestie
          bibendum odio. Phasellus eleifend pellentesque dolor et rutrum. Sed id
          efficitur enim, ac blandit quam. Maecenas mattis diam eget eros
          vestibulum malesuada. Sed a erat faucibus, tristique mi sed, interdum
          lacus. Duis vitae viverra arcu. Vestibulum gravida nec mi consequat
          imperdiet. Suspendisse non pellentesque mi. Integer dapibus gravida
          tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse sodales risus nec velit rhoncus, vitae fringilla odio
          cursus.
        </p>

        <p>
          In ornare consectetur ligula, nec convallis diam vestibulum varius.
          Duis purus arcu, ultricies vel fermentum quis, dapibus eu erat. Nullam
          magna diam, rhoncus sit amet lobortis venenatis, dapibus eu ligula.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
          tempus quam turpis, vel blandit nulla maximus nec. Cras dignissim
          purus nisi, non ultrices neque consectetur ac. Donec blandit aliquam
          vulputate. Vivamus eu arcu sit amet dui viverra pharetra. Suspendisse
          ac urna pellentesque, porta leo et, imperdiet lorem. Ut fermentum
          rutrum est quis rhoncus.
        </p>
      </Container>
    </Container>
  );
};

export default ApplicantProfilePage;
