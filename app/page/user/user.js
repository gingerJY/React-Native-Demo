import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


export default class user extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>user</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ff9966',
    },
});
