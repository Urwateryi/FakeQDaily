/**
 * Description:评论输入模块
 *
 * Author: zoe
 * Time: 2018/5/9 0009
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    ToastAndroid,
    TouchableOpacity,
    Text, Dimensions
} from 'react-native'

import Colors from "../../resources/Colors";
import Images from "../../resources/Images";
import TimeUtil from "../../utils/TimeUtil";
import Constants from "../../config/Constants";
import Api from "../../network/Api";
import NetUtil from "../../utils/NetUtil";

export default class CommentInput extends PureComponent {

     submit() {

        ToastAndroid.show("评论",ToastAndroid.SHORT)

        // let params = new Map();
        // params.set('comment_type', comment_type);
        // params.set('content', content);
        // params.set('id', id);
        // params.set('parent_id', parent_id);
        //
        // await NetUtil.postJson(Api.createComment,
        //     null,
        //     result => {
        //
        //         console.log("result is :", result.response.comments);
        //
        //
        //         this.setState({
        //
        //         });
        //     }, err => {
        //         console.log("err is :", err.toString());
        //     })
    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput multiline={true}
                           keyboardType='default'
                           placeholder='添加评论...'
                           placeholderTextColor={Colors.gray}
                           underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                           autoCapitalize={'characters'}
                           editable={true}
                           maxLength={20}
                           style={styles.input}
                />

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => this.submit()}>
                    <Text style={styles.submit}>评论</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection:'row',
        width : Dimensions.get('window').width,
        position : 'absolute',
        bottom : 0,
        paddingLeft : 15,
        paddingRight : 15,
        paddingTop : 10,
        backgroundColor : 'white',
        paddingBottom : 10,
        borderTopColor : Colors.border,
        borderTopWidth : Constants.divideLineWidth
    }, input : {
        flex:1,
        height : 30,
        paddingVertical : 0,//paddingVertical设置为0解决TextInput文字不垂直居中的问题
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : Colors.bg,
        borderRadius : 5,
        borderWidth : 0,
    }, submit : {
        height : 28,
        width : 35,
        textAlign:'center',//可以控制Text中的文本在Text中的水平对齐方式
        textAlignVertical :'center',//那么当给Text设置height时，如何控制文本在Text中的垂直居中?属性 textAlignVertical enum('auto', 'top', 'bottom', 'center')  只在android上有效
        marginLeft:10,
        borderRadius : 5,
        backgroundColor : Colors.bg,
        color : Colors.gray,
    }
});