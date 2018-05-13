import React, { Component } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class UserInfoScreen extends Component {
  static navigationOptions = {
    title: 'User Info',
  }

  render() {
    return (
      <SafeAreaView>
        <Text>사용자 정보 보여줄 부분</Text>
      </SafeAreaView>
    )
  }
}