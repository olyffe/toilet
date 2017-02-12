import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	AsyncStorage,
	WebView
} from 'react-native';
import TWebView from './TWebView'
class toiletPage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TWebView url="/Users/zhangxu/work/toilet/toilet/html/nearby.html"/>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container:{
			flex: 1
	}
});
module.exports = toiletPage;