/**
 * Description:评论列表页
 *
 * Author: zoe
 * Time: 2018/5/8 0008
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    ScrollView,
    WebView,
} from 'react-native'
import NetUtil from "../../utils/NetUtil";
import Api from "../../network/Api";
import CommentItem from "./CommentItem";

export default class CommentPage extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            comments : [],
            topComments : [],
            commentCount : 0,
            lastKey : 0,
            hasMore : true
        };
    }

    componentDidMount() {
        this.getCommentList();
    }

    renderItem = () => {
        let itemAry = [];

        if (this.state.comments.length > 0) {
            for (let i = 0;
                i < this.state.comments.length;
                i++) {
                let commentItem = this.state.comments[ i ];
                itemAry.push(
                    <CommentItem key={commentItem.id} data={commentItem}/>
                );
            }
        }

        return itemAry;
    };

    render() {
        return (
            <ScrollView style={styles.container}
                        showsHorizontalScrollIndicator={false}>{
                this.renderItem()
            }</ScrollView>
        );
    }

    /**
     * 获取评论列表
     * @returns {Promise<void>}
     */
    async getCommentList() {

        await NetUtil.get(Api.getCommentList.replace("{id}", this.props.id),
            null,
            result => {

                console.log("result is :", result.response.comments);
                console.log("result is commentCount:", result.response.comment_count);
                console.log("result is lastKey:", result.response.last_key);
                console.log("result is hasMore:", result.response.has_more);

                this.setState({

                    comments : result.response.comments,
                    topComments : result.response.top_comments,

                    commentCount : result.response.comment_count,
                    lastKey : result.response.last_key,
                    hasMore : result.response.has_more
                });
            }, err => {
                console.log("err is :", err.toString());
            })
    }

    /**
     * 评论
     * @returns {Promise<void>}
     */
    async createComment() {

        let params = new Map();
        params.set('comment_type', comment_type);
        params.set('content', content);
        params.set('id', id);
        params.set('parent_id', parent_id);

        await NetUtil.postJson(Api.createComment,
            params,
            result => {
                console.log("result is :", result.response);

            }, err => {
                console.log("err is :", err.toString());
            })
    }
}