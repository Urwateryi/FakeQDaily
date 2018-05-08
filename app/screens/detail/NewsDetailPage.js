/**
 * Description:新闻详情页
 *
 * Author: zoe
 * Time: 2018/5/8 0008
 */

import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    WebView,
} from 'react-native'
import NetUtil from "../../utils/NetUtil";
import Api from "../../network/Api";

export default class NewsDetailPage extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            id : this.props.id,
            body : '',
            error : ''
        };
    }

    componentDidMount() {
        this.getDetail(this.state.id);
    }

    /**
     * 获取详情
     */
    async getDetail(id) {
        let url = Api.newsDetail.replace('{id}', id);

        await NetUtil.get(url, null, result => {
                console.log("result is :", result);

                this.setState({
                        body : result.response.article.body,
                    }
                );

                console.log("body is :", this.state.body);
            },
            err => {
                console.log("err is :", err.toString());

                this.setState({
                    error : err.toString(),
                });
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    style={styles.web}
                    source={{ html : this.state.body,baseUrl: ''  }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    }, web : {
        width : '100%',
        height : '100%',
    }
});