import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class HeaderIconExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>A.M.A Seguros</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="" />
            </Button>
          </Right>
        </Header>
        <Grid>
          <Col style={{backgroundColor: '#635DB7', height: 200}}></Col>
          <Col style={{backgroundColor: '#00CE9F', height: 200}}></Col>
        </Grid>
      </Container>
    );
  }
}