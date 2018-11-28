import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Container, Button, Header, Content, Item, Input, Form } from 'native-base';

class Login extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Email address" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item> 
                        <Button rounded light>
                            <Text style={styles.login}>Login</Text>
                        </Button>

                    </Form>                    
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    login: {
        fontSize: 20,
        color: 'blue'
    }
})

export default Login;