/**
 * Description:评论输入模块
 *
 * Author: zoe
 * Time: 2018/5/9 0009
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
    TextInput,
    View,
    Text, Dimensions
} from 'react-native'

import Colors from "../../resources/Colors";
import Images from "../../resources/Images";
import TimeUtil from "../../utils/TimeUtil";
import Constants from "../../config/Constants";
import Api from "../../network/Api";
import NetUtil from "../../utils/NetUtil";

export default class CommentInput extends PureComponent {
    render() {
        return (
            <View style={styles.container}>

                <TextInput multiline={true}
                           placeholder='添加评论...'
                           placeholderTextColor={Colors.gray}
                           underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                           autoCapitalize={'characters'}
                           editable={true}
                           maxLength={20}
                           style={styles.input}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : Dimensions.get('window').width,
        position : 'absolute',
        bottom:0,
        paddingLeft : 15,
        paddingRight : 15,
        paddingTop : 10,
        backgroundColor : 'white',
        paddingBottom : 10,
        borderTopColor : Colors.border,
        borderTopWidth : Constants.divideLineWidth
    }, input : {
        height : 30,
        paddingVertical: 0,//paddingVertical设置为0解决TextInput文字不垂直居中的问题
        justifyContent:'center',
        alignItems:'center',
        backgroundColor : Colors.bg,
        borderRadius : 5,
        borderWidth : 0,
    }
});