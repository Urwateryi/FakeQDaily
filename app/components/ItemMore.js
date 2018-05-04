import React, { PureComponent } from 'react';
import moreItemStyles from "../resources/styles/ItemMore";
import Images from "../resources/Images";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import TimeUtil from "../utils/TimeUtil";

/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/4/25 0025
 */
export default class ItemMore extends PureComponent {
    render() {
        //是否显示评论模块
        let isShowComment = this.props.isShowComment;
        let item =this.props.item;

        let commentCount=item.post.comment_count;
        let praiseCount=item.post.praise_count;
        let categoryTitle=item.post.category.title;
        let publishTime=TimeUtil.formatDate(item.post.publish_time,"yyyy-MM-dd hh:mm");

        return (
            <View style={moreItemStyles.more}>
                <Text style={moreItemStyles.moreTxt}>{categoryTitle}</Text>
                {isShowComment ? <Image style={[ moreItemStyles.moreImg, { marginLeft : 10 } ]} source={Images.item.ic_comment_normal}/> : null}
                {isShowComment ? <Text style={moreItemStyles.moreTxt}>{commentCount}</Text> : null}
                <Image style={[ moreItemStyles.moreImg, { marginLeft : 10 } ]} source={Images.item.ic_favor_normal}/>
                <Text style={moreItemStyles.moreTxt}>{praiseCount}</Text>
                <Text style={[ moreItemStyles.moreTxt, { marginLeft : 5 } ]}>{publishTime}</Text>
            </View>
        )
    }
}