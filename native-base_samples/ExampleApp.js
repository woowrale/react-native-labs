import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  ListItem,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Switch,
} from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                <ListItem icon>
                  <Left>
                    <Button style={{backgroundColor: '#FF9501'}}>
                      <Icon active name="airplane" />
                    </Button>
                  </Left>
                  <Body>
                    <Text>Airplane Mode</Text>
                  </Body>
                  <Right>
                    <Switch value={false} />
                  </Right>
                </ListItem>;
              }}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title color={'#f0ad4e'}>A.M.A. Seguros</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button light>
            <Text> Light </Text>
          </Button>
          <Button primary>
            <Text> Primary </Text>
          </Button>
          <Button success>
            <Text> Success </Text>
          </Button>
          <Button info>
            <Text> Info </Text>
          </Button>
          <Button warning>
            <Text> Warning </Text>
          </Button>
          <Button danger>
            <Text> Danger </Text>
          </Button>
          <Button color={'#f0ad4e'}>
            <Text> Dark </Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
