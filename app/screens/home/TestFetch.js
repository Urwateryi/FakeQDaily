/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/4/27 0027
 */

import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from "react-native";
import NetUtil from "../../utils/NetUtil";
import Api from "../../network/Api";
import LabsItem from "./labs/LabsItem";

const MAX_RESULT = 20;//每页最大记录数

export default class TestFetch extends PureComponent {

    //构造函数
    constructor(props) {
        super(props);
        this.onEndReachedCalledDuringMomentum = true;
        this.state = {
            // 下拉刷新
            refreshing : false,
            loading : false,
            error : '',
            last_key : 0,
            dataSource : [],
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

        await NetUtil.get(Api.papers, params, result => {
                this.setState({
                    dataSource : this.state.dataSource.concat(result.response.feeds),
                    loading : false,
                    refreshing : false,
                });
            },
            err => {
                console.log("result is :\n" + err.toString())

                this.setState({
                    error : err.toString(),
                    loading : false,
                    refreshing : false
                });
            });

        console.log("result is :\n" + this.state.content)
    }

    //此函数用于为给定的item生成一个不重复的key
    //不设置这个的话，会报这个警告：Each child in an array or iterator should have a unique "key" prop.
    _keyExtractor = (item) => item.post.id;

    /**
     * 下啦刷新
     */
    handleRefresh = () => {
        this.setState({
            last_key : 0,
            refreshing : true,
            loading : false,
            // 清空数组
            dataSource : [],
        }, () => {
            this.getContent(0);
        });
    }

    /**
     * 上拉加载更多
     */
    handleLoadMore = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            this.setState({
                last_key : this.state.last_key,
                refreshing : false,
                loading : true,
            }, () => {
                this.getContent(this.state.last_key);
                this.onEndReachedCalledDuringMomentum = true;
            });
        }
    }

    renderItem = ({ item }) => {
        return (
            <LabsItem />
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.dataSource}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItem}

                //下拉刷新
                //表明list是否在refresh的状态。
                refreshing={this.state.refreshing}//在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号。
                onRefresh={this.handleRefresh}

                //上拉加载更多
                //当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
                onEndReached={this.handleLoadMore}
                //执行上啦的时候10%执行 决定当距离内容最底部还有多远时触发onEndReached回调。注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                onEndReachedThreshold={0.1}

                //可选优化项。但是实际测试中，如果不做该项优化，性能会差很多。所以强烈建议做此项优化！
                //如果不做该项优化，每个列表都需要事先渲染一次，动态地取得其渲染尺寸，然后再真正地渲染到页面中。
                //如果预先知道列表中的每一项的高度(ITEM_HEIGHT)和其在父组件中的偏移量(offset)和位置(index)，就能减少一次渲染。这是很关键的性能优化点。
                getItemLayout={(data, index) => (
                    { length : 90, offset : 90 * index, index }
                )}

                onMomentumScrollBegin={() => {
                    this.onEndReachedCalledDuringMomentum = false;
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 10,
        backgroundColor : 'white'
    }
});