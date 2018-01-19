import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
} from 'react-native';
// 取得屏幕的宽高Dimensions
const {width,height} = Dimensions.get('window');
export default class commonNavBar extends Component {
    static propTypes = {
      leftItem: PropTypes.func,
      titleItem: PropTypes.func,
      rightItem: PropTypes.func,
    };
    renderLeftItem(){
        if (this.props.leftItem === undefined) return;
        return this.props.leftItem();
    }
    renderTitleItem(){
        if (this.props.titleItem === undefined) return;
        return this.props.titleItem();
    }
    renderRightItem(){
        if (this.props.rightItem === undefined) return;
        return this.props.rightItem();
    }
    render() {
        return (
            <View style={[{width:width,
                height:40,
                backgroundColor: this.props.navBarColor || '#fff',
                flexDirection:'row',//横向排
                justifyContent:'space-between',//主轴对齐方式
                alignItems: 'center',
                borderBottomWidth: this.props.borderBottomWidth || 0,
                borderColor: this.props.borderColor || '#ccc',
            }, this.props.navBarStyle,]}>
                
                <View>
                    {this.renderLeftItem()}
                </View>
                <View>
                    {this.renderTitleItem()}
                </View>
                <View>
                    {this.renderRightItem()}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {

    }
});