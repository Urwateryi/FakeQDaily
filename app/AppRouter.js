/**
 * Description:页面配置
 *
 * Author: zoe
 * Time: 2018/4/20 0020
 */
import React, { PureComponent } from "react";
import {
    Router,
    Actions,
    Scene
} from 'react-native-router-flux';
import {
    StyleSheet,
} from 'react-native';
import Colors from "./resources/Colors";
import NewsPageFlatList from "./screens/home/news/NewsPageFlatList";
import LabsPage from "./screens/home/labs/LabsPage";
import WebViewPage from "./screens/home/WebViewPage";
import NewsDetailPage from "./screens/detail/NewsDetailPage";
import CommentPage from "./screens/comment/CommentPage";

import { Provider } from 'mobx-react';
import commentStore from './stores/CommentStore';
import loginStore from './stores/LoginStore';
import LoginPage from "./screens/setting/login/LoginPage";

export default class AppRouter extends PureComponent {
    render() {
        return (
            <Provider commentStore={commentStore} loginStore={loginStore}>
                <Router getSceneStyle={getSceneStyle} scenes={scenes}/>
            </Provider>
        );
    }
}

const getSceneStyle = () => ({
    backgroundColor : 'white',
    shadowOpacity : 1,
    shadowRadius : 3,
});

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "white",
        justifyContent : "center",
        alignItems : "center",
    },
    navigationBar : {
        backgroundColor : 'white',
    },
    routerFluxLabelStyle : {
        marginTop : 5,
        textAlign : 'center',
        fontSize : 15,
        fontFamily : 'monospace',
        fontWeight : '100'
    }, tabBarStyle : {
        justifyContent : "center",
        alignItems : "center",
        paddingBottom : 10,
        height : 45,
        backgroundColor : 'white'
    }
});

//各个界面
const scenes = Actions.create(
    <Scene hideNavBar key="root">
        <Scene tabs
               tabBarStyle={styles.tabBarStyle}
               labelStyle={styles.routerFluxLabelStyle}
               activeTintColor='black'
               inactiveTintColor={Colors.gray}>
            <Scene key="NewsPage" title="NEWS" hideNavBar component={NewsPageFlatList}/>
            <Scene key="LabsPage" title="LABS" hideNavBar component={LabsPage}/>
        </Scene>
        <Scene key="WebViewPage" component={WebViewPage}/>
        <Scene key="NewsDetailPage" component={NewsDetailPage}/>
        <Scene key="CommentPage" component={CommentPage}/>
        <Scene key="LoginPage" component={LoginPage}/>
    </Scene>
);