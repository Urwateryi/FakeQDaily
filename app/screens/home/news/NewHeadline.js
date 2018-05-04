/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/4/24 0024
 */
import React, { PureComponent } from 'react';
import {
    View,
    Image,
    ScrollView,
    Text,
} from 'react-native';
import Images from "../../../resources/Images";
import styles from "../../../resources/styles/NewsHeadline"

class ListItem extends PureComponent {
    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.dot}>&bull;</Text>
                <Text style={styles.title}>
                    Google净利润大涨73%，但其中一半来自对外投资收益，财报发布后股价略下跌
                </Text>
            </View>
        )
    }
}

export default class NewHeadline extends PureComponent {

    renderItemTitle() {
        var itemAry = [];
        for (var i = 0;
            i < 3;
            i++) {
            itemAry.push(
                <ListItem key={i}/>
            );
        }
        return itemAry;
    }

    render() {
        let datas=this.props.data;

        return (
            <View style={styles.bg}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image style={styles.headImg} source={Images.menu.ic_menu_about}/>
                    <Text style={styles.headTitle}>
                        大公司头条
                    </Text>
                </View>
                <ScrollView style={{marginTop:10}}>{this.renderItemTitle()}</ScrollView>
                <View style={{ flexDirection:'row', justifyContent : 'flex-end',paddingRight:10}}>
                    <Text style={styles.checkDetail}>
                        查看详情>>
                    </Text>
                </View>
            </View>
        );
    }
}