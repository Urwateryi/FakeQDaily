import React, { PureComponent } from 'react';
import moreItemStyles from "../resources/styles/ItemMore";
import Images from "../resources/Images";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/4/25 0025
 */
export default class ItemMore extends PureComponent{
    render(){
        return (
            <View style={moreItemStyles.more}>
                <Text style={moreItemStyles.moreTxt}>城市</Text>
                <Image style={[moreItemStyles.moreImg,{ marginLeft : 10}]} source={Images.item.ic_comment_normal}/>
                <Text style={moreItemStyles.moreTxt}>13</Text>
                <Image style={[moreItemStyles.moreImg,{ marginLeft : 10}]} source={Images.item.ic_favor_normal}/>
                <Text style={moreItemStyles.moreTxt}>49</Text>
                <Text style={[moreItemStyles.moreTxt,{ marginLeft : 5}]}>7小时之前</Text>
            </View>
        )
    }
}