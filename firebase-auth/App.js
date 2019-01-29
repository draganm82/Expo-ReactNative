import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'
import SignUpFrom from './components/SignUpForm'
import SignInFrom from './components/SignInForm'

export default class App extends React.Component {
  componentDidMount () {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyAdDN4mKzDjhL_HXxu-iUJKYj-YFrwSxxs',
      authDomain: 'one-time-password-43adf.firebaseapp.com',
      databaseURL: 'https://one-time-password-43adf.firebaseio.com',
      projectId: 'one-time-password-43adf',
      storageBucket: 'one-time-password-43adf.appspot.com',
      messagingSenderId: '44014101125'
    }
    firebase.initializeApp(config)
  }
  render () {
    return (
      <View style={styles.container}>
        <SignUpFrom />
        <SignInForm />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-arounf'
  }
})
