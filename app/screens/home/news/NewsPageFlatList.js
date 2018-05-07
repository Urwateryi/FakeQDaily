/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/4/20 0020
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';

import Colors from "../../../resources/Colors";
import FeedsItem from "./FeedsItem";
import Api from "../../../network/Api";
import NetUtil from "../../../utils/NetUtil";
import NewsBanner from "./NewsBanner";
import NewsHeadline from "./NewsHeadline";

const MAX_RESULT = 20;//每页最大记录数

export default class NewsPageFlatList extends PureComponent {

    constructor(props) {
        super(props);
        this.onEndReachedCalledDuringMomentum = true;

        this.state = {
            // 下拉刷新
            refreshing : false,
            loading : false,
            error : '',
            last_key : 0,
            has_more : true,
            my_subscription_location : 0,

            feedsList : [],

            feeds : [],
            feedsAd : [],
            banners : [],
            bannersAd : [],
            columns : [],
            columnsAd : [],
            headline : {},
            featuredArticle : [],
        };
    }

    componentDidMount() {
        this.getContent(0)
    }

    async getContent(last_key) {
        let params = new Map();
        if (last_key !== 0) {
            params.set('last_key', last_key);
        } else {
            params = null;
        }

        console.log('last_key:' + last_key);

        await NetUtil.get(Api.news, params, result => {
                this.setState({
                        feeds : this.state.feeds.concat(result.response.feeds),
                        feedsAd : this.state.feedsAd.concat(result.response.feeds_ad),
                        banners : this.state.banners.concat(result.response.banners),
                        bannersAd : this.state.bannersAd.concat(result.response.banners_ad),

                        columns : this.state.columns.concat(result.response.columns),
                        columnsAd : this.state.columnsAd.concat(result.response.columns_ad),

                        headline : result.response.headline,
                        featuredArticle : this.state.featuredArticle.concat(result.response.featured_article),

                        last_key : result.response.last_key,
                        has_more : result.response.has_more,
                        my_subscription_location : result.response.my_subscription_location,

                        loading : false,
                        refreshing : false,
                    }
                );
                if (this.state.headline) {
                    this.state.feeds.splice(0, 0, this.state.headline);
                }
            },
            err => {
                console.log("result is :", err.toString());

                this.setState({
                    error : err.toString(),
                    loading : false,
                    refreshing : false
                });
            });
    }

    /**
     * 渲染头部
     * @param banners
     * @returns {*}
     */
    renderHeader = (banners) => {
        return (
            <NewsBanner data={banners}/>
        )
    };

    /**
     * 渲染
     *
     * @param item
     * @param index
     * @returns {*}
     */
    renderItem = ({ item, index }) => {
        if (this.state.headline) {
            if (index === 0) {
                return (
                    <NewsHeadline data={this.state.headline}/>
                );
            } else {
                return (
                    <FeedsItem data={item}/>
                )
            }
        } else {
            return (
                <FeedsItem data={item}/>
            )
        }
    };

    keyExtractor = (item, index) => (item.post.id + index).toString();

    render() {
        return (
            <FlatList
                data={this.state.feeds}
                style={styles.container}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}

                ListHeaderComponent={this.renderHeader(this.state.banners)}

                getItemLayout={(data, index) => (
                    { length : 130, offset : 130 * index, index }
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',//当前容器使用什么布局
        backgroundColor : Colors.bg,
    }, text : {
        fontSize : 50,
        textAlign : 'center',
        color : Colors.gray,
    }
});