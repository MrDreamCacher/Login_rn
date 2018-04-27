import React from 'react';

import {
    StyleSheet,
    View
} from 'react-native';

class PasswordLoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileNo: '',
            password: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

module.exports = PasswordLoginScreen;
