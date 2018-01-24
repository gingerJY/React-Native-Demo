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

//引用插件
import Swiper from 'react-native-swiper';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


export default class recommend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swiperShow: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                swiperShow: true
            });
        }, 0)
    }

    // 轮播图
    renderBanner() {
        if (this.state.swiperShow) {
            return (
                <Swiper 
                    style={styles.wrapper} 
                    height={width*40/75} 
                    showsButtons={false} 
                    autoplay={true} 
                    paginationStyle={styles.paginationStyle} 
                    dotStyle={styles.dotStyle} 
                    activeDotStyle={styles.activeDotStyle}
                >
                    <Image source={require('../../img/1.jpg')} style={styles.bannerImg} />
                    <Image source={require('../../img/2.jpg')} style={styles.bannerImg} />
                    <Image source={require('../../img/3.jpg')} style={styles.bannerImg} />
                    <Image source={require('../../img/4.jpg')} style={styles.bannerImg} />
                    <Image source={require('../../img/3.jpg')} style={styles.bannerImg} />
                </Swiper>
            )
        } else {
            return (
                <View style={{ height: width*40/75 }}>
                    <Image source={require('../../img/1.jpg')} style={styles.bannerImg} />
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderBanner()}
                <Text>recommend</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    bannerImg: {
        height: width*40/75,
        width: width,
    },
    wrapper: {
        width: width,
    },
    paginationStyle: {
        bottom: 6,
    },
    dotStyle: {
        width: 22,
        height: 3,
        backgroundColor:'#fff',
        opacity: 0.4,
        borderRadius: 0,
    },
    activeDotStyle: {
        width: 22,
        height: 3,
        backgroundColor:'#fff',
        borderRadius: 0,
    },
});