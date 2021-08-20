import React from "react";
import { StyleSheet, View, TextInput, Text, Alert, TouchableOpacity } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import styles from "./styles/LoginStyles";
import { colors } from "../utils/colors";
class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      isChecked1:false,
      isChecked2:false,
      email:'',
      password:'',
      name:'',
      number:''
    };
  }
  validEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text);
  }
  render() {
    return(
      <View style={styles.mainView}>
        <View>
          <Text style={styles.login}>
            SignUp
          </Text>
        </View>
        <View style={styles.checkView}>
          <View style={styles.checkInner}>
            <CheckBox
              value={this.state.isChecked1}
              onValueChange={(value)=>{this.setState({isChecked1:value,isChecked2:false})}}
              tintColors={{true:colors.rgb_7807d0,false:'black'}}
            />
            <Text style={styles.checkText}>Seeker</Text>
          </View>
          <View style={styles.checkInner}>
            <CheckBox
              value={this.state.isChecked2}
              onValueChange={(value)=>{this.setState({isChecked2:value,isChecked1:false})}}
              tintColors={{true:colors.rgb_7807d0,false:'black'}}
              //boxType='circle'
            />
            <Text style={styles.checkText}>Recruiter</Text>
          </View>

        </View>
        <View>
          <Text style={styles.inputText}>Your Email*</Text>
          <TextInput
            placeholder={"Enter your email"}
            style={styles.input}
            onChangeText={text => {
              this.setState({ email: text });
            }}
            returnKeyType={"next"}
            onSubmitEditing={() => {
              this.nameRef.focus();
            }}
            blurOnSubmit={false}
          />

          <Text style={styles.inputText}>Your Name*</Text>
          <TextInput
            placeholder={"Enter your name"}
            ref={(ref1) => this.nameRef = ref1}
            style={styles.input}
            onChangeText={text => {
              this.setState({ name: text });
            }}
            returnKeyType={"next"}
            onSubmitEditing={() => {
              this.numberRef.focus();
            }}
            blurOnSubmit={false}
          />

          <Text style={styles.inputText}>Your Number*</Text>
          <TextInput
            placeholder={"Enter your number"}
            ref={(ref1) => this.numberRef = ref1}
            maxLength={10}
            keyboardType={"numeric"}
            style={styles.input}
            onChangeText={text => {
              this.setState({ number: text });
            }}
            returnKeyType={"next"}
            onSubmitEditing={() => {
              this.pwdRef.focus();
            }}
            blurOnSubmit={false}
          />

          <Text style={styles.inputText}>Password*</Text>
          <TextInput
            placeholder={"Enter your password"}
            ref={(ref1) => this.pwdRef = ref1}
            maxLength={10}
            style={styles.input}
            onChangeText={text => {
              this.setState({ password: text });
            }}
          />
          <TouchableOpacity
            onPress={() =>this.state.isChecked1==true||this.state.isChecked2==true
            &&this.validEmail(this.state.email) &&this.state.password != ""&&this.state.name != ""
              &&this.state.number!= ""?
              Alert.alert('email is '+this.state.email +'\n'+'password is '+this.state.password
                +'\n'+'name is '+this.state.name+'\n'+'number is '+this.state.number):
              Alert.alert('error')}
            style={styles.button}>
            <Text>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.Text1}>
            <Text style={styles.Text2}>Already have an acoount</Text>
            <Text style={styles.Text3}
                  onPress={() => this.props.navigation.navigate('LoginScreen')}> LogIn?</Text>
          </Text>
        </View>

      </View>
    )
  }
}


export default SignUp
