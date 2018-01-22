import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

// 引用头部组件
import CommonHead from '../../components/commonHead';

const { width, height } = Dimensions.get('window');

export default class home extends Component {

    // 头部左侧
    renderLeftItem() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search') }} style={styles.navLeft}>
                <Image source={require('../../img/scanning.png')} style={styles.navIcon} />
                <Text style={styles.navText}>扫一扫</Text>
            </TouchableOpacity>
        )
    }
    // 头部中间
    renderTitleItem() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search') }}>
                <View style={styles.searchBox}>
                    <Image source={require('../../img/search.png')} style={styles.searchIcon} />
                    <Text style={styles.searchContent}>搜索商品, 共10161款好物</Text>
                </View>
            </TouchableOpacity>
        )
    }
    // 头部右侧
    renderRightItem() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('MessageCenter') }} style={styles.navRight}>
                <Image source={require('../../img/remind.png')} style={styles.navIcon} />
                <Text style={styles.navText}>消息</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <CommonHead
                    leftItem={() => this.renderLeftItem()}
                    titleItem={() => this.renderTitleItem()}
                    rightItem={() => this.renderRightItem()}
                />
                <Text>home</Text>
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
        backgroundColor: '#efefef',
    },
    navLeft:{
        alignItems:'center',
        marginLeft: 10,
    },
    navRight: {
        alignItems:'center',
        marginRight: 10,
    },
    navIcon: {
        height:20,
        width:20,
    },
    navText:{
        fontSize:10,
    },   
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        width: width*0.7,
        backgroundColor: '#ededed',
        borderRadius: 5,
        height: 30,
    },
    searchIcon: {
        width: 16,
        height: 16,
        marginRight: 6,
    },
    searchContent: {
        color: '#666',
        fontSize: 14,
    },
});
