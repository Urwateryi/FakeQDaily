/**
 * Description:Labs页面的item
 *
 * Author: zoe
 * Time: 2018/4/23 0023
 */
import React, { PureComponent } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
} from 'react-native';
import Images from "../../../resources/Images";
import labsItemStyles from "../../../resources/styles/LabsItem"
import ItemMore from "../../../components/ItemMore";

export default class LabsItem extends PureComponent  {

    render() {
        let item=this.props.data;

        console.info("///////////////",item)

        console.log(item.post)

        let image=item.post.image;
        let title = item.post.title;
        let description = item.post.description;

        console.log('title:'+title)
        console.log('description:'+description)
        return (
            <View style={labsItemStyles.container}>
                <ImageBackground style={labsItemStyles.img} source={{uri:image}} resizeMode='cover'>
                    <Image
                        style={labsItemStyles.join}
                        source={Images.item.ic_join_news}
                        resizeMode='contain'
                    />
                </ImageBackground>

                <View style={labsItemStyles.titleBg}>
                    <Text style={labsItemStyles.title} numberOfLines={2}>
                        {title}
                    </Text>
                </View>

                <Text style={labsItemStyles.bref}>
                    {description}
                </Text>

                <ItemMore/>
            </View>
        );
    }
}