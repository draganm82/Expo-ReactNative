import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-43adf.cloudfunctions.net';

class SignInFrom extends Component {
  state = { phone: '', code: '' };


  handleSubmit = async () => {
  try {
    let {data} = await axios.post (`${ROOT_URL}/verifyOneTimePassword`, {
      phoen: this.state.phone,
      code: this.state.code
    });

    firebase.auth().SignInWithCustomToken(data.token);
  } catch (err) {
    console.log (err);
  }
  }

  render() {
    return (
      <Viev>
        <View style={{marginBottom: 10}}>
        <FormLabel />Enter phone number</FormLabel>
        <FormInput
          value ={this.state.phone}
          onChangeText = {phone => this.setState ({ phone })}
        />
        </View>

        <Viev>
          <View style={{marginBottom: 10}}>
          <FormLabel />Enter phone number</FormLabel>
          <FormInput
            value ={this.state.code}
            onChangeText = {code => this.setState ({ code })}
          />
          </View>




        <Button onPress = { this.handleSubmit.bind }  title= "Submit" />
      </View>

    );

  }

}


export default SignInFrom;
