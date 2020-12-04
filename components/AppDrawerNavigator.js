import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {BottomNavigator} from '../components/BottomNavigator';
import CustomSideBarMenu from '../components/CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: BottomNavigator
  },
  Settings : {
  screen : SettingScreen
},
},
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName: 'Home'
  })
