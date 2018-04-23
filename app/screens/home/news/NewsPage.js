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

const datas = [
    {
        "icon" : Images.menu.ic_menu_about,
        "title" : "你那一笑倾国倾城"
    },
    {
        "icon" : Images.menu.ic_menu_category,
        "title" : "那里记录了最唯美的爱情故事"
    },
    {
        "icon" : Images.menu.ic_menu_close_x,
        "title" : "我怎么是一个剩女"
    }
]

export default class NewsPage extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <NewsBanner imgData={datas}/>
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