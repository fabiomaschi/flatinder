import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Table,
} from "semantic-ui-react";
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
        <Divider hidden />
        <Header as="h1">Shared flat in Altstetten</Header>
        <Divider hidden />
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2">Summary</Header>
              <List>
                <List.Item
                  icon={"money bill alternate outline"}
                  content={"900 CHF / month"}
                />

                <List.Item icon={"resize horizontal"} content={"24 sqm"} />

                <List.Item icon={"bath"} content={"Own bathroom"} />
              </List>
            </Grid.Column>

            <Grid.Column floated={"right"} textAlign={"right"}>
              <Header as="h2">Flat Demographics</Header>
              <div style={{ right: 0 }}>
                <Table
                  basic="very"
                  celled
                  collapsing
                  style={{ float: "right" }}
                >
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Male flatmates</Table.Cell>
                      <Table.Cell>4</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Female flatmates</Table.Cell>
                      <Table.Cell>2</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Youngest flatmate (age)</Table.Cell>
                      <Table.Cell>21</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Oldest flatmate (age)</Table.Cell>
                      <Table.Cell>37</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Container>
  );
};

export default FlatProfilePage;
