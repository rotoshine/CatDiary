import React, { Component } from 'react'
import { Text } from 'react-native'
import { SafeAreaView  } from 'react-navigation'

export default class IntroScreen extends Component {
  componentDidMount() {
    const { navigation } = this.props
    setTimeout(() => {
      navigation.navigate('Auth')
    }, 1000 * 1)
  }

  render() {
    return (
      <SafeAreaView  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </SafeAreaView >
    )
  }
}