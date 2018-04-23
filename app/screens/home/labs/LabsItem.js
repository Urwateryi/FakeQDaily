/**
 * Description:Labs页面的item
 *
 * Author: zoe
 * Time: 2018/4/23 0023
 */
import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions
} from 'react-native';
import Images from "../../../resources/Images";

export default class LabsItem extends PureComponent {
    render() {
        return (
            <View>
                <ImageBackground style={styles.img} source={Images.test.beauty} resizeMode='cover'>
                    <Image
                        style={styles.join}
                        source={Images.item.ic_join_news}
                        resizeMode='contain'
                    />
                </ImageBackground>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }, img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
    },join:{
        width: 80,
        height: 60,
    }
});