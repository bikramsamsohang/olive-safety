import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import {
    Container, Header,
    Title,
    Content,
    Button,
    Item,
    Label,
    Input,
    Form,
    Text,
    H1,
    Left,
    Icon,
    Body,
    Right,
    H2,
    Col, Row, Grid
} from "native-base";

import Styles from './../../styles';
import Colors from '../../colors';
class Login extends Component {
    render() {
        return (
            <Container style={Styles.wrapper}>
                <Container style={Styles.logoWrapper}>
                    <Image
                    style={Styles.logo}
                    source={require('../../assets/olive.png')} ></Image>
                </Container>

                <Content style={{ margin: 12 }}>
                <H2 style={Styles.title}>Hello</H2>
                    <Form>
                        <Item style={Styles.formControl} floatingLabel>
                          <Label>Username</Label>
                          <Input style={Styles.formText} />
                        </Item>
                        <Item style={Styles.formControl} floatingLabel>
                          <Label>Password</Label>
                          <Input style={Styles.formText} secureTextEntry />
                        </Item>
                    </Form>
                    <Row  style={{ marginTop: 40 }}>
                        <Col>
                            <Button rounded style={Styles.loginButton}>
                            <Text style={{ color:Colors.primary}}>Login</Text>
                            </Button>
                        </Col>
                        <Col><Text style={{ marginTop: 11, color:Colors.white, textAlign: 'right' }}>Forgot password ?</Text></Col>
                    </Row>
                </Content>
            </Container>
        )
    }        
}

export default Login;