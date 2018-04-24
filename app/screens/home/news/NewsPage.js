/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/4/20 0020
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Colors from "../../../resources/Colors";
import NewsBanner from "./NewsBanner";
import Images from "../../../resources/Images";
import NewHeadline from "./NewHeadline";
import NewsItemHeader from "./NewsItemHeader";

const datas = [
    {
        "icon" : Images.test.test_1,
        "title" : "你那一笑倾国倾城"
    },
    {
        "icon" : Images.test.test_2,
        "title" : "那里记录了最唯美的爱情故事"
    },
    {
        "icon" : Images.test.test_3,
        "title" : "我怎么是一个剩女"
    }
]

export default class NewsPage extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <NewsBanner imgData={datas}/>
                <NewHeadline/>
                <NewsItemHeader/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',//当前容器使用什么布局
        backgroundColor : Colors.bg,
    }, text : {
        fontSize : 50,
        textAlign : 'center',
        color : Colors.gray,
    }
})