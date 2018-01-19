import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

export default class home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>home</Text>
                <Button 
                    onPress={() => {this.props.navigation.navigate('Search')}}
                    title="go to Search"
                    style={{marginBottom:10}}
                />
                <Button 
                    onPress={() => {this.props.navigation.navigate('DrawerToggle')}}
                    title="Drawer"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ff9999',
    },
});
