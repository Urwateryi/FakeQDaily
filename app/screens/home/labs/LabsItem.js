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

export default class LabsItem extends PureComponent {

    //构造函数
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={labsItemStyles.container}>
                <ImageBackground style={labsItemStyles.img} source={Images.test.beauty} resizeMode='cover'>
                    <Image
                        style={labsItemStyles.join}
                        source={Images.item.ic_join_news}
                        resizeMode='contain'
                    />
                </ImageBackground>

                <View style={labsItemStyles.titleBg}>
                    <Text style={labsItemStyles.title} numberOfLines={2}>
                        理想状况下，你觉得一个即将踏入社会的人最应该知道哪些东西你觉得一个即将踏入社会的人最应该知道哪些东西？
                    </Text>
                </View>

                <Text style={labsItemStyles.bref}>
                    人们常常抱怨还没准备好就从象牙塔里出来了，究竟怎样才算准备好了，一个人进入公共生活钱应该具备哪些基本的储备？（题图来自：istock）
                </Text>

                <ItemMore/>
            </View>
        );
    }
}