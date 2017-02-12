import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	AsyncStorage
} from 'react-native';

class weather extends Component {
	render() {
		return (
			<View>
				<Text style={styles.text}>
					weather
				</Text>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	text:{
		fontSize: 30,
		paddingTop: 30
	}
});
module.exports = weather;