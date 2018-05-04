/**
 * Description:主Item的布局
 *
 * Author: zoe
 * Time: 2018/4/24 0024
 */
import React, { PureComponent } from "react";
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

        let item=this.props.data;

        let image = item.post.image;
        let title = item.post.title;

        return (
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.title} numberOfLines={3}>
                        {title}
                    </Text>
                    <ItemMore isShowComment={false} item={item}/>
                </View>
                <Image style={styles.img} source={{uri:image}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        marginTop : 5,
        flexDirection : 'row',
        backgroundColor : 'white',
    },
    titleView : {
        flex : 55,
        alignSelf : 'center',
        justifyContent : 'center',
        alignContent : 'center',
        paddingRight : 10
    },
    title : {
        paddingLeft : 15,
        color : 'black',
        fontSize : 15,
        letterSpacing : 25,
        lineHeight : 25,
    },
    img : {
        flex : 45,
        height : 120,
        resizeMode : 'cover',
        alignSelf : 'center',
    },
})