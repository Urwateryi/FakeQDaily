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
import Page1 from "./screens/home/Page1";
import Page2 from "./screens/home/Page2";

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
        fontSize : 15
    }, tabBarStyle : {
        justifyContent : "center",
        alignItems : "center",
        paddingBottom : 10,
        height : 45,
        backgroundColor : 'white'
    }
});

const scenes = Actions.create(
    <Scene hideNavBar key="root" tabs
           tabBarStyle={styles.tabBarStyle}
           labelStyle={styles.routerFluxLabelStyle}
           activeTintColor={Colors.primary}
           inactiveTintColor={Colors.gray}>
        <Scene key="NewsPage" title="NEWS" hideNavBar component={Page1}/>
        <Scene key="LabsPage" title="LABS" hideNavBar component={Page2}/>
    </Scene>
);