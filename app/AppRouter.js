/**
 * Description:页面配置
 *
 * Author: zoe
 * Time: 2018/4/20 0020
 */
import React, { PureComponent } from "react";
import {
    Router,
    Scene
} from 'react-native-router-flux';
import {
    StyleSheet,
} from 'react-native';
import Colors from "./resources/Colors";
import Page1 from "./screens/home/Page1";
import Page2 from "./screens/home/Page2";

export default class AppRouter extends PureComponent{
    render() {
        return (
            <Router getSceneStyle={getSceneStyle}>
                <Scene hideNavBar key="root" tabs
                       tabBarStyle={styles.tabBarStyle}
                       labelStyle={styles.routerFluxLabelStyle}
                       activeTintColor={Colors.primary}
                       inactiveTintColor={Colors.gray}>
                    <Scene key="Page1" hideNavBar component={Page1}/>
                    <Scene key="Page2" hideNavBar component={Page2}/>
                </Scene>
            </Router>
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
})