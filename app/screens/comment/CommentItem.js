/**
 * Description:评论item
 *
 * Author: zoe
 * Time: 2018/5/8 0008
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
    Image,
    View,
    Text, Dimensions
} from 'react-native'
import Colors from "../../resources/Colors";
import Images from "../../resources/Images";
import TimeUtil from "../../utils/TimeUtil";
import Constants from "../../config/Constants";

export default class CommentItem extends PureComponent {

    createPraise() {
        ToastAndroid.show("点赞", ToastAndroid.SHORT)
    }

    createComment(){
        ToastAndroid.show("点击了评论", ToastAndroid.SHORT)
    }

    render() {
        let item = this.props.data;

        let content = item.content.trim();
        let time = TimeUtil.formatDate(item.publish_time, "MM-dd hh:mm");
        let praise_count = item.praise_count;

        let author = item.author;
        let head = author.avatar;
        let name = author.name;

        let child_comments = item.child_comments;

        return (
            <View style={styles.container}>
                <Image style={styles.head} source={{ uri : head }}/>

                <View style={styles.containerRight}>

                    <View style={styles.headContainer}>

                        <View style={{flexDirection : 'row'}}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.time}>{time}</Text>
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{flexDirection : 'row'}}
                            onPress={() => this.createPraise()}>

                            <Text style={styles.praiseTxt}>{praise_count}</Text>
                            <Image style={styles.praiseImg} source={Images.item.ic_praise_normal}/>

                        </TouchableOpacity>
                    </View>

                    <Text style={styles.content} onPress={() => this.createComment()}>{content}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 10,
        flexDirection : 'row',
        borderBottomColor : Colors.border,
        borderBottomWidth : Constants.divideLineWidth
    }, containerRight : {
        marginLeft : 10,
        flexDirection : 'column',//当前容器使用什么布局
    }, headContainer : {
        flex : 1,
        flexDirection : 'row',
    }, head : {
        width : 30,
        height : 30,
        borderRadius : 30,
        justifyContent : 'flex-start',
    }, name : {
        fontSize : 14,
        color : Colors.black,
        textAlign : 'left',
        fontWeight : '100'
    }, content : {
        fontSize : 12,
        marginTop : 10,
        width : Dimensions.get('window').width-60,
        marginBottom : 10,
        textAlign : 'left',
        color : Colors.black,
    }, time : {
        fontSize : 12,
        marginLeft : 10,
        alignSelf : 'center',
        color : Colors.light_gray,
    }, praiseTxt : {
        fontSize : 14,
        alignSelf : 'center',
        color : Colors.light_gray,
    }, praiseImg : {
        width : 14,
        height : 14,
        marginLeft : 5,
        alignSelf : 'center',
    }, inputHint : {}, input : {}
});