/**
 * Description:Labs页面，水平广告位
 *
 * Author: zoe
 * Time: 2018/4/23 0023
 */
import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class LabsHorizontal extends PureComponent {
    renderItemH() {
        // 数组
        var itemAry = [];
        // 颜色数组
        var colorAry = [ 'green', 'blue', 'yellow', 'black', 'orange', 'red', 'pink' ];
        // 遍历
        for (var i = 0;
            i < colorAry.length;
            i++) {
            itemAry.push(
                <View key={i} style={[ styles.itemStyle, { backgroundColor : colorAry[ i ] } ]}></View>
            );
        }
        return itemAry;
    }

    render() {
        return (
            <View>
                <ScrollView
                    style={styles.itemBg}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>
                    {
                        this.renderItemH()
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemBg:{
        backgroundColor:'white',
        paddingTop:25,
        paddingBottom:25,
        paddingRight:20
    },
    itemStyle : {
        // 尺寸
        width : 300,
        height : 150,
        marginLeft : 20,
    }
})