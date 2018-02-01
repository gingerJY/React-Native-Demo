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

export default class messageItem extends Component {
   
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Image source={this.props.icon} resizeMode='contain' style={styles.icon}/>
                <View style={styles.textContainer}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.time}>{this.props.time}</Text>
                    </View>                    
                    <Text style={styles.desc}>{this.props.desc}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        width:width,
        paddingTop:15,
        paddingLeft:15,
    },
    icon: {
        marginRight:15,
    },
    textContainer:{
        borderBottomColor: '#c0c0c0',
        borderBottomWidth: 0.5,
        width:width-95,
        paddingRight:15,
        paddingBottom:15,
    },
    titleBox:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    title:{
        color:'#333',
        fontSize:16,
        fontWeight:'bold',
    },
    time:{
        color:'#999',
        fontSize:12,
    },
    desc:{
        color:'#333',
        fontSize:14,
        height:40,
        lineHeight:20,
        marginTop:7.5,
    },
});