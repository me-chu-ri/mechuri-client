import React from 'react';
import {View, StyleSheet} from 'react-native';
import LoginScreen from './LoginScreen';
import BackButton from '../components/BackButton';

const LoginContainer = () => {
    return (
        <View style={styles.container}>
            <BackButton />
            <LoginScreen />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
});

export default LoginContainer;