import React from 'react'
import { Platform } from 'react-native'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import IntroScreen from './screens/IntroScreen'
import SignInScreen from './screens/SignInScreen'
import CatListScreen from './screens/CatListScreen'
import CatTimelineScreen from './screens/CatTimelineScreen'
import UserInfoScreen from './screens/UserInfoScreen'
import ConfigScreen from './screens/ConfigScreen'
const icons = {
  Cat: 'ios-paw',
  UserInfo: 'ios-person',
  Config: 'ios-cog',
}

const Cat = createStackNavigator({
  CatList: CatListScreen,
  CatTimeline: CatTimelineScreen,
})

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
})

const getIcon = ({ focused, tintColor }) => {
  const { routeName } = navigation.state
  const iconName = icons[routeName]

  return (
    <Ionicons name={iconName} size={25} color={tintColor} />
  )
}

const AppNavigator = (Platform.os === 'ios') ? 
  createBottomTabNavigator({
    Cat,
    UserInfo: UserInfoScreen,
    Config: ConfigScreen,
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: getIcon
    })
  }) :
  createDrawerNavigator({
    Cat: {
      screen: Cat,
    },
    UserInfo: {
      screen: UserInfoScreen,
    },
    Config: {
      screen: ConfigScreen,
    },
  }, {
    navigationOptions: ({ navigation }) => ({
      drawerLabel: () => navigation.state.routeName,
      drawerIcon: getIcon,
    })  
  })

export default createSwitchNavigator(
  {
    Intro: IntroScreen,
    Auth: AuthStack,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Intro',
  }
)