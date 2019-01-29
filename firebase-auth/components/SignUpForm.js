import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-43adf.cloudfunctions.net';

class SignUpFrom extends Component {
  state = {phone: '' };

  handleSubmit = async () => {
    try {
     await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })

     await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
   } catch (err) {
     conslole.log(err);
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
        <Button onPress = { this.handleSubmit.bind }  title= "Submit" />
      </View>

    );

  }

}


export default SignUpFrom;
