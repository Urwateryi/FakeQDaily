/**
 * Description:设置主页
 *
 * Author: zoe
 * Time: 2018/5/22 0022
 */
import React, {PureComponent} from 'react';
import { View,Platform, StyleSheet } from "react-native";
export default class SettingMain extends PureComponent {

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    }
});