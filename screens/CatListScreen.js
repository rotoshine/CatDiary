import React, { Component } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class CatListScreen extends Component {
  static navigationOptions = {
    title: 'My Cats',
  }

  render() {
    return (
      <SafeAreaView >
        <Text>test</Text>
      </SafeAreaView >
    )
  }
}
