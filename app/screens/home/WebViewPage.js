
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Platform,
    TouchableOpacity,
    WebView,
    Text,
    TextInput,
    Dimensions
} from 'react-native'

export default class WebViewPage extends PureComponent {

    render() {

        let url=this.props.url;

        return (
            <WebView
                style={styles.web}
                source={{uri:url}}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },web:{
        width:'100%',
        height:'100%'
    }
});