/**
 * Description:登录
 *
 * Author: zoe
 * Time: 2018/5/22 0022
 */
import React, { PureComponent } from 'react';
import { View, Image, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import Colors from "../../../resources/Colors";
import Constants from "../../../config/Constants";
import Images from "../../../resources/Images";

export default class LoginPage extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.backImg} source={Images.all.ic_back}/>
                    <Text style={styles.title}>登录</Text>
                </View>

                <Image style={styles.head} source={Images.home.ic_more}/>

                <TextInput
                    placeholder='手机号码/邮箱'
                    placeholderTextColor={Colors.light_gray}
                    underlineColorAndroid='transparent'
                    maxLength={20}
                    style={styles.inputPhone}
                />

                <TextInput
                    placeholder='密码'
                    placeholderTextColor={Colors.light_gray}
                    underlineColorAndroid='transparent'
                    maxLength={20}
                    style={styles.inputPassWord}
                />

                <Text style={styles.forget}>忘记密码</Text>
                <Text style={styles.loginBtn}>登录</Text>
                <Text style={styles.register}>注册新账号</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20,
        alignItems:'center',
        backgroundColor : 'white'
    },
    header : {
        width : Dimensions.get('window').width,
        alignItems : 'center',
        flexDirection : 'row',
    },
    backImg : {
        alignSelf:'flex-start',
        width : 35,
        height : 35
    },
    title : {
        flex:1,
        alignSelf:'center',
        fontSize : 15,
        color : 'black'
    },
    head : {
        marginTop:40,
        width : 100,
        height : 100,
        borderRadius : 100,
    },
    inputPhone : {
        marginTop:30,
        width : Dimensions.get('window').width,
        height:50,
        alignSelf:'flex-start',
        borderBottomColor : Colors.border,
        borderBottomWidth : Constants.divideLineWidth
    },
    inputPassWord : {
        height:50,
        width : Dimensions.get('window').width,
        alignSelf:'flex-start',
        borderBottomColor : Colors.border,
        borderBottomWidth : Constants.divideLineWidth
    },
    forget : {
        marginTop:20,
        flexDirection:'row',
        alignSelf:'flex-end',
        fontSize : 12,
        color : 'gray'
    },
    loginBtn : {
        marginTop:20,
        fontSize : 18,
        color : 'white',
        fontWeight : '200',
        width : 150,
        backgroundColor:Colors.primary,
        textAlignVertical : 'center',
        textAlign : 'center',
        height : 50,
        borderRadius : 20
    },
    register : {
        marginTop:20,
        fontSize : 15,
        color : 'black'
    }
});