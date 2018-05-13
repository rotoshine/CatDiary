import React, { Component } from 'react'
import { Text } from 'react-native'
import { SafeAreaView  } from 'react-navigation'

export default class ConfigScreen extends Component {
  static navigationOptions = {
    title: 'Config',
  }

  render () {
    return (
      <SafeAreaView>
        <Text>Config</Text>
      </SafeAreaView>
    )
  }
}
