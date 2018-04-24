/**
 * Description:News页轮播图
 *
 * Author: zoe
 * Time: 2018/4/23 0023
 */
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    Platform
} from 'react-native';
import Colors from "../../../resources/Colors";

var {width} = Dimensions.get('window');
const ios = Platform.OS;

export default class NewsBanner extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            duration: 4000   //每隔一秒开始轮播
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={(scrollView)=>this.onAnimationEnd(scrollView)}
                    onScrollBeginDrag={this.onScrollBeginDrag.bind(this)}
                    onScrollEndDrag={this.onScrollEndDrag.bind(this)}
                >
                    {this._renderAllImage()}
                </ScrollView>

                <View style={styles.circleContainer}>
                    {this._renderCircleIndicator()}
                </View>
            </View>
        );
    }  /**
     * 一般在此方法中处理一些耗时操作
     */
    componentDidMount() {
        this._startTimer();

    }


    componentWillUnMount() {
        clearInterval(this.interval);
    }

    /**
     * 演染图片
     * @returns {Array}
     * @private
     * 网络图片：source={{uri: imgData[i].icon}}
     * 本地图片：source={imgData[i].icon}
     */
    _renderAllImage() {
        var imgArr = [];
        var imgData = this.props.imgData;
        for (var i in imgData) {
            imgArr.push(
                <Image
                    key={i}
                    source={imgData[i].icon}
                    style={{width: width, height: 220}}
                />
            )
        }
        return imgArr;
    }

    /**
     * 渲染圆点指示器
     * @private
     */
    _renderCircleIndicator() {
        var circleArr = [];
        var imgData = this.props.imgData;
        var style;
        for (var i in imgData) {
            style = i == this.state.currentPage ? {color: Colors.primary} : {color: Colors.trans_gray};
            circleArr.push(
                <Text key={i} style={[{fontSize: 30}, style,{marginLeft:5}]}>&bull;</Text>
            );
        }

        return circleArr;
    }

    /**
     * 当一页滑动结束时调用
     * @param scrollView
     */
    onAnimationEnd(scrollView) {

        // 计算一页滑动的偏移量
        var offSetX = scrollView.nativeEvent.contentOffset.x;
        console.log(offSetX);
        // 算出当前为第几页
        var currentPage = Math.floor((offSetX / width));
        this.setState({
            currentPage: currentPage
        });
    }

    /**
     * 开始拖拽时的回调
     * @private
     */
    onScrollBeginDrag() {
        clearInterval(this.interval);
    }

    /**
     * 拖拽停止时的回调
     * @private
     */
    onScrollEndDrag() {
        this._startTimer();
    }

    /**
     * 开启定时器
     * @private
     */
    _startTimer() {

        var scrollView = this.refs.scrollView;
        var imgCount = this.props.imgData.length;

        this.interval = setInterval(() => {

            //记录当前正在活动的图片
            var activePage = 0;
            if ((this.state.currentPage + 1) >= imgCount) { //防止越界
                activePage = 0;
            } else {
                activePage = this.state.currentPage + 1;
            }

            this.setState({
                currentPage: activePage
            });

            //让ScrollView动起来
            var offSetX = activePage * width;
            scrollView.scrollResponderScrollTo({x: offSetX, y: 0, animated: true});

        }, this.state.duration);
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: ios == 'ios' ? 25 : 0
    },
    circleContainer: {
        width: width,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        position: 'absolute',
        bottom: 0
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});