import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ShowsList from '../Screens/ShowsList';
import ShowData from '../Screens/ShowData';

export const AppStackNav = createStackNavigator({
	ShowsList: { screen: ShowsList },
	ShowData: { screen: ShowData }
});