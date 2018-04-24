/**
 * Description:Labs页面的item
 *
 * Author: zoe
 * Time: 2018/4/23 0023
 */
import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Image,
    Dimensions
} from 'react-native';
import Images from "../../../resources/Images";
import Colors from "../../../resources/Colors";

export default class LabsItem extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.img} source={Images.test.beauty} resizeMode='cover'>
                    <Image
                        style={styles.join}
                        source={Images.item.ic_join_news}
                        resizeMode='contain'
                    />
                </ImageBackground>

                <View style={styles.titleBg}>
                    <Text style={styles.title}>
                        理想状况下，你觉得一个即将踏入社会的人最应该知道哪些东西你觉得一个即将踏入社会的人最应该知道哪些东西？
                    </Text>
                </View>

                <Text style={styles.bref}>
                    人们常常抱怨还没准备好就从象牙塔里出来了，究竟怎样才算准备好了，一个人进入公共生活钱应该具备哪些基本的储备？（题图来自：istock）
                </Text>

                <View style={styles.more}>
                    <Text style={styles.moreTxt}>城市</Text>
                    <Image style={styles.moreImg} source={Images.item.ic_comment_normal}/>
                    <Text style={styles.moreTxt}>13</Text>
                    <Image style={styles.moreImg} source={Images.item.ic_favor_normal}/>
                    <Text style={styles.moreTxt}>49</Text>
                    <Text style={[styles.moreTxt,{ marginLeft : 5}]}>7小时之前</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        width : Dimensions.get('window').width,
        backgroundColor : 'white',
    }, img : {
        flexDirection : 'row',
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').width / 2,
        justifyContent : 'flex-end',
        paddingTop : 10
    }, join : {
        width : 80,
        height : 60,
    }, title : {
        paddingLeft : 15,
        color : 'black',
        fontSize : 15,
        letterSpacing : 25
    }, bref : {
        marginTop : 10,
        paddingLeft : 15,
        fontSize : 12,
        color : Colors.gray,
        letterSpacing : 25,
        lineHeight : 18,
    }, titleBg : {
        paddingTop : 15
    }, brefBg : {
        margin : 15
    },more:{
        flexDirection:'row',
        paddingLeft:15,
        marginTop:10,
        marginBottom:15
    },moreTxt:{
        fontSize:11,
        color :Colors.light_gray
    },moreImg:{
        width:10,
        height:10,
        marginRight:5
    }
});