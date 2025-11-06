import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { ImageBackground } from 'react-native-web'

export default class GalScreen extends Component {
  render() {
    return (
      <View>
        <Text>GalScreen</Text>
        
        <Button title='Imagen1' color='#2885a7ff' onPress={() => {}}/>
       
      </View>
    )
  }
}

const styles = StyleSheet.create({})