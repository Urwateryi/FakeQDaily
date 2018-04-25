/**
 * Description:主Item的布局
 *
 * Author: zoe
 * Time: 2018/4/24 0024
 */
import React,{ PureComponent } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import Images from "../../../resources/Images";
import ItemMore from "../../../components/ItemMore";

export default class FeedsItem extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.title} numberOfLines={2}>
                        全球头条速递|《外交政策》认为马克龙不是纯粹自由主义者；已知得到的最新消息
                    </Text>
                    <ItemMore/>
                </View>
                <Image style={styles.img} source={Images.test.test_1}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        marginTop:10,
        flexDirection:'row',
        backgroundColor:'white',
        height:100
    },
    titleView:{
        flex:55,
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center',
        paddingRight:10
    },
    title:{
        paddingLeft : 15,
        color : 'black',
        fontSize : 15,
        letterSpacing : 25,
    },
    img:{
        flex:45,
        resizeMode:'center',
        alignSelf:'center',
    },
})