import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Sign In'
  }
  
  render () {
    return (
      <SafeAreaView>
        <Text>Hello</Text>
        <Button title="Login" onPress={() => this.props.navigation.navigate('App')} />
      </SafeAreaView>
    )
  }
}
