import React from "react";
import { Text, StyleSheet } from 'react-native';

export const H1 = (props) => (
	<Text style={[ styles.h1, {textAlign: (props.textAlign) ? props.textAlign : 'center', color: (props.color) ? props.color : '#333333', backgroundColor: (props.bgcolor) ? props.bgcolor : 'transparent' }, props.bold && styles.strong ]}>{ props.children }</Text>
)

export const H2 = (props) => (
	<Text style={[ styles.h2, {textAlign: (props.textAlign) ? props.textAlign : 'center', color: (props.color) ? props.color : '#333333', backgroundColor: (props.bgcolor) ? props.bgcolor : 'transparent' }, props.bold && styles.strong ]}>{ props.children }</Text>
)

export const H3 = (props) => (
	<Text style={[ styles.h3, {textAlign: (props.textAlign) ? props.textAlign : 'center', color: (props.color) ? props.color : '#333333', backgroundColor: (props.bgcolor) ? props.bgcolor : 'transparent' }, props.bold && styles.strong ]}>{ props.children }</Text>
)

export const H4 = (props) => (
	<Text style={[ styles.h4, {textAlign: (props.textAlign) ? props.textAlign : 'center', color: (props.color) ? props.color : '#333333', backgroundColor: (props.bgcolor) ? props.bgcolor : 'transparent' }, props.bold && styles.strong ]}>{ props.children }</Text>
)

export const Strong = (props) => (
	<Text style={[ styles.strong, {color: (props.color) ? props.color : '#333333'} ]}>{ props.children }</Text>
)

export const Br = (props) => (
	"\n"
)

export const Italic = (props) => (
	<Text style={[ styles.italic, {fontSize: (props.fontSize) ? props.fontSize : 10 } ]}>{ props.children }</Text>
)

export const ColoredText = (props) => (
	<Text style={{color: (props.color) ? props.color : '#333333' }}>{ props.children }</Text>
)

const styles = StyleSheet.create({
  h1: {
	fontSize: 40,
	padding: 10,
	width: '100%',
  },
  h2: {
	fontSize: 35,
	padding: 8,
	width: '100%',
  },
  h3: {
	fontSize: 30,
	padding: 6,
	width: '100%',
  },
  h4: {
	fontSize: 25,
	padding: 4,
	width: '100%',
  },
  strong: {
  	fontWeight: 'bold',
  },
  italic: {
  	fontStyle: 'italic'
  }
});