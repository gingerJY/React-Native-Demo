import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,  
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const {width,height} = Dimensions.get('window');

import QiYu from 'react-native-qiyu';

//引用外部文件
import CommonHead from '../../components/commonHead';
import MessageItem from './messageItem';
export default class messageCenter extends Component {

    // 七鱼客服
    qiyu(){
        var params = {
            source:{
                sourceTitle:'网易七鱼ReactNative',
                sourceUrl:'http://www.qiyukf.com',
                sourceCustomInfo:'我是来自自定义的信息'
            },
            commodityInfo:{
                commodityInfoTitle:'ReactNative商品',
                commodityInfoDesc:'这是来自网易七鱼ReactNative的商品描述',
                pictureUrl:'http://qiyukf.com/res/img/companyLogo/blmn.png',
                commodityInfoUrl:'http://www.qiyukf.com',
                note:'￥1000',
                show:true
            },
            sessionTitle:'网易七鱼',
            groupId:0,
            staffId:0,
            robotId:0,
            robotFirst:false,
            faqTemplateId:0,
            vipLevel:0,
            showQuitQueue:true,
            showCloseSessionEntry:true
        }
        QiYu.openServiceWindow(params);
    }
    
    renderLeftItem(){
        return(
            <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
                <Image source={require('../../img/back.png')} style={styles.navLeft}/>
            </TouchableOpacity>
        )                
    }
    renderTitleItem(){
        return(
            <Text style={styles.title}>消息中心</Text>        
        )         
    }
   
    render() {
        return (
            <View style={styles.container}>
                <CommonHead
                    navBarColor='#fff'
                    borderBottomWidth={1}
                    leftItem = {() => this.renderLeftItem()}
                    titleItem = {() => this.renderTitleItem()}
                />
                <View style={styles.main}>
                    <View>
                        <MessageItem 
                            icon={require('../../img/kf.png')} 
                            title='在线客服' 
                            desc='小味为你服务 工作时间 9:00-24:00 宝宝们快来撩我吧~' 
                            onPress={() => {this.qiyu()}}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#efefef',
    },
    navLeft:{
        width:20,
        height:20,
        marginLeft:10,
    },
    title:{
        color:'#333',
        fontSize:18,
        marginRight:20,
    },
    main:{
        borderTopColor: '#999',
        borderTopWidth: 0.5,
    },
});