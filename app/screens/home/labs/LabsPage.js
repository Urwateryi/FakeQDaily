/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/4/20 0020
 */
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Colors from "../../../resources/Colors";
import LabsHorizontal from "./LabsHorizontal";
import LabsItem from "./LabsItem";

export default class LabsPage extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <LabsItem/>
                <LabsHorizontal style={{marginTop:10}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',//当前容器使用什么布局
        backgroundColor: Colors.bg,
    },text:{
        fontSize: 50,
        textAlign: 'center',
        color: Colors.gray,
    }
})