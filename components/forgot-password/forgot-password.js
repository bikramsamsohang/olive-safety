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
class ForgotPassword extends Component {
    render() {
        return (
            <Container style={Styles.wrapper}>
                <Container style={Styles.logoWrapper}>
                    <Image
                    style={Styles.logo}
                    source={require('../../assets/olive.png')} ></Image>
                </Container>

                <Content style={{ margin: 12 }}>
                    <H2 style={Styles.title}>Forget Password</H2>
                    <Row>
                        <Text>
                            We'll send you a
                        </Text>
                        <Text >
                            Link
                        </Text>
                        <Text >
                            to reset it.
                        </Text>
                    </Row>
                    <Form>
                        <Item style={Styles.formControl} floatingLabel>
                        <Label>Email address</Label>
                        <Input style={Styles.formText}  />
                        </Item>
                    </Form>
                    <Row  style={{ marginTop: 40 }}>
                        <Col>
                            <Button rounded style={Styles.loginButton}>
                            <Text style={{ color:Colors.primary}}>Reset</Text>
                            </Button>
                        </Col>
                    </Row>                    
                </Content>

                <Row>
                    <Col>
                        <Text>
                            Know your Password.
                        </Text>
                    </Col>
                    <Col>
                        <Text>
                            Get Started
                        </Text>
                    </Col>
                </Row>
            </Container>
        )
    }        
}

export default ForgotPassword;