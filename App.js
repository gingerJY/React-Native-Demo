/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';

import { DrawerNavigator, StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Home from './app/page/home/home';
import Category from './app/page/category/category';
import User from './app/page/user/user';

import Search from './app/page/search/search';

export default class App extends Component<{}> {
    render() {
        return (
            <Drawer />
        );
    }
}

const Tab = TabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({ tintColor }) => (
                    <Image source={require('./app/img/home.png')} style={[{ tintColor: tintColor, width: 20, height: 20 }]} />
                ),
            })
        },
        Category: {
            screen: Category,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '分类',
                tabBarIcon: ({ tintColor }) => (
                    <Image source={require('./app/img/category.png')} style={[{ tintColor: tintColor, width: 20, height: 20 }]} />
                ),
            })
        },
        User: {
            screen: User,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '个人',
                tabBarIcon: ({ tintColor }) => (
                    <Image source={require('./app/img/account.png')} style={[{ tintColor: tintColor, width: 20, height: 20 }]} />
                ),
            })
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        // swipeEnabled: false,//是否滑动切换，默认true
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#b4282d',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff'},
            labelStyle: {
                fontSize: 12,
            }
        },
    }
);

const Stack = StackNavigator(
    {
        Tab: { screen: Tab },
        Search: { screen: Search },
    },

    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
            gesturesEnabled: true,
            header: null,
        },
        mode: 'card',
        headerMode: 'screen',
    }
);

const Drawer = DrawerNavigator(
    {
        Stack: { screen: Stack },
        Search: { screen: Search },
    },
);