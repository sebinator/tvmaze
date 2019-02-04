import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const ListShow = (props) => (
	<View style={ styles.container }>
		<TouchableOpacity style={ styles.aboutShow } onPress={ () => props.navigation.navigate('ShowData', { id: props.id }) }>
			<Text style={ styles.showName }>{ props.name }</Text>
		</TouchableOpacity>
	</View>
)

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		borderColor: '#cccccc',
		padding: 10,
		width: '100%'
	},
	showName: {
		fontSize: 20,
	},
})

export default withNavigation(ListShow);