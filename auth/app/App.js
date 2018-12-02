import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Amplify, { Auth } from 'aws-amplify';
import AWSConfig from '../aws-exports';
Amplify.configure(AWSConfig);

import Tabs from './routes/Tabs';

export default class App extends Component {
    constructor() {
        this.state = {
            isAuthenticated: false,
        };
    }

    authenticate(isAuthenticated) {
        this.setState({ isAuthenticated });
    }

    render() {
        if (this.state.isAuthenticated) {
            console.log('Auth: ', Auth);
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text>Hello {Auth.user.username}!</Text>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Tabs
                    screenProps={{
                        authenticate: this.authenticate.bind(this),
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
