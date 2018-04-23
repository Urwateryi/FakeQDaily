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
import NewsPage from "./screens/home/news/NewsPage";
import LabsPage from "./screens/home/labs/LabsPage";

export default class AppRouter extends PureComponent {
    render() {
        return (
            <Router getSceneStyle={getSceneStyle} scenes={scenes}/>
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
        fontFamily:'monospace',
        fontWeight:'100'
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
    <Scene hideNavBar key="root" tabs
           tabBarStyle={styles.tabBarStyle}
           labelStyle={styles.routerFluxLabelStyle}
           activeTintColor='black'
           inactiveTintColor={Colors.gray}>
        <Scene key="NewsPage" title="NEWS" hideNavBar component={NewsPage}/>
        <Scene key="LabsPage" title="LABS" hideNavBar component={LabsPage}/>
    </Scene>
);